import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const postnr = request.nextUrl.searchParams.get('postnr');
  const kwh = request.nextUrl.searchParams.get('kwh');

  if (!postnr || postnr.length !== 5 || !kwh) {
    return NextResponse.json({ error: 'postnr och kwh krävs' }, { status: 400 });
  }

  let browser;
  try {
    // Dynamic import – laddas bara när någon faktiskt söker
    const { chromium } = await import('playwright');

    console.log(`🚀 Scrapar Elpriskollen för ${postnr} / ${kwh} kWh`);

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.elpriskollen.se/', { waitUntil: 'networkidle' });

    // === WIZARD STEG ===
    await page.getByPlaceholder(/postnummer/i).fill(postnr);
    await page.getByRole('button', { name: /nästa/i }).click();

    await page.getByText(/jag känner till min årsförbrukning/i).click();
    await page.getByPlaceholder(/årsförbrukning|kwh/i).fill(kwh);
    await page.getByRole('button', { name: /nästa/i }).click();

    await page.getByRole('button', { name: /timpris/i }).click();

    await page.waitForSelector('article, li, div[class*="offer"]', { timeout: 20000 });

    const offers = await page.$$eval('article, li, div[class*="offer"], div[class*="contract"]', (cards) => {
      return cards.map((card) => {
        const text = card.textContent || '';
        const leverantor = card.querySelector('h2,h3,h4,strong')?.textContent?.trim() || 'Okänt';

        const totalArMatch = text.match(/(\d[\d\s]{3,})\s*kr[\/\s]?år/i);
        const totalAr = totalArMatch ? parseInt(totalArMatch[1].replace(/\s/g, '')) : 0;

        const besparingMatch = text.match(/sparar?\s*(\d[\d\s]{2,})/i);
        const besparing = besparingMatch ? parseInt(besparingMatch[1].replace(/\s/g, '')) : 0;

        const gron = /grön|100%|vind|solkraft/i.test(text);

        return {
          leverantor,
          avtalNamn: 'Timpris',
          totalAr,
          totalMan: Math.round(totalAr / 12),
          besparing,
          typ: 'timpris',
          gron,
          logo: card.querySelector('img')?.getAttribute('src') || '',
          kampanj: ''
        };
      });
    });

    await browser.close();

    const sorted = offers
      .filter(o => o.totalAr > 4000)
      .sort((a, b) => a.totalAr - b.totalAr)
      .slice(0, 15);

    console.log(`✅ Hittade ${sorted.length} avtal från Elpriskollen`);
    return NextResponse.json(sorted);

  } catch (error: any) {
    console.error('❌ Scrape-fel:', error.message);
    if (browser) await browser.close().catch(() => {});
    return NextResponse.json({ error: 'Kunde inte hämta priser från Elpriskollen' }, { status: 500 });
  }
}
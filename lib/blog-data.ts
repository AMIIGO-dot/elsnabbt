export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  content: string; // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'timpris-eller-fast-elpris',
    title: 'Timpris eller fast elpris – vad passar dig bäst?',
    description: 'Förstå skillnaden mellan rörligt timpris och fast elpris, och lär dig vilket avtal som passar din förbrukning och risktolerans.',
    category: 'Avtalsguider',
    publishedAt: '2025-01-15',
    readMinutes: 5,
    content: `
<h2>Vad är timpris?</h2>
<p>Med ett timprisavtal betalar du ett pris som förändras varje timme baserat på elbörsen Nord Pool. Priset sätts dagen innan och visas ofta i appar som Tibber eller via din elleverantör. Under lågtrafiktimmarna (natt, helger) är priset ofta lågt, medan effekttoppar mitt på dagen kan ge höga priser.</p>
<p><strong>Timpris passar dig som:</strong></p>
<ul>
  <li>Kan flytta förbrukning till billiga timmar (ladda bil, diska, tvätta på natten)</li>
  <li>Har ett smart hem eller smarta laddboxar</li>
  <li>Accepterar att räkningen varierar månad till månad</li>
</ul>

<h2>Vad är fast elpris?</h2>
<p>Med fast pris är din elproduktionskostnad låst under hela avtalsperioden – ofta 1, 2 eller 3 år. Det gör budgeteringen enkel och du påverkas inte av prissvängningar på marknaden.</p>
<p><strong>Fast pris passar dig som:</strong></p>
<ul>
  <li>Vill ha förutsägbarhet i ekonomin</li>
  <li>Inte kan eller vill styra när du använder el</li>
  <li>Tror att elpriserna ska stiga framöver</li>
</ul>

<h2>Hur räknar man ut vilket som är billigast?</h2>
<p>Historiskt sett har rörligt timpris i snitt varit billigare än fast pris, eftersom leverantören tar betalt för att garantera priset. Men under perioder med extrema elpriser (som vintrarna 2021–2022) har fast pris varit klart bättre för de som hade det.</p>
<p>Använd vår <a href="/">prisjämförare</a> för att se aktuella priser på alla avtalstyper för ditt postnummer och din förbrukning.</p>

<h2>Slutsats</h2>
<p>Det finns inget universellt "rätt svar". Om du är prismedveten och teknisk – välj timpris. Vill du sova gott om natten utan att tänka på elpriser – välj fast pris. Det viktigaste är att du faktiskt jämför och byter när ditt nuvarande avtal löper ut.</p>
    `,
  },
  {
    slug: '10-satt-att-sanka-elrakningen',
    title: '10 enkla sätt att sänka din elräkning hemma',
    description: 'Konkreta och beprövade tips som hjälper dig minska elförbrukningen utan att offra komforten – och spara tusentals kronor per år.',
    category: 'Spara el',
    publishedAt: '2025-02-01',
    readMinutes: 6,
    content: `
<h2>1. Sänk temperaturen med 1 grad</h2>
<p>Varje grad du sänker inomhustemperaturen sparar ungefär 5–10% på uppvärmningskostnaden. Sänk från 22°C till 21°C och du märker knappt skillnaden – men plånboken gör det.</p>

<h2>2. Tvätta på kvällen</h2>
<p>Med ett timprisavtal är elens pris som lägst på natten och tidiga morgonen. Starta tvättmaskinen eller diskmaskinen med en timer kl. 22–06 och du betalar ofta 40–60% lägre elpris per kWh.</p>

<h2>3. Byt till LED-lampor</h2>
<p>En LED-lampa använder 80–90% mindre energi än en glödlampa och håller 15–25 gånger längre. Kostar du 20 lampor i hemmet kostar det ungefär 600 kr att byta, men du sparar ca 1 200 kr/år i el.</p>

<h2>4. Undvik stand-by</h2>
<p>TV, dator, spelkonsoler och laddare i stand-by kan stå för 5–10% av din totala förbrukning. En smartstick (ca 100 kr) gör att du kan stänga av hela gruppen med ett klick.</p>

<h2>5. Täta fönster och dörrar</h2>
<p>Drag är en stor värmeboov. Enkel tätningslist i ytterdörrar och fönster kostar 200–500 kr men kan spara 500–1 500 kr per år i uppvärmning beroende på husets storlek.</p>

<h2>6. Sänk varmvattentemperaturen</h2>
<p>Varmvattenberedare inställd på 55°C räcker gott och väl (och hindrar Legionella). De flesta har 65–70°C vilket är onödigt. Justera och spara direkt.</p>

<h2>7. Installera ett smart element</h2>
<p>Smarta termostater på elradiatorer kan programmeras att värma när el är billig, och stänga av automatiskt när ingen är hemma. Payback-tid brukar vara under 1 år.</p>

<h2>8. Jämför och byt elavtal</h2>
<p>Det är det enklaste och mest effektiva tipset av alla. En genomsnittlig villa kan spara 2 000–5 000 kr/år bara genom att byta från ett dåligt avtal till det bästa på marknaden. Använd vår <a href="/">jämförare</a> – det tar 30 sekunder.</p>

<h2>9. Duscha kortare</h2>
<p>En dusch på 8 minuter jämfört med 4 minuter dubblar varmvattenförbrukningen. Förkorta duschen med 2 minuter per person i hushållet och spara 500–1 000 kWh/år.</p>

<h2>10. Välj energisnål vitvaror vid byte</h2>
<p>Energimärkning A+++ jämfört med A kan innebära 30–50% lägre förbrukning. Tänk livscykelkostnad – ett dyrare kylskåp som drar 50 kWh/år istället för 100 kWh/år sparar dig 500–1 000 kr per år i 15 år.</p>
    `,
  },
  {
    slug: 'vad-ar-gron-el',
    title: 'Vad är grön el – och är det värt pengarna?',
    description: 'En ärlig genomgång av vad grön el egentligen innebär, hur ursprungsgarantier fungerar, och om det är värt att betala extra för det.',
    category: 'Hållbarhet',
    publishedAt: '2025-02-10',
    readMinutes: 4,
    content: `
<h2>Vad innebär "grön el"?</h2>
<p>När du väljer ett grön el-avtal garanterar din elleverantör att den mängd el du förbrukar köps in från förnybara energikällor – sol, vind, vatten eller biobränsle. Du får ett certifikat (ursprungsgaranti) som bevisar detta.</p>
<p>Det är viktigt att förstå att <strong>fysisk el från ett vindkraftverk inte flödar direkt till ditt uttag</strong>. Det svenska elnätet blandar all el oberoende av källa. Det du betalar för är en "pappersgaranti" att lika mycket förnybar el produceras som du förbrukar.</p>

<h2>Bra Miljöval – den strängaste märkningen</h2>
<p>Naturskyddsföreningens märkning Bra Miljöval ställer hårdare krav än vanliga ursprungsgarantier. Elleverantören måste bland annat:</p>
<ul>
  <li>Investera en andel av intäkterna i ny förnybar produktion</li>
  <li>Inte köpa el från äldre vattenkraft som påverkar biologisk mångfald</li>
  <li>Uppfylla krav på social hållbarhet</li>
</ul>
<p>Om hållbarhet är viktigt för dig är Bra Miljöval-märkta avtal att föredra framför vanlig "grön el".</p>

<h2>Kostar det mer?</h2>
<p>Gröna avtal kostar ofta 1–5 öre/kWh mer än icke-gröna. På 20 000 kWh/år blir det 200–1 000 kr extra per år. Huruvida det är "värt det" beror helt på dina värderingar.</p>

<h2>Kärnkraft i Sverige</h2>
<p>Sverige producerar nästan 45% av sin el från vattenkraft och runt 30% från kärnkraft. Kärnkraft räknas inte som förnybar men ger noll koldioxidutsläpp i driften. Många avtal utan grön el-märkning innehåller stor andel kärnkraft och har lågt CO₂-avtryck.</p>

<h2>Slutsats</h2>
<p>Grön el gör skillnad – framförallt om du väljer Bra Miljöval-certifierade avtal. Men skillnaden i klimatpåverkan är liten i Sverige där elnätet redan är relativt rent. Det viktigaste du kan göra för klimatet är fortfarande att minska din totala förbrukning.</p>
    `,
  },
  {
    slug: 'sa-byter-du-elavtal',
    title: 'Så byter du elavtal – steg för steg',
    description: 'En komplett guide till hur du snabbt och enkelt byter till ett billigare elavtal, vad du behöver tänka på och hur lång tid det tar.',
    category: 'Avtalsguider',
    publishedAt: '2025-02-20',
    readMinutes: 4,
    content: `
<h2>Steg 1: Jämför avtal</h2>
<p>Använd vår <a href="/">jämförare</a> – ange ditt postnummer och din årsförbrukning (hittas på din elfaktura eller via din elleverantörs kundportal). Du ser direkt vilka avtal som är billigast för just dig.</p>

<h2>Steg 2: Hitta din nuvarande uppsägningstid</h2>
<p>Kolla ditt nuvarande avtal. De flesta avtal har 1 månads uppsägningstid, men fasta avtal kan ha upp till 3 månader. Du hittar det i dina avtalsvillkor eller på din leverantörs hemsida.</p>

<h2>Steg 3: Teckna nytt avtal</h2>
<p>Klicka på det avtal du vill ha och teckna det direkt hos leverantören. Du behöver normalt bara:</p>
<ul>
  <li>Ditt personnummer</li>
  <li>Din mätarpunkt-ID (12–18 siffror, finns på elfakturan)</li>
  <li>Ditt nuvarande avslutsdatum (eller "snarast möjligt")</li>
</ul>

<h2>Steg 4: Ny leverantör hanterar bytet</h2>
<p>Din nya elleverantör kontaktar nätbolaget och sköter bytet åt dig. Du behöver <strong>inte</strong> kontakta din gamla leverantör – det görs automatiskt. Byten tar normalt 1–4 veckor.</p>

<h2>Kostar det att byta?</h2>
<p>Nej, det är <strong>helt gratis</strong> att byta elavtal i Sverige. Det är en lagstadgad rättighet. Om en leverantör hävdar något annat – välj en annan.</p>

<h2>När bör jag byta?</h2>
<p>Experter rekommenderar att du jämför elavtal minst en gång per år, eller när ditt nuvarande avtal löper ut. Priserna förändras ständigt och det bästa avtalet i dag kan vara ett av de sämsta nästa år.</p>
    `,
  },
  {
    slug: 'vad-ingar-i-elpriset',
    title: 'Vad ingår i elpriset? Elskatt, moms och elnät förklaras',
    description: 'Förstå varför din elfaktura är så mycket högre än elpriset du ser i annonser. En tydlig genomgång av alla delar som ingår i ditt totala elpris.',
    category: 'Förstå elpriset',
    publishedAt: '2025-03-01',
    readMinutes: 5,
    content: `
<h2>Det du köper: elproduktionen</h2>
<p>Det pris som elleverantören marknadsför är kostnaden för själva elproduktionen – ofta kallad "rörlig elproduktionskostnad" eller "spotpris". Det är detta pris vi visar och jämför på Elblixten.</p>

<h2>Elnätsavgiften – den du inte kan välja bort</h2>
<p>Du betalar alltid din nätägare för att el transporteras till ditt hem via ledningar. Elnätsbolaget är ett lokalt monopol – du kan inte byta det. Avgiften består av:</p>
<ul>
  <li><strong>Fast avgift:</strong> ca 150–400 kr/månad beroende på säkringsstorlek</li>
  <li><strong>Rörlig avgift:</strong> ca 20–50 öre/kWh</li>
</ul>

<h2>Elskatt</h2>
<p>En statlig skatt på all el du förbrukar. 2025 är den <strong>54,875 öre/kWh</strong> i södra Sverige (54,875 öre/kWh i norra är lägre p.g.a. subventioner). Den ingår alltid i ditt totala pris.</p>

<h2>Moms – 25% på allt</h2>
<p>Moms läggs på hela beloppet – elproduktionen + elskatt + nätavgift. Det innebär att du betalar 25% moms även på momsen i praktiken.</p>

<h2>Exempel: total elkostnad</h2>
<p>Om du har en villa med 20 000 kWh/år och spotpris 50 öre/kWh:</p>
<ul>
  <li>Elproduktion: 50 öre/kWh</li>
  <li>Elskatt: 54,875 öre/kWh</li>
  <li>Nätavgift rörlig: ~35 öre/kWh</li>
  <li>Summa ink moms (~139 öre × 1,25): ca <strong>2,44 kr/kWh</strong></li>
  <li>Totalt per år: ca <strong>48 800 kr</strong></li>
</ul>

<h2>Varför jämföra ändå?</h2>
<p>Även om du inte kan påverka elnät eller skatter kan du spara mycket på elproduktionsdelen. Skillnaden mellan bästa och sämsta avtal är ofta 20–40 öre/kWh – det är 4 000–8 000 kr/år för en villa med elvärme. Jämför nu på vår <a href="/">startsida</a>.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

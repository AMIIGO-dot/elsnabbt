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
<p>Med ett timprisavtal betalar du ett pris som förändras varje timme baserat på elbörsen <a href="https://www.nordpoolgroup.com" target="_blank" rel="noopener noreferrer">Nord Pool</a>. Priset sätts dagen innan och visas ofta i appar som Tibber eller via din elleverantör. Under lågtrafiktimmarna (natt, helger) är priset ofta lågt, medan effekttoppar mitt på dagen kan ge höga priser.</p>
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
<p><a href="https://www.naturskyddsforeningen.se/vad-vi-gor/miljomarkning/bra-miljoval/" target="_blank" rel="noopener noreferrer">Naturskyddsföreningens märkning Bra Miljöval</a> ställer hårdare krav än vanliga ursprungsgarantier. Elleverantören måste bland annat:</p>
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
<p>Nej, det är <strong>helt gratis</strong> att byta elavtal i Sverige. Det är en <a href="https://www.konsumentverket.se/for-konsumenter/el-gas-och-vatten/" target="_blank" rel="noopener noreferrer">lagstadgad rättighet</a>. Om en leverantör hävdar något annat – välj en annan.</p>

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
<p>En statlig skatt på all el du förbrukar. Fr.o.m. 1 januari 2026 är den <strong>36 öre/kWh exkl. moms</strong> (45 öre/kWh inkl. moms) i södra Sverige (lägre i norra Sverige p.g.a. subventioner). Den ingår alltid i ditt totala pris. Läs mer om elskatt hos <a href="https://www.energimyndigheten.se" target="_blank" rel="noopener noreferrer">Energimyndigheten</a>.</p>

<h2>Moms – 25% på allt</h2>
<p>Moms läggs på hela beloppet – elproduktionen + elskatt + nätavgift. Det innebär att du betalar 25% moms även på momsen i praktiken.</p>

<h2>Exempel: total elkostnad</h2>
<p>Om du har en villa med 20 000 kWh/år och spotpris 50 öre/kWh:</p>
<ul>
  <li>Elproduktion: 50 öre/kWh</li>
  <li>Elskatt: 36 öre/kWh (exkl. moms) = 45 öre/kWh inkl. moms (fr.o.m. jan 2026)</li>
  <li>Nätavgift rörlig: ~35 öre/kWh</li>
  <li>Summa ink moms (~139 öre × 1,25): ca <strong>2,44 kr/kWh</strong></li>
  <li>Totalt per år: ca <strong>48 800 kr</strong></li>
</ul>

<h2>Varför jämföra ändå?</h2>
<p>Även om du inte kan påverka elnät eller skatter kan du spara mycket på elproduktionsdelen. Skillnaden mellan bästa och sämsta avtal är ofta 20–40 öre/kWh – det är 4 000–8 000 kr/år för en villa med elvärme. Jämför nu på vår <a href="/">startsida</a>.</p>
    `,
  },

  // ── NYA GUIDER ──
  {
    slug: 'billigaste-elavtalet-2026',
    title: 'Billigaste elavtalet 2026 – jämförelse och råd',
    description: 'Hitta billigaste elavtalet 2026. Vi går igenom vad som avgör priset, vilka avtalstyper som är billigast och hur du hittar rätt avtal för din förbrukning.',
    category: 'Avtalsguider',
    publishedAt: '2026-01-10',
    readMinutes: 6,
    content: `
<h2>Vad avgör vilket elavtal som är billigast?</h2>
<p>Det finns inget elavtal som är billigast för alla – priset beror på tre faktorer: <strong>din årsförbrukning</strong>, <strong>ditt postnummer</strong> (elområde SE1–SE4) och <strong>vilken avtalstyp</strong> som passar din förbrukningsprofil.</p>
<p>Sverige är indelat i fyra elområden. SE1 (Luleå) och SE2 (Sundsvall) har historiskt lägre priser än SE3 (Stockholm) och SE4 (Malmö). Samma avtal hos samma leverantör kostar olika beroende på var du bor.</p>

<h2>Avtalstyper och vad de kostar 2026</h2>
<p>De vanligaste avtalsformerna och hur de typiskt prissätts:</p>
<ul>
  <li><strong>Kvartspris</strong> – Rörligt pris som sätts en gång per kvartal. Förutsägbart på tre månader. Historiskt ett av de billigaste alternativen för normalförbrukare.</li>
  <li><strong>Månadsrörligt</strong> – Spotpris i snitt för månaden + påslag. Enklare att förstå än timpris. Billigare än fast i snitt, men varierar.</li>
  <li><strong>Timpris</strong> – Börsens pris varje timme. Billigast om du aktivt styr din förbrukning till natten och helger.</li>
  <li><strong>Fast pris 1 år</strong> – Låst pris. Dyrare historiskt sett, men ger trygghet om priserna stiger.</li>
</ul>

<h2>Hur hittar du billigaste elavtalet för DIG?</h2>
<p>Det enda sättet att hitta ditt personliga billigaste avtal är att jämföra med ditt exakta postnummer och din förbrukning. Prisskillnaden mellan bästa och sämsta avtal är ofta <strong>20–40 öre/kWh</strong>. Med 20 000 kWh/år är det 4 000–8 000 kr per år.</p>
<p>Använd vår <a href="/">prisjämförare</a> för att se alla tillgängliga avtal för ditt postnummer och din förbrukning, sorterade billigast först. Data hämtas direkt från <a href="https://www.ei.se" target="_blank" rel="noopener noreferrer">Energimarknadsinspektionens</a> databas – alla avtal på marknaden, inget undantag.</p>

<h2>Vanliga misstag när du väljer elavtal</h2>
<ul>
  <li><strong>Stirrar sig blind på öre/kWh utan att räkna på fast månadsavgift</strong> – ett avtal med lågt rörligt pris men hög fast avgift kan bli dyrare totalt.</li>
  <li><strong>Väljer fast pris för länge</strong> – 3 år är lång tid. Elpriserna kan falla och du sitter fast med ett dyrt avtal.</li>
  <li><strong>Glömmer se över avtalet</strong> – Leverantörer räknar med att kunder inte byter. Rörliga avtal kan höjas utan att du märker det.</li>
</ul>

<h2>Hur ofta ska man byta elavtal?</h2>
<p>Minst en gång per år. Elpriserna och avtalsutbudet förändras konstant. Med Elblixten tar en jämförelse 30 sekunder – det finns ingen anledning att betala mer än nödvändigt.</p>
    `,
  },
  {
    slug: 'elvarme-elforbrukning-villa',
    title: 'Elvärme i villa – hur mycket el använder du egentligen?',
    description: 'Allt om elvärme i villa: typisk årsförbrukning, hur du minskar kostnaderna och vilket elavtal som passar bäst för ett hus med direktverkande el.',
    category: 'Förstå elpriset',
    publishedAt: '2026-01-18',
    readMinutes: 7,
    content: `
<h2>Typisk elförbrukning för villa med elvärme</h2>
<p>En villa med direktverkande elvärme (elradiatorer) förbrukar vanligtvis <strong>20 000–30 000 kWh per år</strong>, beroende på husets storlek, isolering och klimatzon. Jämfört med en lägenhet på 2 000–3 000 kWh är det en enorm skillnad – och det gör valet av elavtal extra viktigt. Varje öre du sparar per kWh ger dig 200–300 kr tillbaka per år.</p>

<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Hustyp</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Typisk förbrukning</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Lägenhet</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">1 500–3 000 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Villa utan elvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">5 000–8 000 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Villa med vp + elvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">8 000–15 000 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Villa med direktelvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">15 000–30 000 kWh/år</td></tr>
  </tbody>
</table>

<h2>Vilket elavtal passar bäst för elvärme?</h2>
<p>Med en hög förbrukning är du extra känslig för elprisets nivå. Här är vad som gäller:</p>
<ul>
  <li><strong>Kvartspris eller månadsrörligt</strong> – Den klassiska kombinationen. Du följer marknaden utan att behöva kolla priset varje timme. Bra snitt historiskt.</li>
  <li><strong>Timpris</strong> – Kan vara väldigt bra om du har smarta termostater som du programmerar att värma huset mer på natten när priset är lågt, och dra ner under daga-effektoppar.</li>
  <li><strong>Fast pris</strong> – Ger trygghet. Tänk på att du med 20 000 kWh/år betalar 2 000 kr extra per år om fast pris ligger 10 öre/kWh över marknaden.</li>
</ul>

<h2>Spara el med elvärme – 5 konkreta tips</h2>
<ol>
  <li><strong>Sänk nattemperaturen med 3–4 grader</strong> – Programmera termostaterna att hålla 18°C på natten. Sparar 10–15% på uppvärmningen.</li>
  <li><strong>Installera smarta termostater</strong> – Adapto, Homemade Energy, Futurehome eller liknande. Styr värmen efter elpriset automatiskt.</li>
  <li><strong>Lufta inte i onödan</strong> – Vädra snabbt med full drag (2–3 min) istället för att ha fönstret på glänt i timmar.</li>
  <li><strong>Tilläggsisolera</strong> – Krypgrund, vindsvåning och ytterväggar. Payback-tid 5–10 år men minskar förbrukningen radikalt.</li>
  <li><strong>Byt elavtal</strong> – Det snabbaste sättet. Jämför på vår <a href="/">startsida</a> och spara direkt.</li>
</ol>

<h2>Värmepump – värt det?</h2>
<p>En bergvärmepump kan minska elförbrukningen för uppvärmning med 50–70%. Investeringskostnaden är 100 000–250 000 kr men med Rot-avdrag och bidrag (STIL) och 15 000 kWh sparade per år à 1 kr/kWh är payback-tid ofta 8–15 år. Kombinerat med ett bra elavtal är det den kraftfullaste åtgärden för att sänka din elräkning långsiktigt.</p>
    `,
  },
  {
    slug: 'kvartspris-forklarat',
    title: 'Kvartspris – vad är det och passar det dig?',
    description: 'Kvartspris är ett rörligt elavtal där priset bestäms en gång per kvartal. Lär dig hur det fungerar, för- och nackdelar jämfört med timpris och fast pris.',
    category: 'Avtalsguider',
    publishedAt: '2026-01-25',
    readMinutes: 5,
    content: `
<h2>Vad är kvartspris?</h2>
<p>Ett kvartsprisavtal innebär att din elleverantör bestämmer priset för nästkommande kvartal (3 månader) baserat på terminspriserna på elbörsen <a href="https://www.nordpoolgroup.com" target="_blank" rel="noopener noreferrer">Nord Pool</a>. Priset gäller sedan under hela kvartalet – oavsett hur börsen rör sig under perioden.</p>
<p>Kvartalsskiftena är: <strong>1 januari, 1 april, 1 juli och 1 oktober</strong>. Ditt pris ändras alltså fyra gånger per år.</p>

<h2>Kvartspris vs timpris vs månadsrörligt</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Avtalstyp</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Hur priset sätts</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Förutsägbarhet</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Timpris</td><td style="padding:8px;border:1px solid #e5e7eb">Varje timme (NordPool)</td><td style="padding:8px;border:1px solid #e5e7eb">Låg</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Månadsrörligt</td><td style="padding:8px;border:1px solid #e5e7eb">En gång per månad</td><td style="padding:8px;border:1px solid #e5e7eb">Medel</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb"><strong>Kvartspris</strong></td><td style="padding:8px;border:1px solid #e5e7eb">En gång per kvartal</td><td style="padding:8px;border:1px solid #e5e7eb">God</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Fast pris</td><td style="padding:8px;border:1px solid #e5e7eb">En gång (hela avtalsperioden)</td><td style="padding:8px;border:1px solid #e5e7eb">Mycket hög</td></tr>
  </tbody>
</table>

<h2>Fördelar med kvartspris</h2>
<ul>
  <li><strong>Du vet priset i förväg</strong> – Du kan budgetera din elkostnad för hela kvartalet.</li>
  <li><strong>Följer marknaden</strong> – Du missar inte stora prisfall på börsen på lång sikt.</li>
  <li><strong>Inget behov av att styra förbrukning per timme</strong> – Till skillnad från timpris behöver du inte kolla elpriset dagligen.</li>
  <li><strong>Ofta lågt påslag</strong> – Leverantörens riskpremium är lägre än för fast pris, som regel.</li>
</ul>

<h2>Nackdelar med kvartspris</h2>
<ul>
  <li>Om marknaden faller kraftigt mitt i ett kvartal betalar du fortfarande det högre priset.</li>
  <li>Du kan inte dra nytta av timvisa prisrvariationer som du kan med timpris.</li>
</ul>

<h2>Passar kvartspris dig?</h2>
<p>Kvartspris passar utmärkt om du:</p>
<ul>
  <li>Vill ha ett enkelt, förutsägbart pris utan att behöva följa börsen dagligen</li>
  <li>Inte har smarta termostater eller laddbox som kan styra förbrukningen</li>
  <li>Vill ta del av marknadsprisutvecklingen men utan extrema månadssvängningar</li>
</ul>
<p>Jämför aktuella kvartsprisavtal för ditt postnummer på vår <a href="/">startsida</a>.</p>
    `,
  },
  {
    slug: 'nordpool-spotpris-forklarat',
    title: 'Nord Pool och spotpriset – så fungerar elbörsen',
    description: 'Förstå varför elpriset varierar varje timme och varje dag. En genomgång av hur elbörsen Nord Pool fungerar och vad som driver elpriserna i Sverige.',
    category: 'Förstå elpriset',
    publishedAt: '2026-02-01',
    readMinutes: 6,
    content: `
<h2>Vad är Nord Pool?</h2>
<p><a href="https://www.nordpoolgroup.com" target="_blank" rel="noopener noreferrer">Nord Pool</a> är den nordeuropeiska elbörsen där elleverantörer, kraftbolag, industriföretag och handlare köper och säljer el. Börsen är öppen dygnet runt och sätter ett pris för varje timme, nästa dygn (day-ahead-marknaden). Det pris som sätts kallas <strong>spotpriset</strong>.</p>
<p>Sverige är indelat i fyra elområden (SE1–SE4) och priset kan skilja sig rejält mellan dem – framförallt när det är flaskhalsar i elnätet mellan norr och söder.</p>

<h2>Vad påverkar spotpriset?</h2>
<p>Det är enkelt utbud och efterfrågan som styr, men dessa faktorer driver det:</p>
<ul>
  <li><strong>Vädret</strong> – Kallt väder ökar efterfrågan. Lite vind ger lägre vindkraftsproduktion. Lite regn ger lägre vattenkraft.</li>
  <li><strong>Temperaturen i Europa</strong> – Sverige är sammankopplat med Europa genom kablar. Högt elpriset i Tyskland drar upp priserna i Sverige.</li>
  <li><strong>Kärn- och vattenkraft</strong> – En reaktoravstängning eller låg vattennivå i norska fjordar minskar utbudet och höjer priset.</li>
  <li><strong>Gaspriser</strong> – Gas används för kraftvärme i stora delar av Europa. Högt gaspris = högt elpris.</li>
  <li><strong>Tid på dygnet</strong> – Priset är typiskt lägst kl. 03–06 och högst kl. 08–10 och 17–19 på vardagar.</li>
</ul>

<h2>Varför är SE4 (Malmö) dyrare än SE1 (Luleå)?</h2>
<p>Sverige producerar mer el i norr (vattenkraft) än det förbrukar, och mer el söderut än det producerar. Kablarnas kapacitet att föra ner el räcker inte alltid – och då bildas ett flaskhals-pris. Södra Sverige måste köpa mer el från Danmark och Tyskland, vilket ofta är dyrare.</p>

<h2>Hur ser priset ut under ett vanligt dygn?</h2>
<p>Typiskt prisprinfil på en kall vinterdag:</p>
<ul>
  <li><strong>Kl. 00–06:</strong> Lägst pris – industri och hushåll sover</li>
  <li><strong>Kl. 07–09:</strong> Morgontopp – alla vaknar, duschar, kokar kaffe</li>
  <li><strong>Kl. 10–14:</strong> Medelnivå</li>
  <li><strong>Kl. 16–19:</strong> Kvällstopp – hemkomst, matlagning, laddning</li>
  <li><strong>Kl. 20–23:</strong> Sjunkande pris</li>
</ul>
<p>Med ett <strong>timprisavtal</strong> kan du utnyttja detta gratis – ladda elbilen på natten, kör diskmaskinen kl. 03.00 med timer och värm huset mer under de billiga timmarna.</p>

<h2>Hur följer du spotpriset?</h2>
<p>Gratis verktyg för att följa elpriset timme för timme:</p>
<ul>
  <li><strong>Tibber-appen</strong> – Visar morgondagens priser från kl. 13 varje dag</li>
  <li><strong>elprisetjustnu.se</strong> – Enklaste gratistjänsten, ingen registrering</li>
  <li><strong>vattenfall.se/el/elpris/timpris/</strong> – Vattenfall visar sina timprisuppgifter</li>
</ul>
<p>Vill du jämföra elavtal baserat på ditt postnummer och din förbrukning? Använd vår <a href="/">kostnadsfria jämförare</a>.</p>
    `,
  },
  {
    slug: 'elavtal-lagenhet',
    title: 'Elavtal för lägenhet – vad ska du tänka på?',
    description: 'Guide till elavtal för lägenhetsboende. Förbrukningsnivåer, vilka avtalstyper som passar, och hur du enkelt jämför och byter till ett billigare avtal.',
    category: 'Avtalsguider',
    publishedAt: '2026-02-05',
    readMinutes: 4,
    content: `
<h2>Hur mycket el använder en lägenhet?</h2>
<p>En genomsnittlig lägenhet utan elvärme förbrukar <strong>1 500–3 500 kWh per år</strong>. En 1:a har lägst förbrukning (1 200–1 800 kWh), en 4:a kan ligga på 3 000–4 500 kWh.</p>
<p>Det innebär att din del av elfakturan – elproduktionskostnaden – ofta är 2 000–6 000 kr per år. Med rätt avtal kan du spara 500–1 500 kr/år.</p>

<h2>Har jag ett eget elavtal i min lägenhet?</h2>
<p>I de flesta bostadsrätter och hyresrätter har varje lägenhet sin <strong>egen elmätare och ett eget avtal</strong>. Du väljer och tecknar det själv precis som en villaägare.</p>
<p>Undantag: Vissa äldre hyresrätter har el inkluderat i hyran (kollektiv mätning). Hör med din hyresvärd om du är osäker.</p>

<h2>Vilket avtalstyp passar en lägenhet?</h2>
<p>För de flesta lägenhetsboende gäller:</p>
<ul>
  <li><strong>Kvartspris eller månadsrörligt</strong> – Enklast och ofta billigast. Du behöver inte tänka på minutpriset.</li>
  <li><strong>Timpris</strong> – Kan löna sig om du har en elbil i garageplatsen, laddar nattetid och är medveten om priser. Mervärdet är lägre i lägenhet än i villa (lägre förbrukning).</li>
  <li><strong>Fast pris</strong> – Sällan värt det för lägenhet. Prisskillnaden är liten i kronor och du betalar en riskpremium i onödan.</li>
</ul>

<h2>Vad ska jag tänka på när jag byter?</h2>
<ol>
  <li>Ta reda på din årsförbrukning – den syns på dina fakturor eller i din elleverantörs app/kundportal.</li>
  <li>Kontrollera om du har fast avtal med bindningstid. De flesta rörliga avtal saknar bindningstid.</li>
  <li>Jämför – ange ditt postnummer och förbrukning på vår <a href="/">startsida</a>.</li>
  <li>Teckna nytt avtal. Din nya leverantör hanterar bytet – du behöver inte säga upp det gamla.</li>
</ol>

<h2>Vanlig fälla: hög fast månadsavgift</h2>
<p>Titta alltid på <strong>total kostnad</strong>, inte bara öre/kWh. En lägenhet som förbrukar 2 000 kWh/år med ett avtal på 25 öre/kWh men 99 kr/månad i fast avgift kostar mer än ett avtal med 40 öre/kWh och 0 kr/månad. Vår jämförare räknar ut total kostnad åt dig automatiskt.</p>
    `,
  },
  {
    slug: 'effektavgift-vad-ar-det',
    title: 'Effektavgift – den nya avgiften som kan kosta dig tusentals kronor',
    description: 'Allt om effektavgiften som fler elnätsbolag inför. Förstå vad det innebär för din elräkning och hur du minskar din effekttopp för att undvika höga kostnader.',
    category: 'Förstå elpriset',
    publishedAt: '2026-02-10',
    readMinutes: 6,
    content: `
<h2>Vad är effektavgift?</h2>
<p>Effektavgift (eller effekttariff) är en del av din elnätsavgift som baseras på din <strong>toppförbrukning</strong> under en viss period – alltså hur mycket el du drar maximalt på en gång, inte hur mycket du förbrukar totalt.</p>
<p>Fler och fler elnätsbolag (Vattenfall Eldistribution, Ellevio, E.ON Elnät m.fl.) har infört eller planerar att införa effektbaserade tariffer. <a href="https://www.ei.se" target="_blank" rel="noopener noreferrer">Energimarknadsinspektionen</a> rekommenderade 2021 att hela branschen ska gå i den riktningen.</p>

<h2>Hur beräknas effektavgiften?</h2>
<p>De flesta modeller mäter din <strong>timmedelvärdeseffekt</strong> – medelvärdet av din förbrukning under den timme med högst förbrukning. Avgiften baseras därefter på de 3 eller 5 timmar per månad med högst effekt.</p>
<p><strong>Exempel:</strong> Du har ett elabonnemang hos Vattenfall Elnät. En kall januarimorgon kl. 07.00 har du på dusch, spis, torktumlare och elvärme samtidigt. Du drar 12 kW den timmen. Det ger en effektavgift på 12 × tariffen (ex. 65 kr/kW/mån) = 780 kr extra för januari.</p>

<h2>Hur undviker du hög effektavgift?</h2>
<p>Nyckeln är att sprida ut sin förbrukning och undvika att ha allt igång samtidigt:</p>
<ul>
  <li><strong>Starta inte spis, dusch och torktumlare samtidigt</strong> – kör dem i sekvens istället.</li>
  <li><strong>Ladda elbilen på natten</strong> – inte kl. 07–09 när du lagar frukost.</li>
  <li><strong>Programmera smarta laddboxar och termostater</strong> – att undvika morgon- och kvällstoppar.</li>
  <li><strong>Undvik elvärme + varmvattenberedare på helg morgnar</strong> – de är ofta dina tyngsta förbrukare.</li>
</ul>

<h2>Påverkar effektavgiften valet av elavtal?</h2>
<p>Effektavgiften är en del av <em>nätavgiften</em> – den du betalar till ditt nätbolag och som du inte kan påverka genom att byta elleverantör. Du kan alltså inte byta bort effektavgiften, men du kan fortfarande spara tusentals kronor per år på att välja rätt <em>elleverantör</em>. Jämför nu på vår <a href="/">startsida</a>.</p>

<h2>Vilka elnätsbolag har infört effektavgift?</h2>
<ul>
  <li><strong>Vattenfall Eldistribution</strong> – Effekttariff sedan 2022 för de flesta småhus</li>
  <li><strong>Ellevio</strong> – Effekttariff inföd stegvis 2022–2024</li>
  <li><strong>E.ON Elnät</strong> – Pilotprogram, utrullning pågår</li>
  <li><strong>Lokala nätbolag</strong> – Varierande, kolla din faktura under "nätavgift"</li>
</ul>
<p>Kontrollera ditt elnätbolag och läs dina avtalsvillkor för att se om du redan betalar effektavgift.</p>
    `,
  },
  {
    slug: 'solceller-och-elavtal',
    title: 'Solceller och elavtal – vad gäller när du säljer el?',
    description: 'Guide för dig med solceller: hur fungerar inmatningstariff och skattereduktion, vilket elavtal passar bäst, och hur du maximerar din besparing.',
    category: 'Hållbarhet',
    publishedAt: '2026-02-15',
    readMinutes: 7,
    content: `
<h2>Sälja el med solceller – grunderna</h2>
<p>När din solcellsanläggning producerar mer el än du förbrukar matas överskottet ut på elnätet. Du kan sedan sälja denna el till din elleverantör och/eller via en elhandlare som specialiserar sig på solcellsel.</p>
<p>Det finns två separata ersättningar att hålla koll på:</p>
<ol>
  <li><strong><a href="https://www.skatteverket.se/foretagochorganisationer/energiochklimat/mikroproducentavfornybarelkraftmedskattereduktion.4.12815e4f14a62569fa2d54e.html" target="_blank" rel="noopener noreferrer">Skattereduktion</a> (30 öre/kWh)</strong> – Du får 30 öre per kWh som du matar in, dock max 50 000 kWh/år. Detta är ett skatteavdrag, inte en betalning. Det syns i din deklaration.</li>
  <li><strong>Elhandelsersättning</strong> – Din elleverantör betalar dig ett pris för den el du säljer. Priset varierar (typiskt 50–90% av spotpriset).</li>
</ol>

<h2>Vilket elavtal passar bäst med solceller?</h2>
<p>Med solceller vill du helst matcha din inmatningspris med din köppris. Det gör <strong>timprisavtal</strong> optimalt:</p>
<ul>
  <li>Soliga sommardagar producerar du el mitt på dagen när priset är högt – du säljer dyrt.</li>
  <li>Du köper el på natten när priset är lågt.</li>
  <li>Nettoeffekten blir bäst med ett avtal som har symmetrisk prissättning köp/sälj.</li>
</ul>
<p>Leverantörer som Tibber och Bixia är kända för att erbjuda bra timprisavtal med koppling till solcellsersättning.</p>

<h2>Vad är nettoenergimodellen?</h2>
<p>Sverige tillämpar inte nettomätning (netting) – du kan alltså inte "spara" el i nätet och ta ut det sen. Köpt och såld el mäts separat. Du betalar full elnätsavgift och elskatt på el du köper, och får skattereduktion på el du säljer.</p>

<h2>Är solceller lönsamt 2026?</h2>
<p>Med nuvarande elpriser och skattereduktion på 30 öre/kWh är payback-tid för ett typiskt solcellssystem (30–50 kWp på villa) ofta <strong>8–14 år</strong>. Faktorer som spelar in:</p>
<ul>
  <li>Anläggningens storlek och placering (söderläge, lutning)</li>
  <li>Din förbrukningsprofil (hur mycket el du annars använder på dagen)</li>
  <li>Elprisets utveckling – vid höga elpriser kortare payback</li>
  <li>HAN-porten och smart styrning via hemautomation</li>
</ul>
<p>Oavsett om du har solceller eller inte: jämför ditt elavtal på vår <a href="/">startsida</a> för att säkerställa att du köper el till bästa pris.</p>
    `,
  },
  {
    slug: 'byta-elbolag-hur-gar-det-till',
    title: 'Byta elbolag 2026 – allt du behöver veta',
    description: 'Komplett guide om att byta elbolag. Hur lång tid tar det, kostar det något, vad händer med strömmen, och vad ska du tänka på för att inte hamna i en fälla.',
    category: 'Avtalsguider',
    publishedAt: '2026-02-18',
    readMinutes: 5,
    content: `
<h2>Kostar det att byta elbolag?</h2>
<p><strong>Nej – det är alltid gratis</strong> att byta elleverantör i Sverige. Det är en <a href="https://www.konsumentverket.se/for-konsumenter/el-gas-och-vatten/" target="_blank" rel="noopener noreferrer">lagstadgad rättighet</a> sedan elmarknaden avreglerades 1996. Inga avgifter, inga dolda kostnader. Om ett företag försöker ta betalt för ett byte – välj ett annat.</p>
<p>Undantag: Om du har ett <em>fast prisavtal</em> med bindningstid och du bryter det i förtid kan du behöva betala en avgift. Läs alltid avtalsvillkoren.</p>

<h2>Hur lång tid tar ett elbyte?</h2>
<p>Normalt <strong>2–4 veckor</strong> från att du tecknar ett nytt avtal tills att bytet är genomfört. Processen ser ut så här:</p>
<ol>
  <li>Du tecknar avtal med ny leverantör</li>
  <li>Den nya leverantören skickar en byttanmälan till ditt lokala nätbolag</li>
  <li>Nätbolaget registrerar bytet och sätter ett startdatum (vanligtvis den 1:a i nästa månad)</li>
  <li>Din gamla leverantör skickar en slutfaktura</li>
</ol>

<h2>Slocknar strömmen när jag byter?</h2>
<p><strong>Nej.</strong> Elnätet förblir intakt hela tiden. Det som ändras är vem som fakturerar dig för elproduktionen. Tänk på det som att byta mobiloperatör – du behåller ditt nummer och din täckning, det är bara fakturan som ändras.</p>

<h2>Behöver jag säga upp mitt gamla avtal?</h2>
<p>Nej – din nya elleverantör meddelar den gamla. Du behöver inte göra någonting förutom att teckna det nya avtalet. Om du av någon anledning vill säga upp manuellt kan du kontakta din gamla leverantör, men det krävs alltså inte.</p>

<h2>Vad ska jag tänka på?</h2>
<ul>
  <li><strong>Kontrollera bindningstiden</strong> på ditt nuvarande avtal innan du byter.</li>
  <li><strong>Ha din mätarpunkts-ID till hands</strong> – den 18-siffriga koden finns på din elfaktura och behövs ofta vid tecknande av nytt avtal.</li>
  <li><strong>Jämför total kostnad</strong>, inte bara öre/kWh. Räkna in fast månadsavgift.</li>
  <li><strong>Läs avtalsvillkoren</strong> – speciellt om det är ett fast avtal med bindningstid.</li>
</ul>

<h2>Hur ofta bör man byta?</h2>
<p>Minst en gång per år. Elleverantörer stiger gradvis med priser på inaktiva kunder. Sätt en återkommande påminnelse i kalendern varje höst och jämför snabbt på vår <a href="/">prisjämförare</a> – det tar 30 sekunder.</p>
    `,
  },
  {
    slug: 'miljobilsbonus-elbil-2026',
    title: 'Ny elbilsbonus från 18 mars 2026 – regler, belopp och krav',
    description: 'Den 18 mars 2026 öppnar ansökan för den nya elbilspremien. Men reglerna är hårda – inkomstkrav, krav på att bo utanför kollektivtrafiktäta städer och utbetalning månadsvis i tre år.',
    category: 'Elbil & laddning',
    publishedAt: '2026-02-23',
    readMinutes: 6,
    content: `
<h2>Vad är den nya elbilsbonusen?</h2>
<p>Den 18 mars 2026 öppnar ansökan för Sveriges nya elbilspremie – ett statligt stöd för att göra elbilar tillgängliga för hushåll med lägre inkomster utanför storstäderna. Bonusen administreras av <a href="https://www.naturvardsverket.se" target="_blank" rel="noopener noreferrer">Naturvårdsverket</a> och bygger på ett system med månadsvis utbetalning under tre år.</p>
<p>Observera att det inte handlar om en klumpsumma vid köpet – pengarna betalas ut <strong>månadsvis i 36 månader</strong>.</p>

<h2>Hur mycket kan du få?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Period</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Grundbelopp</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Starttillägg*</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">18 mars 2026–30 juni 2028</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">46 800 kr (1 300 kr/mån)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">18 000 kr</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Från 1 juli 2028</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">32 400 kr (900 kr/mån)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">10 000 kr</td></tr>
  </tbody>
</table>
<p>*) Starttillägget betalas ut som en engångssumma och gäller hushåll med upp till 50 % av medelinkomsten.</p>

<h2>Hårda krav – är du kvalificerad?</h2>
<p>Den nya bonusen är <em>betydligt</em> mer restriktiv än den gamla. Alla dessa krav måste vara uppfyllda:</p>
<ul>
  <li><strong>Bor i ett kollektivtrafiksvagt område</strong> – Bor du i Stockholm, Göteborg eller Malmö med god kollektivtrafik är du troligen inte berättigad. SCB:s mått avgör det.</li>
  <li><strong>Inkomstkrav</strong> – Hushållets inkomst får vara max 80 % av medelinkomsten. Ingen i hushållet får betala statlig inkomstskatt – det vill säga ingen i hushållet får ha en annual inkomst över 643 000 kr (2026).</li>
  <li><strong>Inga elbilar eller laddhybrider sedan tidigare</strong> – Hushållet får inte redan äga en elbil eller laddhybrid.</li>
  <li><strong>Bilens pris</strong> – Max 450 000 kr. Minimum: bilens pris måste minst motsvara den totala bonussumman. (Tesla Model Y som ny uppfyller inte kravet – som begagnad under 450 000 kr kan den kvala in.)</li>
  <li><strong>Ny eller begagnad elbil</strong> – Till skillnad från gamla bonusen gäller stödet även begagnade elbilar och privatleasade.</li>
  <li><strong>Den sökande måste vara registrerad ägare eller brukare</strong> av bilen.</li>
  <li><strong>Om bilen byter ägare avbryts utbetalningarna.</strong> Har du fått starttillägget och säljer bilen inom ett år krävs det tillbaka.</li>
</ul>

<h2>Hur ansöker du?</h2>
<p>Från 18 mars 2026 tar <a href="https://www.naturvardsverket.se" target="_blank" rel="noopener noreferrer">Naturvårdsverket</a> emot ansökningar via bank-ID. Du kan söka bonusen <strong>både före och efter köpet</strong>, men pengarna börjar inte betalas ut förrän köpet och ägarbytet är genomfört.</p>

<h2>Vad innebär en elbil för din elkostnad?</h2>
<p>En elbil tillför typiskt <strong>1 500–3 000 kWh per år</strong> till ditt hushålls elförbrukning (1 500–2 000 mil körning à 15–20 kWh/mil). Med rätt elavtal kan du minska laddkostnaden rejält:</p>
<ul>
  <li><strong>Timprisavtal</strong> – Bäst för elbilsägare. Ladda natten kl. 01–05 när priset är som lägst. Smart laddbox sköter det automatiskt.</li>
  <li><strong>Kvartspris</strong> – Bra kompromiss utan behov av aktiv styrning.</li>
  <li><strong>Fast pris</strong> – Sällan optimalt – du kan inte utnyttja de billiga nattimmarna.</li>
</ul>
<p>Med 2 000 extra kWh och 30 öre/kWh i prisskillnad natt/dag sparar smart laddning upp till <strong>600 kr per år</strong>. Jämför aktuella elavtal för ditt postnummer på vår <a href="/">prisjämförare</a>.</p>
    `,
  },
  {
    slug: 'varfor-far-jag-faktura-fran-tva-foretag',
    title: 'Varför får jag faktura från två olika företag för el?',
    description: 'Får du räkningar från både ett elbolag och ett nätbolag och undrar varför? Så här funkar det – och vad du faktiskt betalar för.',
    category: 'Grunderna',
    publishedAt: '2026-02-23',
    readMinutes: 3,
    content: `
<h2>Du betalar alltid till två olika aktörer</h2>
<p>Det är helt normalt att få <strong>två separata fakturor</strong> för din el – en från ditt <em>elbolag</em> och en från ditt <em>elnätsbolag</em>. De säljer två helt olika saker, och du kan inte välja bort någon av dem.</p>

<h2>Faktura 1: Elbolaget (elhandelsbolaget)</h2>
<p>Det här är företaget du <em>valt</em> – till exempel Vattenfall, Tibber, Fortum eller något av de hundratals andra elbolagen på marknaden. De säljer dig själva elen (kilowattimmarna). Det är den här kostnaden du påverkar när du jämför och byter elavtal.</p>
<p>Fakturan innehåller:</p>
<ul>
  <li>Elpriset per kWh (rörligt, fast eller timbaserat)</li>
  <li>Eventuell fast månadsavgift</li>
  <li>Elskatt (36 öre/kWh exkl. moms fr.o.m. 2026)</li>
  <li>Moms 25 % på allt ovanstående</li>
</ul>

<h2>Faktura 2: Elnätsbolaget (nätägaren)</h2>
<p>Det här är företaget som <em>äger kablarna</em> som leder elen till ditt hem. Du kan <strong>inte byta</strong> nätbolag – det är ett lokalt monopol reglerat av staten via <a href="https://www.ei.se" target="_blank" rel="noopener noreferrer">Energimarknadsinspektionen</a>. Bor du i Göteborg är det Göteborg Energi Nät, i Stockholm Ellevio eller Vattenfall Eldistribution, och så vidare.</p>
<p>Fakturan innehåller:</p>
<ul>
  <li>Fast nätavgift per år (abonnemang, beror på säkringsstorlek)</li>
  <li>Rörlig nätavgift per kWh (lägre på sommaren i vissa områden)</li>
  <li>Mätaravgift</li>
  <li>Moms 25 %</li>
</ul>

<h2>Vad kostar vad – ungefär?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Post</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Typisk kostnad (villa, 15 000 kWh/år)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Elpris inkl. moms</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">ca 60–120 öre/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Elskatt inkl. moms (2026)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">45 öre/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Elnätsavgift (fast + rörlig)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">8 000–15 000 kr/år</td></tr>
  </tbody>
</table>

<h2>Kan jag få en samlad faktura?</h2>
<p>Vissa elbolag erbjuder <strong>samlingsfaktura</strong> där de fakturerar dig för båda delarna och sedan betalar nätbolaget. Du får en räkning, men betalar fortfarande för båda. Fråga ditt elbolag om de erbjuder det.</p>

<h2>Det enda du kan påverka är elbolaget</h2>
<p>Nätavgiften är reglerad och du kan inte förhandla den. Men <strong>elhandelspriset</strong> kan skilja flera tusen kronor per år mellan billigaste och dyraste avtal. Jämför elavtal för ditt postnummer direkt på vår <a href="/">prisjämförare</a>.</p>
    `,
  },
  // ── YTTERLIGARE SEO-GUIDER ──
  {
    slug: 'rorligt-elpris-for-och-nackdelar',
    title: 'Rörligt elpris 2026 – för- och nackdelar du måste känna till',
    description: 'Allt om rörligt elpris: hur det fungerar, varför det historiskt är billigare än fast pris, och när det faktiskt kan vara ett dåligt val.',
    category: 'Avtalsguider',
    publishedAt: '2026-02-25',
    readMinutes: 5,
    content: `
<h2>Vad är rörligt elpris?</h2>
<p>Rörligt elpris är ett samlingsnamn för elavtal där priset varierar med marknaden. Det finns tre varianter:</p>
<ul>
  <li><strong>Timpris</strong> – Priset ändras varje timme (elbörsen Nord Pool)</li>
  <li><strong>Månadsrörligt</strong> – Snittet av börspriset under månaden + leverantörens påslag</li>
  <li><strong>Kvartspris</strong> – Terminspriset för nästa kvartal, låst tre månader i taget</li>
</ul>
<p>Gemensamt är att priset inte är garanterat för lång tid framöver – till skillnad från fasta prisavtal.</p>

<h2>Varför är rörligt elpris billigare i snitt?</h2>
<p>Historiska data från <a href="https://www.ei.se" target="_blank" rel="noopener noreferrer">Energimarknadsinspektionen</a> och oberoende analyser visar att rörliga konsumenter i genomsnitt betalar <strong>5–15% mindre</strong> än konsumenter med fast pris. Anledningen: leverantören tar inte betalt för att garantera priset. Det fasta priset innehåller en riskpremium.</p>

<h2>Fördelar med rörligt elpris</h2>
<ul>
  <li><strong>Lägre snittid kostnad</strong> – Historiskt billigare än fast pris över längre perioder</li>
  <li><strong>Ingen bindningstid</strong> – De flesta rörliga avtal har 1 månads uppsägningstid</li>
  <li><strong>Ingen straffavgift vid byte</strong> – Du kan byta fritt</li>
  <li><strong>Dra nytta av prisfallet</strong> – Om börspriset faller minskar din kostnad omedelbart</li>
</ul>

<h2>Nackdelar med rörligt elpris</h2>
<ul>
  <li><strong>Oförutsägbarhet</strong> – Din räkning kan variera kraftigt månad till månad</li>
  <li><strong>Risk vid prisktoppar</strong> – Vintern 2021–2022 nådde spotpriset 6–8 kr/kWh i södra Sverige</li>
  <li><strong>Kräver aktivt engagemang</strong> – Du bör hålla koll på att ditt rörliga avtal förblir konkurrenskraftigt</li>
</ul>

<h2>Vem passar rörligt bäst?</h2>
<p>Rörligt elpris passar bäst för dig som:</p>
<ul>
  <li>Kan flytta viss elförbrukning till billiga timmar (timpris)</li>
  <li>Tål månatliga prisvariationer utan att det skapar ekonomisk stress</li>
  <li>Aktivt jämför och byter vid behov – minst en gång per år</li>
</ul>

<h2>Vad händer om priserna skenar?</h2>
<p>Vid extrema priser kan du alltid byta till ett fast avtal. Observera dock att när priserna stiger tenderar fasta avtal att bli dyrare parallellt – leverantörerna prissätter utifrån terminspriser. Det bästa skyddet är att hålla sig informerad och inte sitta passiv.</p>
<p>Jämför aktuella rörliga avtal för ditt postnummer på vår <a href="/">prisjämförare</a>.</p>
    `,
  },
  {
    slug: 'vad-ar-bra-elpris-per-kwh',
    title: 'Vad är ett bra elpris per kWh? Guide för 2026',
    description: 'Vad kostar el normalt? Lär dig vad som är ett bra elpris per kWh 2026 – och hur du avgör om ditt avtal är konkurrenskraftigt eller inte.',
    category: 'Förstå elpriset',
    publishedAt: '2026-02-26',
    readMinutes: 5,
    content: `
<h2>Vad kostar el per kWh i Sverige 2026?</h2>
<p>Elpriset du ser i annonser och jämförelsetjänster är elproduktionskostnaden – det vill säga den del du kan påverka och byta. Den rörliga produktionskostnaden i Sverige under början av 2026 ligger typiskt på:</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Avtaltyp</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Typiskt pris (SE3, jan–feb 2026)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Timpris (snitt)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">45–80 öre/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Månadsrörligt</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">50–90 öre/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Kvartspris</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">55–95 öre/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Fast pris 1 år</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">70–110 öre/kWh</td></tr>
  </tbody>
</table>
<p>Lägg till elskatt (45 öre/kWh inkl. moms), nätavgift (20–50 öre/kWh) och moms, så hamnar den <strong>totala kostnaden</strong> typiskt på 1,50–2,50 kr/kWh beroende på avtal och nätbolag.</p>

<h2>Hur avgör du om ditt avtal är konkurrenskraftigt?</h2>
<p>Jämför ditt pris med lägsta tillgängliga avtal för ditt postnummer och din förbrukning. Det viktigaste är inte att ha exakt lägst öre/kWh – det är att <strong>inte betala onödigt mycket mer</strong> än marknadsläget.</p>
<p>En tumregel: om ditt rörliga avtal är <strong>mer än 10–15 öre/kWh över</strong> det billigaste konkurrerande alternativet är det dags att byta.</p>

<h2>Vad elskatt och nät kostar – som du inte kan förhandla</h2>
<ul>
  <li><strong>Elskatt (2026):</strong> 36,0 öre/kWh exkl. moms = 45 öre/kWh inkl. moms (lägre i SE1–SE2)</li>
  <li><strong>Nätavgift:</strong> Fast del 1 500–5 000 kr/år + rörlig del 20–50 öre/kWh</li>
  <li><strong>Moms:</strong> 25% på allt ovanstående</li>
</ul>

<h2>Hur skillnaden ser ut i kronor</h2>
<p>Med 15 000 kWh/år och 20 öre/kWh i prisskillnad handlar det om <strong>3 000 kr per år</strong>. Det är pengar du kan spara bara genom att byta avtal – på 30 sekunder via vår <a href="/">prisjämförare</a>.</p>
    `,
  },
  {
    slug: 'basta-elbolaget-2026',
    title: 'Bästa elbolaget 2026 – hur väljer du rätt?',
    description: 'Det finns inget universellt bästa elbolag – rätt val beror på var du bor, din förbrukning och vad du värderar. Så här tänker du för att hitta ditt bästa elbolag 2026.',
    category: 'Avtalsguider',
    publishedAt: '2026-02-27',
    readMinutes: 6,
    content: `
<h2>Varför finns det inget objektivt "bästa elbolag"?</h2>
<p>Priset på el beror på <strong>ditt postnummer</strong> (elområde SE1–SE4), <strong>din årsförbrukning</strong> och vilken avtalstyp du väljer. Det billigaste elbolaget för en villa i Malmö med 25 000 kWh/år är sällan samma som för en lägenhet i Umeå med 2 000 kWh/år.</p>
<p>Det som däremot går att jämföra objektivt är: <em>vilket avtal ger lägst total kostnad för just din situation?</em></p>

<h2>Stora vs. små elbolag – vad skiljer dem?</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Faktor</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Stora aktörer (Vattenfall, E.ON, Fortum)</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Utmanare (Tibber, Bixia, Lumenaza m.fl.)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Pris</td><td style="padding:8px;border:1px solid #e5e7eb">Ofta inte lägst</td><td style="padding:8px;border:1px solid #e5e7eb">Varierar, ofta konkurrenskraftigt</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Kundservice</td><td style="padding:8px;border:1px solid #e5e7eb">Stort supportnät, long öppettider</td><td style="padding:8px;border:1px solid #e5e7eb">Ofta app-baserat, snabbare digitalt</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Avtalsform</td><td style="padding:8px;border:1px solid #e5e7eb">Alla typer</td><td style="padding:8px;border:1px solid #e5e7eb">Specialiserade (t.ex. timpris)</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Grön el</td><td style="padding:8px;border:1px solid #e5e7eb">Tillval</td><td style="padding:8px;border:1px solid #e5e7eb">Ingår ofta som standard</td></tr>
  </tbody>
</table>

<h2>Vad ska du faktiskt titta på?</h2>
<ol>
  <li><strong>Total kostnad per år</strong> – Räkna in fast månadsavgift + rörligt pris × din förbrukning</li>
  <li><strong>Bindningstid</strong> – Undvik långa bindningstider om du inte är säker på prisutvecklingen</li>
  <li><strong>Uppsägningstid</strong> – Standard är 1 månad. Kortare är bättre.</li>
  <li><strong>Prispåslag</strong> – Hur stor marginal tar leverantören utöver elbörsprisen?</li>
  <li><strong>Kundbetyg</strong> – Kolla Trustpilot och Konsumentverkets klagomålsstatistik</li>
</ol>

<h2>Stabila aktörer att jämföra</h2>
<p>Bland de aktörer som konsekvent rankas högt i oberoende prisjämförelser och kundbetyg finns bl.a. <strong>Tibber</strong> (timpris, app-baserat), <strong>Bixia</strong> (hållbarhetsprofil, bra pris), <strong>Fortum</strong> (brett utbud) och ett antal regionala bolag.</p>
<p>Men poängen är: <strong>status ändras snabbt</strong>. Det bästa bolaget i oktober kanske är medelmåttigt i april. Jämför alltid aktuellt pris på vår <a href="/">prisjämförare</a> innan du tecknar – det tar 30 sekunder och data hämtas direkt från marknaden.</p>

<h2>Varning: introduktionspriser</h2>
<p>Var uppmärksam på "kampanjpriser" de första 3–6 månaderna som sedan höjs kraftigt. Räkna alltid på priset <em>efter</em> kampanjperioden.</p>
    `,
  },
  {
    slug: 'varmepump-och-elavtal',
    title: 'Värmepump och elavtal – maximera din besparing',
    description: 'Har du bergvärme, luft-vattenvärmepump eller luft-luftvärmepump? Rätt elavtal tillsammans med din värmepump kan spara dig tusentals kronor extra per år.',
    category: 'Spara el',
    publishedAt: '2026-02-27',
    readMinutes: 6,
    content: `
<h2>Varför är elavtalet extra viktigt med värmepump?</h2>
<p>En värmepump är en stor elkonsument – en bergvärmepump i en villa drar typiskt <strong>8 000–15 000 kWh/år</strong> enbart för uppvärmning. Det innebär att din totala elförbrukning kanske är 12 000–20 000 kWh/år. Med den volymen är varje öre per kWh du sparar värd 120–200 kr per år.</p>

<h2>Vilken avtalstyp passar bäst med värmepump?</h2>
<h3>Timpris – bäst om du har smart styrning</h3>
<p>En bergvärmepump eller luft-vattenvärmepump kan ofta styras via smarta termostater eller elhanteringsappar. Genom att programmera pumpen att arbeta hårdare under de billigaste timmarna (ofta kl. 01–06) och lagra värme i huset/en varmvattentank, kan du spara <strong>15–25% på driftkostnaden</strong>.</p>
<p>Leverantörer som Tibber och Bixia erbjuder API-koppling mot populära värmepumpar från Nibe, Bosch och Mitsubishi.</p>

<h3>Kvartspris – enklare alternativ</h3>
<p>Ingen smart styrning men vill ändå följa marknaden? Kvartspris ger ett förutsägbart pris per kvartal utan att du behöver göra något aktivt.</p>

<h3>Fast pris – sällan optimalt för värmepump</h3>
<p>Med en hög förbrukning betalar du mer riskpremium i kronor. Historiskt sett är rörligt billigare på lång sikt för höga förbrukare.</p>

<h2>Luft-luft vs bergvärme – olika strategier</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Pumptyp</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Elförbrukning/år</th>
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Smart styrning möjlig?</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Luft-luft</td><td style="padding:8px;border:1px solid #e5e7eb">3 000–6 000 kWh</td><td style="padding:8px;border:1px solid #e5e7eb">Begränsat</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Luft-vatten</td><td style="padding:8px;border:1px solid #e5e7eb">6 000–12 000 kWh</td><td style="padding:8px;border:1px solid #e5e7eb">Ja, via styrsystem</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Berg-/mark-/sjövärmepump</td><td style="padding:8px;border:1px solid #e5e7eb">8 000–15 000 kWh</td><td style="padding:8px;border:1px solid #e5e7eb">Ja, fullt integrerbart</td></tr>
  </tbody>
</table>

<h2>COP – värmepumpens effektivitetsmått</h2>
<p>COP (Coefficient of Performance) anger hur många kWh värme du får ut per kWh el in. En bergvärmepump har COP 3–5, vilket innebär att du producerar 3–5 kWh värme för varje kWh el. Med ett bra elavtal och smart styrning multipliceras besparingen ytterligare.</p>

<h2>Räkneexempel</h2>
<p>Villa med bergvärmepump, 12 000 kWh/år:</p>
<ul>
  <li>Smart timprisavtal vs genomsnittligt rörligt: sparbesparing ~15% × 12 000 kWh × 0,70 kr/kWh ≈ <strong>1 260 kr/år extra</strong></li>
  <li>Bästa vs sämsta avtal på marknaden (20 öre/kWh skillnad): <strong>2 400 kr/år</strong></li>
</ul>
<p>Jämför avtal för din förbrukning och postnummer på vår <a href="/">startsida</a>.</p>
    `,
  },
  {
    slug: 'ladda-elbil-hemma-kostnad-tips',
    title: 'Ladda elbil hemma – kostnad, avtal och smarta tips 2026',
    description: 'Allt om hemmaladdning av elbil: vad det kostar per mil, vilket elavtal som minimerar laddkostnaden, hur en smart laddbox fungerar och hur du maxar den nya elbilsbonusen.',
    category: 'Elbil & laddning',
    publishedAt: '2026-02-27',
    readMinutes: 7,
    content: `
<h2>Vad kostar det att ladda elbilen hemma?</h2>
<p>En genomsnittlig elbil förbrukar <strong>15–25 kWh per 10 mil</strong>. Med ett typiskt elpris (exkl. skatt och nät) på 60–80 öre/kWh och full kostnad på ca 1,50–2,50 kr/kWh handlar det om:</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Förbrukning</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Kostnad/mil (1,50 kr/kWh)</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Kostnad/mil (2,50 kr/kWh)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">15 kWh/10 mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">2,25 kr/mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">3,75 kr/mil</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">20 kWh/10 mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">3,00 kr/mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">5,00 kr/mil</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">25 kWh/10 mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">3,75 kr/mil</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">6,25 kr/mil</td></tr>
  </tbody>
</table>
<p>Jämfört med bensin (12–15 kr/mil) är hemmaladdning alltså <strong>3–5 gånger billigare per mil</strong>.</p>

<h2>Vilket elavtal är bäst för elbilsägare?</h2>
<p><strong>Timprisavtal är det klart bästa valet</strong> för dig med elbil. Anledningen: du kan schemalägga laddningen till de timmar (typiskt kl. 00–06) när elpriset är som lägst – ofta 30–60% under dagspriset på vardagar. En smart laddbox sköter det automatiskt.</p>
<p>Besparingspotential med smart laddning:</p>
<ul>
  <li>Kör du 1 500 mil/år med 18 kWh/10 mil = 2 700 kWh laddning per år</li>
  <li>Nattladdning (timpris nattnivå) vs dagladdning: ca 30 öre/kWh skillnad</li>
  <li>Besparing: 2 700 × 0,30 = <strong>810 kr/år</strong> – bara på smartare laddtidpunkt</li>
</ul>

<h2>Smart laddbox – värd investeringen?</h2>
<p>En smart laddbox (t.ex. Easee, Zaptec, Garo, Charge Amps) kostar 5 000–15 000 kr installerad. Funktioner som spelar roll:</p>
<ul>
  <li><strong>Schemaläggning</strong> – Laddar automatiskt de billigaste timmarna</li>
  <li><strong>Prisoptimering</strong> – Koppling mot Tibber eller liknande för realtidsprisoptimering</li>
  <li><strong>Effektbalansering</strong> – Laddar långsammare när resten av huset drar mycket (viktigt för effektavgifter)</li>
  <li><strong>V2H (Vehicle-to-Home)</strong> – Nyare modeller kan mata tillbaka el från batterierna till hemmet under dyra timmar</li>
</ul>

<h2>Kan du använda elnätets 10A-uttag (Schuko)?</h2>
<p>Ja, det fungerar som nödlösning (ca 1,5 kW = 15 km räckvidd per timme) men är inte rekommenderat för regelbunden laddning. Risken för överhettning av förlängningskablar och uttag är reell. En fast laddbox är säkrare och snabbare.</p>

<h2>Laddbox och ROT-avdrag</h2>
<p>Installation av laddbox ger <strong>ROT-avdrag (30%)</strong> på arbetskostnaden. Installation värd 5 000 kr i arbete ger alltså 1 500 kr skattereduktion. Tillsammans med den nya elbilspremien kan du minska den totala kostnaden rejält.</p>

<h2>Jämför elavtal för hemmaladdning</h2>
<p>Med en elbil ökar din hemmaförbrukning med 1 500–3 000 kWh/år. Det gör valet av elavtal ännu viktigare. Ange din uppskattade totala förbrukning (inklusive elbil) på vår <a href="/">prisjämförare</a> för att se vilket avtal som ger lägst total kostnad.</p>
    `,
  },
  {
    slug: 'fjarrvarme-vs-elvarme',
    title: 'Fjärrvärme vs elvärme – vad är billigast 2026?',
    description: 'Vilken uppvärmningsform är billigast: fjärrvärme eller elvärme? Vi jämför priser, för- och nackdelar och vad du bör tänka på om du funderar på att byta.',
    category: 'Spara el',
    publishedAt: '2026-02-27',
    readMinutes: 6,
    content: `
<h2>Hur skiljer sig fjärrvärme och elvärme?</h2>
<p><strong>Fjärrvärme:</strong> Värme producerad centralt (ofta av spillvärme, biobränsle eller värmepumpar) distribueras via isolerade rör till bostaden. Du betalar ett fast abonnemang plus ett rörligt pris per MWh.</p>
<p><strong>Elvärme:</strong> El omvandlas direkt till värme via elradiatorer, vattenburna värmesystem eller värmepump. Du betalar elpris per kWh.</p>

<h2>Prisjämförelse 2026</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Uppvärmningsform</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Typisk kostnad per kWh värme</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Fjärrvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">0,80–1,30 kr/kWh (inkl. moms)</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Direktelvärme (elradiator)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">1,50–2,50 kr/kWh (inkl. moms)</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Bergvärmepump (COP 3)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">0,50–0,85 kr/kWh</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Luft-luftvp (COP 3,5)</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">0,45–0,75 kr/kWh</td></tr>
  </tbody>
</table>
<p>Slutsats: <strong>Direktelvärme är dyrast per kWh värme</strong>. Fjärrvärme är billigare än direkt el, men dyrare än värmepump. En värmepump – oavsett typ – är det billigaste alternativet räknat per kWh värme.</p>

<h2>Kan du välja fritt?</h2>
<p>Nej – inte alltid. Fjärrvärme kräver att ditt område har ett fjärrvärmenät. Bor du i en villa utanför tätort finns det ofta inget nät och du är hänvisad till elvärme, ved, pellets eller värmepump. Bor du i lägenheten bestämmer hyresvärd eller bostadsrättsförening uppvärmningsform.</p>

<h2>Kan man byta från elvärme till fjärrvärme?</h2>
<p>Om fjärrvärmeanslutning finns i ditt område kostar anslutning 30 000–80 000 kr för en villa, plus installation av värmeväxlare och vattenburet system (~50 000–120 000 kr om du har direktelvärme idag). Total investering: 80 000–200 000 kr. Payback-tid är lång.</p>
<p>Mer kostnadseffektivt för de flesta villaägare med direktelvärme är att investera i en <strong>luft-vattenvärmepump eller bergvärmepump</strong> istället.</p>

<h2>Optimera elvärme med rätt elavtal</h2>
<p>Har du kvar direktelvärme? Det finns inget du kan göra åt att det är en dyr uppvärmningsform – men du kan minimera skadan med rätt elavtal. Vår <a href="/">prisjämförare</a> visar det billigaste alternativet för din förbrukning och ditt postnummer. Skillnaden är ofta 3 000–8 000 kr/år.</p>
    `,
  },
  {
    slug: 'binda-elpriset-smart-2026',
    title: 'Binda elpriset – är fast pris smart 2026?',
    description: 'Funderar du på att binda elpriset med ett fast avtal? Lär dig när det är smart och när det är en dålig idé – och vad du bör tänka på under 2026.',
    category: 'Avtalsguider',
    publishedAt: '2026-02-27',
    readMinutes: 5,
    content: `
<h2>Vad innebär det att "binda" elpriset?</h2>
<p>Att binda elpriset innebär att du tecknar ett <strong>fast prisavtal</strong> – din elproduktionskostnad är låst under hela avtalsperioden, oavsett hur börspriset rör sig. Bindningstider är vanligtvis 1, 2 eller 3 år.</p>

<h2>Varför väljer folk att binda?</h2>
<ol>
  <li><strong>Trygghet</strong> – Du vet exakt vad elproduktionen kostar per kWh under perioden</li>
  <li><strong>Budgetering</strong> – Förutsägbar ellräkning, inget som "smäller till" en kall vinter</li>
  <li><strong>Skydd mot prishopp</strong> – Vintern 2021–2022 var de med fast pris stora vinnare</li>
</ol>

<h2>Varför är det riskabelt att binda?</h2>
<ol>
  <li><strong>Du betalar en riskpremium</strong> – Leverantören prissätter fix till terminspris + marginal. Historiskt kostar det dig extra i snitt.</li>
  <li><strong>Priserna kan falla</strong> – Om spotpriser faller under din bindningstid betalar du mer än nödvändigt</li>
  <li><strong>Inlösenklausul</strong> – Vill du bryta ett fast avtal i förtid kan kostnaden vara hög</li>
  <li><strong>Lång horisont = hög osäkerhet</strong> – Ingen vet säkert hur elpriset ser ut om 2–3 år</li>
</ol>

<h2>Hur resonerar experterna?</h2>
<p>Energianalytiker på exv. <a href="https://www.energimarknadsbyraan.se" target="_blank" rel="noopener noreferrer">Energimarknadsbyran</a> brukar säga att fast pris är en <em>försäkring</em>, inte en investering. Du betalar en premie för att slippa risken – precis som med hemförsäkring. Vill du ha den psykologiska tryggheten är det legitimt att välja fast.</p>

<h2>Indikationer på att binda KAN vara klokt 2026</h2>
<ul>
  <li>Terminspriserna (futurer på <a href="https://www.nordpoolgroup.com" target="_blank" rel="noopener noreferrer">Nord Pool</a>) pekar på kommande prisuppgång</li>
  <li>Du har extremt hög förbrukning (villa med direktelvärme, 25 000+ kWh/år) – stor exponering</li>
  <li>Du vill absolutt inte tänka på elpriser under ett eller två år</li>
</ul>

<h2>Indikationer på att INTE binda</h2>
<ul>
  <li>Terminspriserna är klart högre än nuvarande spotpriser (leverantörerna har prisat in uppgång)</li>
  <li>Du är beredd att byta avtal om spotpriserna stiger kraftigt</li>
  <li>Din förbrukning är låg (lägenhet) – riskpremien är liten i kronor</li>
</ul>

<h2>Alternativ till fix: kvartspris</h2>
<p>Kvartspris ger tre månaders förutsägbarhet utan lika hög riskpremium som fast pris. Många experter rekommenderar det som "best of both worlds" för normalförbrukare. Jämför alla avtalstyper för ditt postnummer på vår <a href="/">prisjämförare</a>.</p>
    `,
  },
  {
    slug: 'elavtal-utan-bindningstid',
    title: 'Elavtal utan bindningstid – vad du behöver veta',
    description: 'De flesta rörliga elavtal saknar bindningstid – men vad innebär det egentligen? Och finns det nackdelar med att inte ha ett bundet avtal?',
    category: 'Avtalsguider',
    publishedAt: '2026-02-27',
    readMinutes: 4,
    content: `
<h2>Vad är ett elavtal utan bindningstid?</h2>
<p>Ett elavtal utan bindningstid innebär att du kan säga upp avtalet när som helst, vanligtvis med 1 månads uppsägningstid. Ni är heller inte bundna av varandra – leverantören kan ändra priset (med föregående avisering), och du kan gå. De allra flesta rörliga elavtal – månadsrörliga, timpris och kvartspris – saknar bindningstid.</p>

<h2>Fördelar utan bindningstid</h2>
<ul>
  <li><strong>Full flexibilitet</strong> – Byt när du hittar ett bättre pris, utan kostnad</li>
  <li><strong>Inget straff vid byte</strong> – Inga inlösenavgifter om du byter i förtid</li>
  <li><strong>Skyddar mot dåliga avtal</strong> – Om Din leverantör höjer priset kan du snabbt flytta</li>
</ul>

<h2>Nackdelar utan bindningstid</h2>
<ul>
  <li><strong>Priset kan ändras</strong> – Leverantören kan höja det rörliga påslaget med 30 dagars varsel</li>
  <li><strong>Du måste vara aktiv</strong> – Passiva kunder tenderar att betala mer efter hand</li>
  <li><strong>Ingen prisgaranti</strong> – Till skillnad mot fast pris vet du inte exakt vad du betalar nästa kvartal</li>
</ul>

<h2>Vad händer om du inte gör något?</h2>
<p>Det vanligaste felet är att teckna ett bra avtal och sedan glömma det. Leverantörer räknar med kundtröghet – de kan gradvis höja påslaget, i vetskap om att de flesta inte märker det. Fenomenet kallas "loyalty penalty".</p>
<p>Lösning: sätt en kalenderpåminnelse varje år (lämpligen höst, inför vinterhalvåret) för att jämföra ditt avtal med marknaden. På vår <a href="/">prisjämförare</a> tar det 30 sekunder.</p>

<h2>När är bindningstid okej?</h2>
<p>Fast pris med bindningstid kan vara vettigt om du aktivt väljer det som en strategi – inte av passivitet. Tänk på det som att köpa en försäkring: du betalar en premie för trygghet. Gör det bara med öppna ögon och koll på vad du betalar.</p>

<h2>Sammanfattning</h2>
<p>För de flesta konsumenter är ett rörligt avtal utan bindningstid det bästa startläget – förutsatt att du faktiskt byter om priset försämras. Kombinera med en ≤1 jämförelse per år på vår <a href="/">startsida</a> för optimalt resultat.</p>
    `,
  },
  {
    slug: 'spara-el-pa-vintern',
    title: 'Spara el på vintern – 12 beprövade tips för 2026',
    description: 'Vinterhalvåret är när elräkningen slår som hårdast. Här är 12 konkreta tips för att minska din elförbrukning under vinterhalvåret – utan att frysa.',
    category: 'Spara el',
    publishedAt: '2026-02-27',
    readMinutes: 6,
    content: `
<h2>Varför kostar el mer på vintern?</h2>
<p>Det är dubbelt dyrt på vintern: du förbrukar mer el (uppvärmning, belysning, varmvatten) OCH spotpriset per kWh är generellt högre (ökad efterfrågan i hela Norden och Europa). Det gör att vinterns elräkning kan vara 3–4 gånger högre än sommarmånaderna.</p>

<h2>12 tips att börja med nu</h2>

<h3>Utan kostnad</h3>
<ol>
  <li><strong>Sänk nattemperaturen 3–5 grader</strong> – Sätt termostaterna på 18°C kl. 23–06. Huset är ändå varmt när du vaknar. Sparar 10–15% på värme.</li>
  <li><strong>Sänk dagtemperaturen 1–2 grader</strong> – Från 22°C till 20°C. Du märker knappt skillnaden. Sparar ytterligare 10%.</li>
  <li><strong>Undvik "vädra" med fönstret på glänt</strong> – Vädra snabbt och effektivt med full genomdrag i 2–3 minuter istället. Timmar med öppet fönster slösar värme.</li>
  <li><strong>Flytta möbler från elementet</strong> – Soffor och draperier framför radiatorer hindrar värmeflödet. Fri cirkulation ger jämnare temperatur med lägre effekt.</li>
  <li><strong>Stäng dörrar till rum du inte använder</strong> – Värm bara de rum du faktiskt vistas i.</li>
  <li><strong>Tvätta och diska på natten</strong> – Med timprisavtal är elpriset kl. 00–06 ofta 40–70% lägre än kl. 08–09. Timer i maskinen sköter det.</li>
  <li><strong>Sänk varmvattentemperaturen till 55°C</strong> – Högre temperatur kräver mer energi och är onödigt. 55°C förhindrar Legionella och räcker mer än väl.</li>
</ol>

<h3>Enkla investeringar (låg kostnad)</h3>
<ol start="8">
  <li><strong>Täta ytterdörrar och fönster</strong> – Tätningslister kostar 200–800 kr och ger omedelbara besparingar. Känn efter drag runt dörrkarmar en kall dag.</li>
  <li><strong>Byt till LED i alla lampor</strong> – Vintern means mer belysning. LED-lampor förbrukar 80–90% mindre energi.</li>
  <li><strong>Smartstick på underhållningselektronik</strong> – TV, spelkonsol och ljudanläggning i stand-by drar el konstant. En smartstick stänger av hela gruppen med ett klick (ca 100 kr).</li>
</ol>

<h3>Investeringar med snabbt betald tid</h3>
<ol start="11">
  <li><strong>Smart termostat</strong> – Produkter som Google Nest, Homemade Energy eller Fibaro kan sänka uppvärmningskostnaden med 10–25% och betalar sig på under ett år.</li>
  <li><strong>Jämför och byt elavtal</strong> – Det snabbaste tipset av alla. Skillnaden mellan bästa och sämsta avtal i januari kan vara 30 öre/kWh. Med 2 500 kWh i januari är det <strong>750 kr bara den månaden</strong>. Jämför på vår <a href="/">prisjämförare</a> – tar 30 sekunder.</li>
</ol>

<h2>Hur stor skillnad gör det totalt?</h2>
<p>Tillämpar du alla 12 tips på en villa med elvärme och 20 000 kWh/år kan du spara:</p>
<ul>
  <li>Beteendetips (1–7): 15–20% = 3 000–4 000 kWh = 4 500–6 000 kr/år</li>
  <li>Investeringstips (8–11): 5–10% = 1 000–2 000 kWh = 1 500–3 000 kr/år</li>
  <li>Byte av elavtal: 2 000–8 000 kr/år beroende på nuvarande avtal</li>
</ul>
<p>Räknar du ihop allt handlar det om <strong>8 000–17 000 kr per år</strong> i potentiella besparingar.</p>
    `,
  },
  {
    slug: 'nyflyttad-guide-forsta-elavtal',
    title: 'Nyflyttad – guide till ditt första elavtal',
    description: 'Nytt hem, ny stad, nytt elavtal. Allt du behöver veta som nyflyttad: hur el fungerar, vad du måste göra, hur du undviker fällor och hittar billigaste avtalet.',
    category: 'Grunderna',
    publishedAt: '2026-02-27',
    readMinutes: 5,
    content: `
<h2>Vad behöver du göra när du flyttar in?</h2>
<p>När du flyttar in i ett nytt hem (hyresrätt eller bostadsrätt/villa med egen elmätare) måste du ordna ett eget elavtal. Om du inte gör det hamnar du automatiskt hos det lokala nätbolagets "anvisningsleverantör" – ett avtal som vanligtvis är bland de dyraste på marknaden.</p>
<p><strong>Gör detta direkt:</strong> Teckna ett avtal hos en valfri elleverantör innan inflyttningsdagen, eller senast under den allra första veckan.</p>

<h2>Vad behöver du för att teckna avtal?</h2>
<ul>
  <li><strong>Mätarpunkt-ID (MPID)</strong> – En 18-siffrig kod som identifierar ditt hem i elnätet. Finns på din elfaktura, i nätbolagets kundportal, eller be din mäklare/hyresvärd.</li>
  <li><strong>Personnummer</strong> – För kreditkontroll och identifikation</li>
  <li><strong>Uppskattad årsförbrukning</strong> – Fråga tidigare boende, din hyresvärd eller räkna baserat på boendets storlek</li>
  <li><strong>Inflyttningsdatum</strong> – Avtalet börjar gälla från detta datum</li>
</ul>

<h2>Vad är skillnaden på elbolag och nätbolag?</h2>
<p>Som nyflyttad är det lätt att blanda ihop dem:</p>
<ul>
  <li><strong>Nätbolaget</strong> äger kablarna. Beror på var du bor – kan inte väljas. Du betalar automatiskt nätavgift baserat på din adress.</li>
  <li><strong>Elbolaget</strong> (elhandlaren) säljer elproduktionen. Det är detta du väljer och tecknar avtal med. Du kan byta fritt.</li>
</ul>

<h2>Välj rätt avtalstyp som nyflyttad</h2>
<p>Som nyflyttad vet du kanske inte exakt hur mycket el du kommer att förbruka. Rekommendationen är då:</p>
<ul>
  <li>Välj ett <strong>rörligt avtal utan bindningstid</strong> (månadsrörligt eller kvartspris)</li>
  <li>Titta på din elförbrukning de tre första månaderna</li>
  <li>Jämför sedan med facit – byt om du hittar bättre</li>
</ul>
<p>Undvik långa fasta avtal tills du vet din verkliga förbrukning.</p>

<h2>Typisk förbrukning per boendetyp</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
  <thead><tr style="background:#f0fdf4">
    <th style="text-align:left;padding:8px;border:1px solid #d1fae5">Boendetyp</th>
    <th style="text-align:right;padding:8px;border:1px solid #d1fae5">Uppskattad förbrukning</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">1-rummare / studio</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">1 200–1 800 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">2–3-rumslägenhet</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">2 000–3 500 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Villa utan elvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">5 000–8 000 kWh/år</td></tr>
    <tr><td style="padding:8px;border:1px solid #e5e7eb">Villa med elvärme</td><td style="text-align:right;padding:8px;border:1px solid #e5e7eb">15 000–30 000 kWh/år</td></tr>
  </tbody>
</table>

<h2>Jämför billigaste avtal för din nya adress</h2>
<p>Ange ditt nya postnummer och en uppskattad förbrukning på vår <a href="/">prisjämförare</a>. Du ser alla tillgängliga avtal sorterade billigast först – det tar 30 sekunder och är helt gratis.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

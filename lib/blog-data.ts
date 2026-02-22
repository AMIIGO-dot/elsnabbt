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
<p>Använd vår <a href="/">prisjämförare</a> för att se alla tillgängliga avtal för ditt postnummer och din förbrukning, sorterade billigast först. Data hämtas direkt från Energimarknadsinspektionens databas – alla avtal på marknaden, inget undantag.</p>

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
<p>Ett kvartsprisavtal innebär att din elleverantör bestämmer priset för nästkommande kvartal (3 månader) baserat på terminspriserna på elbörsen Nord Pool. Priset gäller sedan under hela kvartalet – oavsett hur börsen rör sig under perioden.</p>
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
<p>Nord Pool är den nordeuropeiska elbörsen där elleverantörer, kraftbolag, industriföretag och handlare köper och säljer el. Börsen är öppen dygnet runt och sätter ett pris för varje timme, nästa dygn (day-ahead-marknaden). Det pris som sätts kallas <strong>spotpriset</strong>.</p>
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
<p>Fler och fler elnätsbolag (Vattenfall Eldistribution, Ellevio, E.ON Elnät m.fl.) har infört eller planerar att införa effektbaserade tariffer. Energimarknadsinspektionen rekommenderade 2021 att hela branschen ska gå i den riktningen.</p>

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
  <li><strong>Skattereduktion (30 öre/kWh)</strong> – Du får 30 öre per kWh som du matar in, dock max 50 000 kWh/år. Detta är ett skatteavdrag, inte en betalning. Det syns i din deklaration.</li>
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
<p><strong>Nej – det är alltid gratis</strong> att byta elleverantör i Sverige. Det är en lagstadgad rättighet sedan elmarknaden avreglerades 1996. Inga avgifter, inga dolda kostnader. Om ett företag försöker ta betalt för ett byte – välj ett annat.</p>
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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

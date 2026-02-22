# Hitta rätt DOM-selectors på elpriskollen.se

Jag behöver att du utför dessa steg i **Chrome eller Edge** och klistrar in resultaten till mig.
Det tar ca 10 minuter.

---

## Steg 1 – Navigera till resultatsidan

1. Öppna **https://www.elpriskollen.se/**
2. Godkänn cookies
3. Fyll i ett postnummer, t.ex. `11122`
4. Klicka **Nästa**
5. Välj `Jag känner till min årsförbrukning` → skriv in `15000` → klicka **Nästa**
6. Välj en avtalstyp, t.ex. **TIMPRIS**
7. Du bör nu se en lista med elavtal och priser

---

## Steg 2 – Öppna DevTools-konsolen

Tryck **F12** → klicka på fliken **Console**

---

## Steg 3 – Klistra in dessa kommandon ett i taget

Kopiera varje kodblock nedan, klistra in i konsolen och tryck Enter.
**Skicka mig hela outputen** (det du ser under varje kommando).

---

### Kommando 1 – Hur ser ett avtalskort ut?
Högerklicka på ett av avtalskorten i listan → **Inspektera**
Titta i Elements-panelen och hitta det yttersta elementet som omsluter hela kortet (t.ex. `<li>`, `<div>`, `<article>`).

Kör sedan detta i konsolen:

```js
// Byt ut 'li.KLASS' mot vad du såg i Elements-panelen
document.querySelectorAll('li.KLASS')[0]?.outerHTML?.slice(0, 1000)
```

---

### Kommando 2 – Hitta rätt selector automatiskt
```js
// Testar vanliga kandidater – se vilken ger rätt antal kort
[
  '[class*="product"]',
  '[class*="offer"]',
  '[class*="avtal"]',
  '[class*="result"]',
  '[class*="card"]',
  '[class*="epk-list"]',
  '[class*="contract"]',
  'li[class]',
  '.webapp-boilerplate li',
  '#app li',
].map(s => s + ': ' + document.querySelectorAll(s).length + ' st')
```

---

### Kommando 3 – Alla unika klasser på sidan (filtrerat)
```js
[...new Set(
  [...document.querySelectorAll('[class]')]
    .flatMap(e => [...e.classList])
    .filter(c => c.length > 3 && !c.startsWith('sv-') && !c.startsWith('env-') && !c.startsWith('epk-menu') && !c.startsWith('epk-nav'))
)].sort().join('\n')
```

---

### Kommando 4 – Visa HTML för första kortet
*(Byt ut `DIN-SELECTOR` mot den selector som gav rätt antal i Kommando 2)*
```js
document.querySelectorAll('DIN-SELECTOR')[0]?.outerHTML?.slice(0, 2000)
```

---

### Kommando 5 – Hitta leverantörsnamn, pris och typ inuti ett kort
*(Byt ut `DIN-SELECTOR` mot rätt selector)*
```js
const kort = document.querySelectorAll('DIN-SELECTOR');
[...kort].slice(0, 3).map(k => ({
  leverantor: k.querySelector('h2,h3,h4,[class*="name"],[class*="supplier"],[class*="company"]')?.textContent?.trim(),
  pris:       k.querySelector('[class*="price"],[class*="pris"],[class*="cost"],[class*="total"],[class*="sum"]')?.textContent?.trim(),
  typ:        k.querySelector('[class*="type"],[class*="typ"],[class*="avtal"],[class*="form"]')?.textContent?.trim(),
  logo:       k.querySelector('img')?.src,
  allText:    k.textContent?.trim()?.slice(0, 200),
}))
```

---

## Vad jag behöver från dig

Klistra in outputen från **Kommando 2, 3, 4 och 5** – så uppdaterar jag koden direkt.

Det viktigaste är:
- **Selector för ett avtalskort** (t.ex. `li.product-item` eller `.contract-list > div`)
- **Selector för leverantörsnamn** (t.ex. `h3.supplier-name`)
- **Selector för totalpris per år** (t.ex. `.price-year` eller `[class*="total"]`)
- **Selector för totalpris per månad**
- **Selector för avtalstyp** (rörligt/fast/timpris)
- **Selector för logotyp** (`img`-tag inuti kortet)

# Bilder – lägg kundens foton här

Alla foton läggs i den här mappen (`public/images/`). Tills en riktig
bild finns visar sidan en snygg honungston-platshållare automatiskt, så
layouten ser färdig ut även innan fotona är på plats.

Filnamnen nedan är de som koden refererar till just nu. Byt ut mot
riktiga foton med **exakt samma filnamn**, så dyker de upp direkt.

## Filnamn som används

| Fil                        | Var den visas              | Rekommenderat format        |
| -------------------------- | -------------------------- | --------------------------- |
| `hero-honung.jpg`          | Startsidans hero           | Stående ~1200×1500, .webp/.jpg |
| `bikupor-sommar.jpg`       | Start – "Om oss"-strip     | Liggande ~1200×900          |
| `biodlare-portratt.jpg`    | Om oss – porträtt          | Stående ~1000×1250          |
| `ram-med-honung.jpg`       | Om oss – galleri           | Kvadratisk ~1000×1000       |
| `blommor-anga.jpg`         | Om oss – galleri           | Kvadratisk ~1000×1000       |
| `steg-bi-blomma.jpg`       | Honungen – steg 01         | Liggande ~1200×900          |
| `steg-slungning.jpg`       | Honungen – steg 02         | Liggande ~1200×900          |
| `steg-silning.jpg`         | Honungen – steg 03         | Liggande ~1200×900          |
| `steg-tappning.jpg`        | Honungen – steg 04         | Liggande ~1200×900          |
| `steg-kvalitet.jpg`        | Honungen – steg 05         | Liggande ~1200×900          |
| `og-image.jpg`             | Delning i sociala medier   | 1200×630                    |

Produktbilder (valfritt) kan läggas till genom att sätta `image`-fältet
i `src/data/site.ts` för varje produkt, t.ex. `image: "/images/forsommar.jpg"`.

## Tips för snabb sida

- Spara helst som **.webp** (mindre filer, samma kvalitet). Byt då även
  filändelsen i `src/data/site.ts` / komponenterna.
- Komprimera fotona (t.ex. squoosh.app) innan de läggs in.
- Bilderna lazy-laddas automatiskt (utom hero, som laddas direkt för
  bästa Core Web Vitals).

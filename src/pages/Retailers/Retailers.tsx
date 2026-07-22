import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { usePageMeta } from "../../hooks/usePageMeta";
import { RETAILERS, MARKETS, CONTACT } from "../../data/site";
import "./Retailers.css";

export default function Retailers() {
  usePageMeta({
    title: "Återförsäljare",
    description:
      "Här hittar du Jopas Honung – gårdsbutiker, lanthandlar, caféer och marknader på Söderåsen och i Skåne.",
  });

  return (
    <div className="retailers">
      <PageHeader
        eyebrow="Återförsäljare"
        title="Var du hittar vår honung"
        intro="Honungen säljs direkt från gården, hos utvalda handlare och på marknader runt om i Skåne. Här är platserna där du kan få tag på den – och möta oss personligen."
      />

      {/* Butiker */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Butiker & samarbeten"
            title="Där honungen står på hyllan"
          />
          <div className="retailers__grid">
            {RETAILERS.map((r, i) => (
              <Reveal key={r.id} variant="up" delay={i * 70}>
                <article className="retailer-card">
                  <span className="retailer-card__type">{r.type}</span>
                  <h3 className="retailer-card__name">{r.name}</h3>
                  <p className="retailer-card__loc">
                    <span className="retailer-card__pin" aria-hidden="true">
                      ◈
                    </span>
                    {r.location}
                  </p>
                  {r.note && <p className="retailer-card__note">{r.note}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marknader */}
      <section className="section retailers__markets-section">
        <div className="container">
          <SectionHeading
            eyebrow="Möt oss"
            title="Kommande marknader"
            description="Kom förbi, provsmaka och fyll på skafferiet. Vi har alltid några burkar med oss."
          />
          <div className="retailers__markets">
            {MARKETS.map((m, i) => (
              <Reveal key={m.id} variant="up" delay={i * 70}>
                <div className="rmarket">
                  <div className="rmarket__date">
                    <span className="rmarket__d">{m.date}</span>
                    <span className="rmarket__day">{m.day}</span>
                  </div>
                  <div>
                    <h3 className="rmarket__title">{m.title}</h3>
                    <p className="rmarket__place">{m.place}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Karta */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Hitta hit"
            title="Vårt hörn av Skåne"
            description="Vi håller till på Söderåsens sluttningar mot Hallandsåsen. Hör av dig för exakt adress vid gårdsbesök."
          />
          <Reveal variant="scale">
            <div className="retailers__map" role="img" aria-label="Karta över Söderåsen i Skåne">
              <div className="retailers__map-grid" aria-hidden="true" />
              <div className="retailers__map-pin">
                <span className="retailers__map-dot" />
                <span className="retailers__map-label">Söderåsen</span>
              </div>
              <p className="retailers__map-hint">
                Karta läggs in här (Google Maps) när gårdsadressen är klar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bli återförsäljare */}
      <section className="section">
        <div className="container">
          <Reveal variant="fade">
            <div className="retailers__cta">
              <div>
                <h2>Vill du sälja vår honung?</h2>
                <p className="lead">
                  Vi samarbetar gärna med butiker, caféer och restauranger som
                  delar vår kärlek till lokalt och genuint. Hör av dig så
                  hittar vi ett upplägg som passar.
                </p>
              </div>
              <div className="retailers__cta-actions">
                <Button to="/kontakt" size="lg">
                  Bli återförsäljare
                </Button>
                <a href={CONTACT.emailHref} className="retailers__cta-mail">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

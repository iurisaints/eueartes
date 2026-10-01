import {
  audiences,
  catalogUrl,
  contacts,
  email,
  instagram,
  materials,
  products,
  timeline,
} from "../data";

export function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-photo"
        src="/media/capa.jpg"
        alt="Poltrona artesanal com almofada floral em um jardim"
        fetchPriority="high"
      />
      <div className="hero-scrim" />
      <div className="hero-copy">
        <h1 className="sr-only">Eu &amp; Artes, móveis artesanais</h1>
        <img
          className="hero-logo"
          src="/media/logo-bege.png"
          alt="Eu & Artes, móveis artesanais"
        />
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="frame about">
      <div className="about-copy">
        <p className="kicker">02 - Quem somos</p>
        <h2>
          Móveis que
          <br />
          respiram natureza
        </h2>
        <p>
          A Eu&amp;Artes é uma empresa de móveis artesanais que desenvolve peças
          autorais para ambientes externos e internos. Nosso trabalho une
          técnicas artesanais, materiais resistentes e possibilidades de
          personalização para criar móveis que conciliam funcionalidade,
          conforto e identidade.
        </p>
      </div>
      <figure className="about-photo">
        <img
          src="/media/about.jpg"
          alt="Detalhe de uma poltrona artesanal em uso, com a trama iluminada pelo sol"
        />
      </figure>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="frame history">
      <div className="history-visual">
        <p className="kicker on-dark">03 - História</p>
        <h2>
          Há mais de
          <br />
          <span>20 anos</span> no
          <br />
          mercado.
        </h2>
        <img src="/media/cadeira-tempo.png" alt="" aria-hidden="true" />
      </div>
      <ol className="history-list">
        {timeline.map((event) => (
          <li key={event.year}>
            <span className="year">{event.year}</span>
            <div className="event-copy">
              <strong>{event.place}</strong>
              <p>{event.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Products() {
  return (
    <div className="frame pieces">
      <header className="section-head">
        <p className="kicker">04 - Peças</p>
        <h2>Móveis e artefatos artesanais.</h2>
      </header>
      <div className="bento">
        {products.map((product) => (
          <article
            key={product.title}
            className={product.tall ? "tile tall" : "tile"}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ objectPosition: product.position }}
            />
            <div className="tile-label">
              <strong>{product.title}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Materials() {
  return (
    <div className="frame materials">
      <header className="section-head">
        <p className="kicker on-dark">05 - Materiais</p>
        <h2>A matéria de cada móvel.</h2>
      </header>
      <div className="mat-grid">
        {materials.map((material) => (
          <figure key={material.name} className={material.tall ? "tall" : undefined}>
            <img
              src={material.image}
              alt={material.name}
              style={{ objectPosition: material.position }}
            />
            <figcaption>{material.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <div className="frame partners">
      <header className="section-head partners-head">
        <p className="kicker">06 - Parceiros e clientes</p>
        <ul className="audience-row">
          {audiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>
      <figure className="partner-stage">
        <img
          src="/media/parc-swing.jpg"
          alt="Balanço artesanal com almofadas em um interior claro"
        />
        <h2>
          Seu projeto
          <br />
          também pode
          <br />
          ser feito à mão.
        </h2>
      </figure>
    </div>
  );
}

export function Contact() {
  return (
    <div className="frame contact">
      <div className="contact-main">
        <p className="kicker on-dark">06 - Contato</p>
        <p className="contact-quote">
          “Com a natureza aprendemos a tramar momentos únicos, trazendo o
          proveito dessa sabedoria ancestral para espaços particulares através
          de móveis artesanais.”
        </p>
      </div>
      <div className="contact-stage">
        <img
          className="contact-chair"
          src="/media/espreguicadeira-contato.png"
          alt=""
          aria-hidden="true"
        />
        <a className="qr-card" href={catalogUrl} target="_blank" rel="noreferrer">
          <img src="/media/qr-verde.png" alt="QR code do catálogo Eu & Artes" />
          <p>Confira o nosso catálogo</p>
        </a>
      </div>
      <div className="contact-bar">
        {contacts.map((person, index) => (
          <div className="contact-row" key={person.name}>
            <div className="contact-who">
              <strong>{person.name}</strong>
              <a href={`tel:+${person.wa}`}>{person.phone}</a>
              <a
                className="wa"
                href={`https://wa.me/${person.wa}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="contact-channel">
              {index === 0 ? (
                <>
                  <strong>E-mail</strong>
                  <a href={`mailto:${email}`}>
                    {email.split("@")[0]}
                    <wbr />@{email.split("@")[1]}
                  </a>
                </>
              ) : (
                <>
                  <strong>Instagram</strong>
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{instagram}
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { pages } from "../data";

export function Chrome() {
  const [active, setActive] = useState("capa");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const layers = Array.from(document.querySelectorAll<HTMLElement>(".layer"));
      const mark = window.innerHeight * 0.4;
      let current = layers[0]?.id ?? "capa";
      for (const layer of layers) {
        if (layer.getBoundingClientRect().top <= mark) current = layer.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header className={`topbar${open ? " open" : ""}`}>
        <a className="brand" href="#capa" onClick={() => setOpen(false)}>
          <img src="/media/logo-menu.png" alt="Eu & Artes" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
        <nav id="site-nav" className="nav-links" aria-label="Seções">
          {pages
            .filter((page) => page.id !== "capa")
            .map((page) => (
              <a
                key={page.id}
                href={`#${page.id}`}
                aria-current={active === page.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {page.label}
              </a>
            ))}
        </nav>
      </header>
      <nav className="dots" aria-label="Índice do cartão">
        {pages.map((page, index) => (
          <a
            key={page.id}
            href={`#${page.id}`}
            aria-current={active === page.id ? "true" : undefined}
            aria-label={page.label}
          >
            <i />
            <span>
              {String(index + 1).padStart(2, "0")} {page.label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}

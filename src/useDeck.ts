import { useEffect } from "react";

export function useDeck() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const sheets = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-sheet]"));

    const mobileQuery = window.matchMedia("(max-width: 980px)");

    let frame = 0;
    const update = () => {
      const list = sheets();
      const vh = window.innerHeight || 1;
      const mobile = mobileQuery.matches;
      list.forEach((sheet, index) => {
        const layer = sheet.closest(".layer");
        const next = layer?.nextElementSibling;
        if (!next) {
          sheet.style.setProperty("--cover", "0");
          return;
        }
        const top = next.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (vh - top) / vh));
        sheet.style.setProperty("--cover", progress.toFixed(4));
        sheet.dataset.index = String(index);
      });

      document.querySelectorAll<HTMLElement>(".frame").forEach((panel) => {
        const layer = panel.closest(".layer");
        if (!layer) return;
        const top = layer.getBoundingClientRect().top;
        const settled = mobile && top > -8 && top < 8;
        panel.classList.toggle("is-settled", settled);
        if (mobile && Math.abs(top) > 28) {
          panel.scrollTop = 0;
          panel.querySelectorAll<HTMLElement>(".history-list").forEach((list) => {
            list.scrollTop = 0;
          });
        }
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

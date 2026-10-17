// Funciones interactivas de la página.
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const backToTop = document.querySelector(".back-to-top");
  const programsSection = document.getElementById("oferta-y-capacitaciones");
  const contactSection = document.getElementById("contacto");

  if (!backToTop || !programsSection || !contactSection) return;

  function updateBackToTop() {
    const shouldShow =
      window.scrollY >= programsSection.offsetTop - 8 &&
      window.scrollY < contactSection.offsetTop;
    backToTop.classList.toggle("is-hidden", !shouldShow);
  }

  backToTop.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  window.addEventListener("resize", updateBackToTop);
  updateBackToTop();
});


function initCardCarousel(selector, interval = 5000) {
  const container = document.querySelector(selector);
  if (!container) return;

  let cards = Array.from(container.querySelectorAll(".card"));
  const zIndexBase = cards.length;

  function setPositions() {
    cards.forEach((card, i) => {
      card.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
      card.style.zIndex = String(zIndexBase - i);

      const offset = window.innerWidth < 640 ? i * 5 : i * 20;
      card.style.transform = `translate(${offset}px, ${offset}px) scale(${1 - i * 0.08})`;
      card.style.opacity = i === 0 ? "1" : "0.9";
    });
  }

  function rotateCards() {
    const first = cards.shift();
    if (!first) return;
    cards.push(first);
    setPositions();
  }

  setPositions();
  setInterval(rotateCards, interval);

  window.addEventListener("resize", setPositions);
}

// Ejecutar automáticamente al cargar
document.addEventListener("DOMContentLoaded", () => {
  initCardCarousel("#carousel");
});

// src/scripts/cardCarousel.ts

export function initCardCarousel(selector: string, interval: number = 3000) {
  const container = document.querySelector(selector);
  if (!container) return;

  let cards = Array.from(container.querySelectorAll<HTMLElement>(".card"));
  const zIndexBase = cards.length;

  function setPositions() {
    cards.forEach((card, i) => {
      card.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
      card.style.zIndex = String(zIndexBase - i);
      card.style.transform = `translate(${i * 20}px, ${i * 20}px) scale(${1 - i * 0.08})`;
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
}

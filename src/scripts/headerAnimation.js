document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const bars = menuBtn.querySelectorAll(".bar");

  menuBtn.addEventListener("click", () => {
    // Mostrar / ocultar menú
    mobileMenu.classList.toggle("translate-y-0");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("-translate-y-full");
    mobileMenu.classList.toggle("opacity-0");

    // Animación hamburguesa → X - CORREGIDA
    bars[0].classList.toggle("rotate-45");
    bars[0].classList.toggle("translate-y-[9px]"); // Ajustado
    bars[1].classList.toggle("opacity-0");
    bars[2].classList.toggle("-rotate-45");
    bars[2].classList.toggle("translate-y-[-12px]"); // Ajustado
  });
});

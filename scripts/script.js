const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".navigation_bar");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
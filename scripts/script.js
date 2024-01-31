const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".navigation_bar");
const body = document.body;

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
    body.classList.toggle("active")
});

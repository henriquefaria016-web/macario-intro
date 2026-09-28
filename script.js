const flash = document.querySelector(".flash");
const finalScreen = document.querySelector(".final-screen");
const airship = document.querySelector(".airship");


// Flash quando o balão passa perto da tela

setTimeout(() => {

  flash.classList.add("active");

}, 3900);


// remove classe depois do flash

setTimeout(() => {

  flash.classList.remove("active");

}, 4600);


// mostra a tela final

setTimeout(() => {

  finalScreen.classList.add("show");

}, 6100);


// opcional:
// depois de alguns segundos pode redirecionar sozinho

/*
setTimeout(() => {

  window.location.href =
    "https://macariobr.shop";

}, 12000);
*/


// evita arrastar imagem

airship.addEventListener(
  "dragstart",
  event => event.preventDefault()
);
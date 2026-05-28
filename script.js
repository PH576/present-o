// script.js

const inicioNamoro =
new Date("2023-09-16T00:00:00");

function atualizarContador(){

  const agora = new Date();

  const diferenca =
  agora - inicioNamoro;

  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferenca / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferenca / (1000 * 60)) % 60
  );

  document.getElementById("tempo")
  .innerHTML =
  `${dias} dias, ${horas}h e ${minutos}min ❤️`;

}

setInterval(atualizarContador, 1000);

atualizarContador();

/* PLAY DESCENDO */

document
.querySelector(".play")
.addEventListener("click", () => {

  document
  .querySelector(".galeria")
  .scrollIntoView({
    behavior: "smooth"
  });

});
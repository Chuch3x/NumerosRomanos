import convertir_a_romano from "./romanos";

const number = document.querySelector("#numero");
const form = document.querySelector("#romano_form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroAromano = Number.parseInt(number.value);
  div.innerHTML = "<p>" + convertir_a_romano(numeroAromano) + "</p>";
});

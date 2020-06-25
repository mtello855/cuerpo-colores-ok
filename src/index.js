import "./styles.css";

const cabeza = document.getElementById("cabeza");
const bIzq = document.getElementById("b-izq");
const pecho = document.getElementById("pecho");
const bDer = document.getElementById("b-der");
const piernas = document.getElementById("piernas");
const pies = document.getElementById("pies");
const colores = document.getElementById("colores");
const enviar = document.getElementById("enviar");

function lala(parteDeCuerpo) {
  console.log(parteDeCuerpo);
  cabeza.style.backgroundColor = "white";
  bIzq.style.backgroundColor = "white";
  pecho.style.backgroundColor = "white";
  bDer.style.backgroundColor = "white";
  piernas.style.backgroundColor = "white";
  pies.style.backgroundColor = "white";

  switch (parteDeCuerpo) {
    case "cabeza":
      cabeza.style.backgroundColor = "red";
      break;
    case "brazo iz":
      bIzq.style.backgroundColor = "blue";
      break;
    case "pecho":
      pecho.style.backgroundColor = "pink";
      break;
    case "brazo der":
      bDer.style.backgroundColor = "green";
      break;
    case "piernas":
      piernas.style.backgroundColor = "orange";
      break;
    case "pies":
      pies.style.backgroundColor = "black";
      break;

    default:
      return "";
  }
}
enviar.addEventListener("click", function() {
  lala(colores.value);
});

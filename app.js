// Expresiones regulares
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valor = input.value;

  let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;

  if (regex.test(valor)) {
    console.log("Valido!");
    console.log(valor);
  } else {
    console.log("No Valido!");
    console.log(valor);
  }
});

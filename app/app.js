/* por medio de estas funciones podemos realizar cualquier operacion basica de matematica
 */
/* perseFloat; me permite tomar el valor que trae getElementById (o trae como string) y convertirlo en numero, de esta manera se puede hacer la operacion */

const suma = document.getElementById("sumar");
suma.addEventListener("click", () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 + valor2;
  document.getElementById("resultado").value = resultado;
});

const resta = document.getElementById("restar");
resta.addEventListener("click", () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 - valor2;
  document.getElementById("resultado").value = resultado;
});

const div = document.getElementById("dividir");
div.addEventListener("click", () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 / valor2;
  document.getElementById("resultado").value = resultado;
});

const multi = document.getElementById("multiplicar");
multi.addEventListener("click", () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 * valor2;
  document.getElementById("resultado").value = resultado;
});

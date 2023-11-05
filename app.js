/* por medio de estas funciones podemos realizar cualquier operacion basica de matematica
 */
/* perseFloat; me permite tomar el valor que trae getElementById (o trae como string) y convertirlo en numero, de esta manera se puede hacer la operacion */

function sumar() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 + valor2;
  document.getElementById("resultado").value = resultado;
}

function restar() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 - valor2;
  document.getElementById("resultado").value = resultado;
}

function dividir() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 / valor2;
  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let resultado = valor1 * valor2;
  document.getElementById("resultado").value = resultado;
}

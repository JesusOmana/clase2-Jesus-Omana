# clase2-Jesus-Omana

INTRODUCCION
Se va a realizar una calculadora con ecuaciones basicas, donde se va a trabajar con
las funciones en Js para resolver las operaciones matematicas, se va aplicar bootstrap, html y js.

++++ Respuestas del primer ejercicio ++++

¿Que es el tercer parámetro recibido?

El tercer parametro recibido seria un callback o funcion de retorno

¿En que casos es obligatorio desarrollar este tipo de funciones?

En donde tenemos que esperar que se ejecute una tarea primero para que esta pueda ejecutarse

por ejemplo, use este codigo para hacer que cuando el cliente rellene el formulario se envie el formulario:

const element = document.querySelector("form");

element.addEventListener("submit", (event) => {
alert(
"Seguro No Pagamos Cooperativa recibio tu formulario, en los proximos minutos uno de nuestros asesores se contactara con usted, gracias por preferirnos"
);
});

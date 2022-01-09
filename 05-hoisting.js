// Hoisting:
// Las variables y las funciones se declaran antes que se procese cualquier
// tipo de código.

// El hoisting solo pasa con versiones pasadas de Javascript (ecmascript 5) hacia abajo, 
// solo sucede con dos cosas que son: var y function 

// A partir de ecmascript6 esto ya no sucede porque usamos const y let

// Ejemplo de como se genera un hoisting:

console.log(miNombre); // Estoy llamando a una variable antes de inicializarla.
var miNombre = "Jose";
// Resultado: undefined 

// Lo que javascript hace es lo siguiente:
var miNombre = undefined;

// ---------------------------------------------------------

// Hoisting con las funciones
var miNombre = "Jose";

hey();

function hey() {
  console.log("Hola " + miNombre);
}

// Resultado: Hola Jose
// Resultado: undefined


hola();

function hola() {
  console.log("Hola " + nombre);
}

var nombre = "Salvador";

// Resultado: Hola undefined
// Resultado: undefined

// Si mando llamar una función antes de declararla si funcionará, porque las funciones siempre se 
// procesan antes, pero las variables tienen que estar inicializadas antes que la función.

// Todas las variables y funciones se declaran al inicio del código.
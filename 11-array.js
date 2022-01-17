// Array 
// Es una estructura de datos
// es un valor que guarda más valores adentro 
// puede haber array dentro de arrays
// Se pueden guardar números, strings y objetos 

// Ejemplo: 
// Este array es una lista de frutas
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
 
console.log(frutas);

// Resultado:
// Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]

console.log(frutas.lenght); // Cuantos elementos tiene este array
// Resultado: 
// 4

console.log(frutas[0]); //el index del array comienza en cero
// Resultado: 
// Manzana

console.log(frutas[2]);
// Resultado: 
// Cereza

/* --------------------------------------------------------------------- */
// Metodo para AGREGAR elementos al FINAL del array

var masFrutas = frutas.push("Uva");

console.log(frutas);
// Resultado:
// Array(5) [ "Manzana", "Plátano", "Cereza", "Fresa", "Uva" ]

/* --------------------------------------------------------------------- */
// Metodo para QUITAR el ULTIMO elemento de array

var ultimo = frutas.pop("Uva");

console.log(frutas);
// Resultado: 
// Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]

/* --------------------------------------------------------------------- */
// Metodo para AGREGAR un nuevo elemento al INICIO del array

var nuevaLongitud = frutas.unshift("Melón")

console.log(frutas);
// Resultado:
// Array(5) [ "Melón", "Manzana", "Plátano", "Cereza", "Fresa" ]

/* --------------------------------------------------------------------- */
// Metodo para ELIMINAR el elemento que esté en el INICIO

var borrarFruta = frutas.shift("Melón");

console.log(frutas);
// Resultado:
// Array(4) [ "Manzana", "Plátano", "Cereza", "Fresa" ]

/* --------------------------------------------------------------------- */
// Metodo para saber la POSICIÓN de un elemento, o el index, (número de lista)

var posicion = frutas.indexOf("Cereza");

console.log(posicion);
// Resultado:
// 2






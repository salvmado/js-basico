// Las funciones son un conjunto de instrucciones que realizaran una tarea.

// 1.- Funciones declarativas

function miFuncion() {
  return 3;
}

miFuncion(); // mando llamar a la función y ejecuta el código

// 2.- Funciones de expresión o función anónima

var miFuncion = function(a,b) {
  return a + b;
}

miFuncion(); // mando llamar a la variable como una función y ejecuta el código.


/* ----------------------------------------------------------------------------- */

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`); // Esto es como una plantilla de strings
}

saludarEstudiante("Salvador"); 
// Resultado: Hola Salvador


function suma(a,b) {
  var resultado = a + b;
  return resultado; // Me regresa el resultado de las instrucciones
}

suma (20, 30); 
// Resultado: 50
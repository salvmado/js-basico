// Condicional if 

// Estructura de un if

if (condición) { // La condición se valida si es verdadera
  // Si se cumple la condición entonces pasa lo que esté aquí dentro
}


/* ------------------------------------------------------------------------*/

if (true) {
  console.log("Hola");
}
// Resultado: Hola

/* ------------------------------------------------------------------------*/

if (false) {
  console.log("Hola");
} else {
  console.log("Soy falso");
}
// Resultado: Soy falso 
// El "else" es como la segunda opción, si no se comple la primera entonces actúa el "else"

/* ------------------------------------------------------------------------*/

if (true) { // si es este
  console.log("Hola");
} else if ("otra opción") { // si no es el anterior, entonces es éste
  console.log("Si no es el primero")
}
else { // si no es ninguno de los anteriores, entonces actúa el "else"
  console.log("Soy falso");
}

/* ------------------------------------------------------------------------*/

var edad = 18;

if(edad === 18) {
  console.log("Esta será tu primera votación.");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo.");
} else {
  console.log("Eres menor de edad, aún no puedes votar.")
}
// Resultado: Esta será tu primera votación. 

/* ------------------------------------------------------------------------*/
// Operador ternario 
// Generar un if y else en una sola línea 

condition ? true : false

// ejemplo: 
var numero = 1;
var resultado = numero === 1 ? "sí soy un 1" : "No soy un 1"
console.log(resultado);
// Resultado: "sí soy un 1"
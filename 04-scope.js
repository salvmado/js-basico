// Scope es el alcance que tiene las variables

// Scope global y scope local

// Las variables que están en global, no pueden acceder a scope local.
// Y lo que está en local sí puede acceder a lo que está en global
// Ejemplo: 

var miNombre = "Salvador";

function nombre() {
  var miApellido = "Macias";
  return miNombre + " " + miApellido;
}

console.log(miApellido);
// Resultado: apellido is not defined
// Esto indica que la variable "miApellido" es scope local
// Fuera de la función no puedo llamar a la variable "miApellido"

//En cambio, mando llamar a la función y esto si lo acepta
nombre();
// Resultado: "Salvador Macias"

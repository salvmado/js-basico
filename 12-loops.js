// Loops o ciclos
// Es hacer que de una forma sencilla una tarea se pueda repetir. 
// Mientras dentro del loop la condición sea verdad, 
// esa tarea se repetirá hasta que deje de serlo.

var estudiantes = ["Salvador", "José", "Sara", "Nancy", "Samuel", "Sofia"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// Resultado:
// Hola, Salvador 
// Hola, José 
// Hola, Sara 
// Hola, Nancy 
// Hola, Samuel 
// Hola, Sofia

/* ----------------------------------------------------------------------------- */
// OTRA FORMA DE UTILIZAR EL LOOP FOR 

var estudiantes = ["Salvador", "José", "Sara", "Nancy", "Samuel", "Sofia"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

// Resultado:
// Hola, Salvador 
// Hola, José 
// Hola, Sara 
// Hola, Nancy 
// Hola, Samuel 
// Hola, Sofia

/* ----------------------------------------------------------------------------- */
// LOOP WHILE

var estudiantes = ["Salvador", "José", "Sara", "Nancy", "Samuel", "Sofia"]; 

function saludarEstudiantes(estudiante) {
 console.log(`Hola, ${estudiante}`);   
}

while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift(); // El shift estará sacando el primer nombre
    saludarEstudiantes(estudiante);
}

// Resultado:
// Hola, Salvador 
// Hola, José 
// Hola, Sara 
// Hola, Nancy 
// Hola, Samuel 
// Hola, Sofia
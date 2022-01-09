
/* -------------------------------------------------------------------------------- */

// Coerciones implicitas 

// El lenguaje nos ayuda y cambia de un tipo de valor a otro, por ejemplo: 
// tengo un valor de tipo numero y lo puedo cambiar a tipo string o al contrario.

var a = 4 + "7";
// Resultado: undefined
typeof a
// Resultado: "string"
a
// Resultado: "47"

// Lo que hace el lenguaje es concatenar el número con el string

var b = 4 * "7";
typeof b
// Resultado: "number"
b
// Resultado: 28

/* -------------------------------------------------------------------------------- */

// Coerciones explicitas

// Nosotros obligamos a que un valor de un tipo cambie a otro tipo

var a = 20;
var b = a + "";

console.log(b);
// Resultado: 20 
typeof b
// Resultado: "string"

var c = String(a);
typeof c
// Resultado: "string"

// Convertí el 20 número en 20 string 

var d = Number(c);
d
// Resultado: 20
typeof d
// Resultado: "number"

// Convertí el 20 string en 20 número


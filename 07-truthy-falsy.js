// Valores: Truthy y Falsy 
// Sirve para ver que tipo de valor es verdadero y que tipo es falso 

/* ----------------------------------------------------------------------- */

// ¿Qué valores por default son FALSOS?

Boolean(); // Si está vacío es falso
false

Boolean(0);
false

Boolean(null);
false

Boolean(NaN);
false

Boolean(undefined);
false

Boolean(false);
false

Boolean(""); // String vacío
false


/* ----------------------------------------------------------------------- */

// ¿Qué valores por default son VERDADEROS?

Boolean(a); // Mínimo con un carácter o un espacio (tener cuidado con los espacio)
true

Boolean(1); // De un uno en adelante
true

Boolean([]); // Array vacío
true

Boolean({}); // Objeto vacío
true

Boolean(function(){}); // Cualquier función es verdadera
true

Boolean(true);
true
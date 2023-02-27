// VARIABLES

var a;  // Declaracion de la variable 'a'

var b = 'b'; // Normalmente declaramos y asignamos al mismo tiempo

b = 'bb'; // Re-asignacion

var a = 'aa'; // Re-declaracion.

// GLOBAL SCOPE

// Cualquier variable en el documento pasará a ser variable global.
// Esto nos dice que las variables deben estar declaradas dentro del documento pero no dentro de un bloque para que estén dentro del Global Scope y puedan ser utilizadas dentro de otros bloques.
// Ejemplo:

var fruit = 'Apple'; // Variable asignada en Global Scope

console.log(fruit + ' afuera de la funcion');

function bestFruit() {
    console.log(fruit + ' adentro de la funcion');
}

bestFruit();


function countries() {
    country = 'Colombia'; // No se define el scope y se toma como Global
    console.log(country);
}

countries();
console.log(country);
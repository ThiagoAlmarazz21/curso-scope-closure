var firstName; // Cuando solamente declaramos una variable se le asigna un valor Undefined.
firstName = 'Thiago'; // Le asignamos el valor que queremos.
console.log(firstName);


var lastName = 'Daniel'; // Declarando y asignando al mismo tiempo.
lastName = 'Nazareno'; // Reasignacion de variable.
console.log(lastName);

var secondName = 'Thiago'; //Declaramos y asignamos el valor, al mismo tiempo
var secondName = 'Daniel'; // Redeclaramos y reasignamos el valor, al mismo tiempo
console.log(secondName);


// LET
// Con let podemos Reasignar valores, pero no podemos Redeclarar.

let fruit = 'Apple'; //Declaramos y asignamos
fruit = 'Kiwi'; // Reasignar
console.log(fruit);

let fruit = 'Banana';


// CONST
// No podemos reasignar ni redeclarar una variable porque son variables constantes, es decir, no van a cambiar su valor en todo el documento. 

const animal = 'Dog'; // Declaramos y asignamos
animal = 'Cat'; // Reasignando
console.log(animal); 

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

















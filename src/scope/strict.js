'use strict'; // Con el uso estricto nos va a saltar un error que dice que la variable que queremos pasar por el .log no está definida.
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());

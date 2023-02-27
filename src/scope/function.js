function greetin() {
    let userName = 'Thiago'; // Asignamos y declaramos nuestra variable
    console.log(userName); // Llamamos nuestra variable 

    if(userName === 'Thiago') {
        console.log(`Hola ${userName}!`);
    }
}

greetin();
console.log(userName); // En este log muestra que la variable no está definida, eso es porque nuestra variable está definida dentro de un funcion, por lo tanto no es una variable de tipo Global sino de tipo Function.
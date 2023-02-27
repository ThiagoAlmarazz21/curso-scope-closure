// Las varaiables de tipo Block, solo pueden ser llamadas dentro de su bloque

// function frutas() {
//   if(true) {
//     var fruta1 = 'Manzana'; // Function Scope
//     let fruta2 = 'Kiwi'; // Block scope
//     const fruta3 = 'Banana'; // Block scope
//   }  
//   console.log(fruta1);
//   console.log(fruta2);
//   console.log(fruta3);
// }
// frutas();

// Si movemos los .logs dentro del bloque, ahora si vamos a poder llamar a nuestras variables.

function frutas() {
    if(true) {
      var fruta1 = 'Manzana'; // Function Scope
      let fruta2 = 'Kiwi'; // Block scope
      const fruta3 = 'Banana'; // Block scope

      console.log(fruta2);
      console.log(fruta3);
    }  
    console.log(fruta1);
  }
  frutas();

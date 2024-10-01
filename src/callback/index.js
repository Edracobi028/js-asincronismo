//Ejemplo 1
function sum(num1, num2){ //Función que se encarga de sumar dos valores
    return num1 + num2;
}

function calc(num1, num2, sumNumbers){ //Llamada al callback
return sumNumbers(num1, num2);
}

console.log(calc(2,2, sum)); //Pasamos los valores


//Ejemplo 2 Una funcion que inicie despues de un cierto tiempo
//setTimeout Recibe funcion + tiempo + argumentos
setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000)//Llamamos a la funcion anonima tras 5 segundos



//Creamos una funcion de saludo que reciba un nobre
function greeting(name){
    console.log(`Hola ${name}`);//usamos comillas francesas para usar una variable
}

setTimeout(greeting, 2000, 'Razo'); //Funcion que recibe otra funcion

// === Play ground Ejecuta un callback con 2s de demora ===

/* 
export function showTime() {
    console.log('Execute myFunc 2s after');
  }
  
execCallback(showTime);

export function execCallback(callback) {
return window.setTimeout(callback,2000);
} 
*/

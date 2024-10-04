//Estructura base para ir entendiendo las promesas
//ahora, en un rato o nunca
//3 estados pendeinte cumplido o rechazado
//  f anonima contiene dos argumentos
const promise = new Promise(function (resolve, reject){
    resolve('hey!')
});

//Crear una promesa, existencia, contarlas, si podemos ordeñarlas y cumplir con requisito

const cows = 15; //asignar el valor de vacas

//Promesa
const countCows = new Promise(function(resolve, reject){
//validar si tenemos 15 vacas podemos tener el acumulado de leche 
    if(cows > 10){
        resolve(`We have ${cows} cows in the farm` );
    } else {
        reject("There isn't no cows on the farm");
    }
});

//Ejecutar la promesa y manejar el resultado ya sea con then y catch
countCows.then((result) => { // cuando hay un error
    console.log(result); //Mostrar en consola el resultado
}).catch( (error) => {
    console.log(error); //Mostrar en consola el error
}).finally( ()=> console.log('Finally'));
//Crear una funcion llamada gen que nos permita controlar un iterador, 
//Nota: usamos un * para identificar la estructura
function* gen() {
    
    yield 1; //Nota: (yield) Palabra reservada para tener estos pasos
    yield 2;
    yield 3;
}

//Utilizarlos y llamar a c/u segun la necesidad
//Crear una variable que utilice la función

const g = gen();
//Nota: (next) Palabra Reservada para ir iterando por cada elemento
console.log(g.next().value); //Traer el 1er elemento
console.log(g.next().value); //Traer el 2do elemento
console.log(g.next().value); //Traer el 3er elemento

//Ejemplo para Iterar con un array
//Creamos una funcion y la llamamos iterate pasandole un array
function* iterate(array) {
    for (let value of array){
        yield value //retornarlo con la logica de yield
    }
}

//Crear una variable llamada it que utilice la función
const it = iterate(['oscar','omar','ana','lucia','juan']);
console.log(it.next().value); //obtener solo el nombre del 1er elemento
console.log(it.next().value); //Traer el 2do elemento
console.log(it.next().value); //Traer el 3er elemento
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



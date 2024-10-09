//Crear una nueva promesa, validar si se cumplio y volver a llamarla flujo sin interrupción

//Crear una función con arrow-function que nos permite retornar la promesa y utilizarla
const fnAsync = ()=> { //Logica de la promesa
    return new Promise ((resolve, reject) => { //Retornar la nueva promesa abriendo una logica con
        (true) //if ternario
            ? setTimeout( () => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });  
}

//Crear una funcion que va a usar el concepto de async y usar await
const anotherFn = async () => { //usa la palabra reservada async
    const varAwait = await fnAsync(); //Creamos una variable donde llamamos la funcion de manera especial con la palabra await para esperarla
    console.log(varAwait); //Muestra en consola lo que resuelve la promesa
    console.log('Hello!'); // Que pasara con este msj ?
}

console.log('Before');
anotherFn() //Ejecutar la funcion
console.log('After');



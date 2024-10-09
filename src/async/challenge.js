import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//async - await con funciones normales
//Crear funcion fetch-data que utiliza la API y retornamos un objeto 
//ir por los datos y esperar la transformacion para retornarlo al usuario
async function fetchData(urlApi) {
    const response = await fetch(urlApi) //variable que traiga data usando await
    const data = await response.json(); //variable para convertir a json usando await
    return data; //Retornar los datos
}

//async - await con arrow function
//Funcion que se encargue de hacer las solicitudes
const anotherFunction = async (urlApi) => {
    try {
        //una serie de variables que va a tener la asignacion de fetch data 
        const products = await fetchData(`${urlApi}/products`); //todos los productos
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);  //producto particular
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`); //categoria del producto particular

        console.log(products);
        console.log(product.title);
        console.log(category.name);
        
    } catch (error) { //pasamos como argumento un error
        console.error(error); //Mostramos el error que reciba
    }
}

//Llamar la funcion que reciba la api
anotherFunction(API);
import fetch from 'node-fetch'; //Llamada al recurso o paquete que instalamos

//Llamado de API, crear variable que haga referencia al recurso en Mayus para referenciar una constante
const API = 'https://api.escuelajs.co/api/v1'; //Referencia al root de nuestra API

//Crear funcion para recibir la URL de tipo promesa Productos, producto en particular y la categoria
function fetchData(urlAPI){
    return fetch(urlAPI); //Retornar la url
}

//Llamar la funcion

// fetchData(`${API}/products`) //Pasamos como argumento url de la API
// .then(response => response.json()) //Transformar la respuesta a un objeto json
// .then( products => { //Nombramos la respuesta como  y Mostrarlos
//     console.log(products);
// }) 
// .then ( () => { //Funcion vacia, para que no traiga nada solo muestre un hola
//     console.log('Hola');
    
// })
// .catch( error => console.log(error));

//Ejercicio con llamado multiple
fetchData(`${API}/products`) //1er solicitud
    .then(response => response.json()) //Transformar lo que estamos recibiendo a un objeto
    .then( products => { //abrimos una funcion
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) //retornar para usar fetchData para obtener un producto en especifico trayendo el id de la 1ra posicion 
    })
    .then(response => response.json())// La que encontró transformarlo en un json
    .then(product => { //con esto ya tenemos un producto
        console.log(product.title);
        return fetchData (`${API}/categories/${product.category.id}`)//Con fetchData Traer la categoria por su id
    })
    .then(response => response.json()) // convertir en un json lo que encontró
    .then(category => { //Ya disponible por el json 
        console.log(category.name);
    })
    .catch(err => console.log(err)) // Mostrar el error
    .finally(() => console.log('Finally'))

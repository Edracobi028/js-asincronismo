//Configurar y preparar nuestro proyecto
//Paso 1. Instalar en consola npm i xmlhttprequest

//Llamada al recurso o paquete que intalamos
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Llamado de API variable que haga referencia al recurso en Mayus para referenciar una constante
const API = 'https://api.escuelajs.co/api/v1'; //Referencia al root de nuestra API


//Crear funcion para recibir la URL, ademas de hacer solicitudes controlar status y mostrar el llamado de forma correcta
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //Crear una variable para llamar xhttp

    //abrir una coleccion de nuestr API Tipo + url + habilitarlo (true/false)  
    xhttp.open('GET', urlApi, true);
    //Escuchar estados de la solicitud
    xhttp.onreadystatechange = function (event) {
        //0= Sin inicializar 1=Enviado 2=Ejecutado 3=(Interactuando) 4=Completado
        if (xhttp.readyState === 4){ //Validar Exactamente el mismo valor y tipo dato si se completo
            if(xhttp.status === 200){ //Validar si el servidor respondio correcto
                callback(null, JSON.parse(xhttp.responseText)); //ultilizar el callback para pasarle 2 valores, nulo y el objeto transformado en objeto
            }else{ //manejo del error
                const error = new Error('Error' + urlApi); //nombre y la url para identificar el error
                return callback(error, null); //error y nulo porque no obtuvimos data
            }
        } 
    }
    //Llamar a http para que se ejecute toda esta logica
    xhttp.send();
};
//Crear funcion de callback recibir la solicitud que nos entrega la API

//Traer todos los productos, un producto en especifico y traer la categoria a la que pertenece y mostrar la información al finalizar las solicitudes
//Llamar la funcion y pasarle el callback, mostrar info y anidar mas solicitudes

fetchData(`${API}/products`, function (error1, data1){ //Traer productos, pasando la url + f anonima con 2 arg (el error o la data)
    if (error1) return console.error(error1); //Si hay un error detener la ejecución retornando el error
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){ //Traer el producto usando data1 su id del 1er elemento del array 
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){ //Traer la categoria usando data2 el id de su categoria asegurandolo con Optional chaining (?) en caso error con atributos del objeto
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        }); 
    });
});

//Crear un Script que nos permita ejecutarlo desde la consola


//Configurar y preparar nuestro proyecto
//Paso 1. Instalar en consola npm i xmlhttprequest

//Llamada al recurso o paquete que intalamos
const XMLHttpRequest = require('xmlhttprequest');

//Llamado de API variable que haga referencia al recurso en Mayus para referenciar una constante
const API = 'https://api.escuelajs.co/api/v1'; //Referencia al root de nuestra API


//Crear funcion para recibir la URL
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
            }

        } else { //manejo del error
            const error = new Error('Error' + urlApi); //nombre y la url para identificar el error
            return callback(error, null); //error y nulo porque no obtuvimos data
        }
    }
    //Llamar a http para que se ejecute toda esta logica
    xhttp.send();
};
//Crear funcion de callback recibir la solicitud que nos entrega la API


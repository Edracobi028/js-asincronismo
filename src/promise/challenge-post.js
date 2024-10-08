import fetch  from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//Solicitud por medio de la consola
function postData(urlApi, data){
    const response = fetch(urlApi,{ //url a conectarse + objeto (config:Tipo de metodo, modo, credenciales, headers, cuerpo)
        //GET = Obtener, POST = enviar, PUT = Actualizar, DELETE = Eliminar 
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',             //Si no hay alguna autenticacion, no pasa nada
        headers:{                              //Cabeceras que vamos a enviar en la solicitud
            'Content-Type': 'application/json' //de tipo json
        },
        body: JSON.stringify(data), //info a transmitir en la API y convertirla a texto
    });
    return response;
}

//La data que queremos registrar
const data = { 
    title: "New Product Course 212",
    price: 212,
    description: "A description",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data) //Llamar la funcion
    .then(response => response.json()) // la respuesta convertirla a json
        .then(data => console.log(data));//mostrar la data que ya fue transformada
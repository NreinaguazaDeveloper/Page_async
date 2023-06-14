const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamamos -- 3 peticiones con 3 datos distintos

const API = 'https://api.escuelajs.co/api/v1'; //llamado a la API

function fechData(urlApi, callback){ //la funcioón nos ayuda a recibir la URL api y rl callback
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlApi, true); //obtenemos la petición, la url y luego le damos el valor de true

    xhttp.onreadystatechange = function (event){ //validar el tipo de estado en que se encuentra
        if(xhttp.readyState === 4){ //Dentro de los estados el 4 significa que se ha completado la llamada
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            };
        }; 
    };

    xhttp.send();
};

fechData(`${API}/products`,function(error1, data1){ //funcion anonima
    if (error1)  return console.error(error1);  //validamos que si ha regresado un error detenga toda ejecuón
         fechData(`${API}/products/${data1[0].id}`, function(error2,data2){ //segunda petición pero del primer elememto del array que trajo la primer petición 
            if (error2) return console.error(error2); //se valida error 2 y que en este caso se presenta en la segunda peticion
        fechData(`${API}/categories/${data2?.category?.id}`,function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
    });     //NO QUEREMOS LLAMAR ELEMENTOS DE LOS PRODUCTOS SINO QUIERO LLAMAR LA CATEGORIA DEL SEGUNDO LLAMADO. usamos la data 2 para llamar dicho valor.
 });

}); 
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'; //Traemos una API, esto es en mayusucula para que no cambie.

function fetchData(urlApi){
    return fetch(urlApi);
};

/*fetchData(`${API}/products`)
    .then(response => response.json()) 
    //Vamos a usar el then para saber que hay en su repsuesta
    .then(products => {
        console.log(products);
    })
    .then(()=>{
        console.log("Hola");
    })
    .catch(error => console.log(error));*/

    //Logíca para hacer varios llamados, llamar a fetch y traer la info consecuente

    fetchData(`${API}/products`)
      .then(response => response.json()) //Esto me permite transformar lo que estamos haciendo a un objeto
       .then(products => {  //lo pasamos con la lógica de una función
        console.log(products); //mostramos todos los productos
          return fetchData(`${API}/products/${products[0].id}`)  //vamos a usarlo para llamar la segunda petición que es llamado del producto
         //como queremos la primer posición, se coloca el 0 en array                                                    
       })
       .then(response => response.json())
       .then(products =>{
        console.log(console.log(products.title)); //aqui se requiere mostrar el titulo del producto que accedimos
        return fetchData(`${API}/categories/${products.category.id}`)
       }) 
       .then(response => response.json())
       .then(category => {
        console.log(category.name);
       })
       .catch(err => console.log(err))
       .finally(()=>console.log('Finalizó'));

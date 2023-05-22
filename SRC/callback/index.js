function sum (num1, num2){
    return num1 + num2;
}

function calc(num1,num2, callback){ //va a recibir como argumento una función
    return callback(num1, num2)
}

console.log(calc(2, 2, sum));

setTimeout(function(){ //Esto tambien entra en la categoría como callback
    console.log('Hola mundo'); 
},3000)
//---

function gretting (name){
    console.log(`Hola${name}`);
}

setTimeout(gretting,2000,'Marco');
const fnAsync =  ()=> {
return new Promise((resolve, reject) =>{
    (true)
        ? setTimeout(()=> resolve('Async!'),2000)
        : reject(new Error('Error!'));
    //hacemos la validación
});
}

const anotherfn = async () =>{
    const somenthing = await fnAsync();
    console.log(somenthing);
console.log('bondia');
}
//función que va a usar el concepto de Async la cual va a hacer el llamado del await

console.log('before');
anotherfn();
console.log('After');

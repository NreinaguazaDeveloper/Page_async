function*gen(){
    yield 1;
    yield 2;
    yield 3;
}

//los llamamos a cada uno de ellos según lo requerimos.

const g = gen();
console.log(g.next().value); //se obtiene el primer valor
console.log(g.next().value); //se obtiene el primer valor
console.log(g.next().value); //se obtiene el primer valor


function* iterate(array){ //usamos for para recorrer los elementos del array
    for(let  value of array){
        yield value
    }

}

const it = iterate(['Oscar', 'Manuel', 'Ana','Juan']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);




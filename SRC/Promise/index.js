const promise = new Promise (function(resolve , reject){
resolve('Hey!') //esto sucede si esta bien todo
});

const cows = 5;

const countCows = new  Promise(function(resolve, reject){

    if(cows > 10){
        resolve(`we have ${cows} cows on the farm`)
    }else {
        reject("there is  no cows the farm")
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error =>{
    console.log(error);
})).finally(()=> console.log('finally'));



export function delay(time, message) {
    return new Promise(function (resolve, reject) {
      window.setTimeout(() => {
        resolve(message);
      }, time);
    });
  }
  
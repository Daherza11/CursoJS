const numbers = [5,33,20,8,123];
let pares = [];
let impares = [];

for(const number of numbers){
    let random = Math.round(Math.random()*10+1);
    const result = number * random;
    
    console.log(`${number} * ${random} = ${result}`)
    if(result % 2 == 0){
        pares.push(result);
    }else{
        impares.push(result);
    }
}

console.log(pares);
console.log(impares);
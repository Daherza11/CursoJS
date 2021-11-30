const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a=parseInt(prompt('Introduzca el primer número'));
let b=parseInt(prompt('Introduzca el segundo número'));
let c=parseInt(prompt('Introduzca el tercer número'));

numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`;

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es: ${a}, ${b}, ${c}`;
    }else{
        result.textContent = `El orden es: ${a}, ${c}, ${b}`;
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es: ${b}, ${a}, ${c}`;
    }else{
        result.textContent = `El orden es: ${b}, ${c}, ${a}`;
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es: ${c}, ${a}, ${b}`;
    }else{
        result.textContent = `El orden es: ${c}, ${b}, ${a}`;
    }
}
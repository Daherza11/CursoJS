let suma = 0;
let cont = 0;

while(suma<50){
    suma += parseInt(prompt('Introduce un número para añadir a la suma'));
    cont++;
}

console.log(`La suma total es de: ${suma}`);
console.log(`El total de números introducidos es: ${cont}`);
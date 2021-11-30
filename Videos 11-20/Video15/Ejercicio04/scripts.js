let n = parseInt(prompt('Introduce un número'));

if(n===1) console.log('El número no es válido.');
let divisores = 0;

for(let i=2; i<n; i++){
    if(n % i == 0){
        console.log(`${n} / ${i} = ${n/i} No es primo.`);
        divisores++;
        break;
    }
}

if(divisores==0) console.log(`${n} es primo`)
let n = parseInt(prompt('Introduce un número'));
let r = 1;

for(let i=n; i>0; i--){
    r *=i;
}

console.log(`El factorial de ${n} es ${r}`);
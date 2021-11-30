const palabra = prompt('Introduce una palabra').toLowerCase();

let consonantes = 0;
let vocales = 0;

for (const letra of palabra){
    if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u'){
        vocales++;
    }else{
        consonantes++;
    }
}

console.log(`Tu palabra: ${palabra}`)
console.log(`Vocales: ${vocales}`)
console.log(`Consonantes: ${consonantes}`)
console.log(`Total de letras: ${palabra.length} letras`)
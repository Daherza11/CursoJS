let numbers=[1,2,3,4,5,1];
console.log(numbers.length);

//Permite evaluar si es Array o no. Booleano.
let number = 4;
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

// console.log(numbers);
// //Eliminar primer elemento del array.
// let deleteElement = numbers.shift();
// console.log(numbers);
// console.log(deleteElement);

// console.log(numbers);
// //Elimina último elemento del array.
// numbers.pop();
// console.log(numbers);


//Añadir elemento al final Array
// console.log(numbers);
// let newLenght = numbers.push(6);
// console.log(numbers);
// console.log(newLenght);

// //Añadir elemento al principio del Array
// let newLenght2 = numbers.unshift(0);
// console.log(numbers);
// console.log(newLenght2);

// console.log(numbers);
// console.log(numbers.indexOf(1)); //Devuelve la primer coincidencia con el valor especificado. -1 si no encuentra.
// console.log(numbers.lastIndexOf(1)); //Devuelve la última coincidencia con el valor especificado. -1 si no encuentra.

// console.log(numbers);
// numbers.reverse(); //Invierte el orden de los elementos del array
// console.log(numbers);

// console.log(numbers);
// let arrayString = numbers.join(' ') //Forma de concatenar los elementos del Array
// console.log(arrayString);

//.splice (a,b,items) Donde inicia. Número de Elementos. (opcional) Elementos a añadir. (opcional)
// console.log(numbers);
// numbers.splice(3); - Elimina dese la posición 3 hasta el final.
//numbers.splice(2,3); //- Elimina desde la posición 2 los valores que se indiquen.
// numbers.splice(2,2,10,23,54); //-Empieza en 2, elimina 2 y pone los nuevos valores.
// numbers.splice(2,0,10,23,54); //- Para no eliminar poner 0 en b.
// console.log(numbers);

// let newNumbers = numbers.slice();
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2);
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2,4);
// console.log(numbers);
// console.log(newNumbers);
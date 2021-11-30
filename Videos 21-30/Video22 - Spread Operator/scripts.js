const numbers = [-12, 2, 3, 23, 43, 2, 3]

// console.log(...numbers)

//Enviar elementos en un Array a una función
function addNumbers(a,b,c){
    return console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd)

//Añadir un array a otro array

let users = ['javier','david','rosa','juan','mercedes']

let newUsers = ['marta','jaime','laura']

users.push(...newUsers)

console.log(users);

//Copiar arrays
let arr1 = [1,2,3,4]
let arr2 = [...arr1] //arr1
console.log(arr2);

//Concatenar arrays
let array1 = [1,2,3,4,5]
let array2= [6,7,8,9]

let arrayConcat = [...array1,...array2]
console.log(arrayConcat);

//Enviar un número indefinido de argumentos a una función (parámetros REST)
function restParms(...numeros){
    return console.log(numeros);
}

restParms(1,2,3,4,5,6,'hola');

//Librería math para sacar max y min
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//Eliminar elementos duplicados en un Array
console.log(new Set(numbers));
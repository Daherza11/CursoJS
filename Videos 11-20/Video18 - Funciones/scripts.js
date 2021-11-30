function saludar(){
    console.log('Hola');
}

saludar();

function saludarUsuario(user){
    console.log(`Hola ${user}`)
}

saludarUsuario('Dani');

const suma = (num1, num2)=>{
    if(num1==2){
        return num1+num2;
    }
    console.log('Esto no se ejecuta si entra el if');
    return num1;
}
console.log(suma(2,3));

const suma1 = (num1,num2)=> num1+num2;
let result= suma1(3,6);

console.log(result);
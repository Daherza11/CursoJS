const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

// if(confirm('¿Acepta?')){
//     console.log('El usuario aceptó');
// }else{
//     console.log('El usuario no aceptó.')
// }

/*Objeto console - Es el objeto que tiene la consola el navegador
    https:/developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir() Cuando salga la línea que no se pueda desplegar y sacar info.
    console.error()
    console.table()
*/

const person ={
    name: 'Daniel',
    age: 23,
    email: 'daherza@gmail.com'
}

console.table(person)

//Objeto location - Es el objeto que contiene la barra de direcciones
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
//location.reload()

//location.href = 'https://google.com'

/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)
    length

    Objeto date
*/

const date = new Date()
console.log(date)

//Timers
button.addEventListener('click',()=>{
    // setTimeout(saludar,3000) //Función externa
    setTimeout(()=>{            //Función interna
        console.log('Adiós');
    },3000)
})

const saludar = ()=>{
    console.log('Hola')
}

let cont = 0

const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 1000);

button.addEventListener('click',()=>{
    clearInterval(interval)
})
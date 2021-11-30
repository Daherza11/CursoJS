const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('box');

button.addEventListener('click',()=>{
    console.log('CLICK!');
})

button.addEventListener('dblclick',()=>{
    console.log('DOBLE CLICK!');
})

box.addEventListener('mouseenter',()=>{
    box.classList.replace('red','green');
})

box.addEventListener('mouseleave',()=>{
    box.classList.replace('green','red');
})

box.addEventListener('mousedown',()=>{
    console.log('PULSASTE LA CAJA');
})

box.addEventListener('mouseup',()=>{
    console.log('SOLTASTE LA CAJA');
})

box.addEventListener('mousemove',()=>{
    console.log('ESTÁS MOVIENDO EL RATÓN EN LA CAJA');
})

input.addEventListener('keydown',()=>{
    console.log('HAS PULSADO UNA TECLA');
})

input.addEventListener('keyup',()=>{
    console.log('HAS SOLTADO UNA TECLA');
})

input.addEventListener('keypress',()=>{
    console.log('ESTÁS PULSANDO UNA TECLA');
})
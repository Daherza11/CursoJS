//id para JS y class para CSS

//Acceder a elemento por su ID
// const title = document.getElementById('title')
// console.log(title)

// title.textContent='DOM Accediendo a nodos'


//Accede al elemento que coincida con selector CSS
// const paragraph = document.querySelector('.paragraph');

// const span = paragraph.querySelector("span");

// console.log(span);

const paragraphs = document.querySelectorAll('.paragraph');

// const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));


paragraphs[0].style.color = 'red';

paragraphsArray.map(p=>p.style.color='green');
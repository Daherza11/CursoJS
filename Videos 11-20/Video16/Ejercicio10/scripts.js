const colors = ['azul','amarillo','rojo','verde','rosa'];

const color = prompt('Introduce un color').toLowerCase();

if(colors.indexOf(color)!==-1){
    console.log('El color se encuentra en el arreglo.')
}else{
    console.log('El color no se encuentra en el arreglo.')
}
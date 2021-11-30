let figure=prompt('Introduce el nombre de la figura que deseas saber el área: Triángulo: 1, Rectángulo: 2, Circulo: 3');

let base;
let altura;
let resultado;
let radio;

switch(figure){
    case '1':
        base=prompt('Base');
        altura=prompt('Altura');
        resultado=(base*altura)/2;
        console.log(`El área del triángulo es: ${resultado}`);
    break;
    case '2':
        base=prompt('Base');
        altura=prompt('Altura');
        resultado=(base*altura);
        console.log(`El área del triángulo es: ${resultado}`);
    break;
    case '3':
        radio=prompt('Radio');
        resultado=Math.PI*Math.pow(radio,2);
        console.log(`El área del triángulo es: ${resultado}`);
    break;
    default: console.log('La figura geométrica no es válida.')
}
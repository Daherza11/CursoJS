let cadena = "Hola Mundo";
console.log(cadena);

//Propiedades
console.log(cadena.length);

//Métodos
let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);


let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);

//Devuelve la primera coincidencia
let cadenaIndex = cadena.indexOf('m')
console.log(cadenaIndex) 

let cadenaReplace = cadena.replace('Mundo','YouTube');
console.log(cadenaReplace);

console.log(cadena.substring(3));
console.log(cadena.substring(3,7));

console.log(cadena.slice(3));
console.log(cadena.slice(-3));
console.log(cadena.slice(0,-2));

let cadena2="Hola YouTube, estamos trabajando con cadenas";
console.log(cadena2.trim());

//Desde dónde empieza
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));

console.log(cadena.startsWith("M",5));

//Desde dónde termina
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a",4));
console.log(cadena.endsWith("n",8));
console.log(cadena.endsWith("Mundo"));

//Includes lo mismo que indexOf pero regresa booleano
console.log(cadena.includes('n'));
console.log(cadena.includes("a",5));
console.log(cadena.includes("a",2));

//Repite el string

let cadena3='Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(5));


//Template Strings
let nombre = 'Juan';
let apellido = 'Gómez';
let edad = 20;

console.log("Hola "+nombre+ " "+apellido+" tienes "+edad+" años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`)

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`)
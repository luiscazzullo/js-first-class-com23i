//Declarando una variable
let hola;
//Asignación
hola = 20;

let gaseosas = 30;

let galletas = 40;

let totalItems = gaseosas + galletas; //camelCase
console.log(totalItems);

/* 
  - No puede comenzar con número.
  - No puede llevar guión medio
  - No puede tener espacios
*/

/* TIPOS DE DATOS */

/* Primitivos */

/* Números */
let primero = 1000000;
let floats = 1.15;
console.log(primero);
console.log(floats);
console.log(primero + floats);
console.log(primero - floats);
console.log(primero * floats);
console.log(primero / floats);
console.log(primero**2);

//Carrito de compras
let priceWine = 200.3;
let totalWine = 3;
let totalPrice = priceWine * 100 * totalWine / 100;
console.log(totalPrice);

// Strings o Cadenas de texto
let firstString = "My first string";
let secondString = 'My second string';
let thirdString = `My third string`;

let masComun = 'Es más común usar comillas simples';

let apostrofe = "D'alessandro";

console.log(firstString + ' ' + secondString); //Concatenación
console.log(`${firstString} ${thirdString} ${primero}`); //Interpolación de variables
console.log(thirdString);

//Boolean
let isTrue = true;
let isFalse = false;

//Null
let iAmNull = null;

//Undefined;
let iAmUndefined;
console.log(iAmUndefined);

//Symbol & BigInt


//Debilmente tipado
let debilTipado = 'Hola mundo';
debilTipado = 30;
debilTipado = true;
debilTipado = 'Otra string';
console.log(debilTipado);

let otraVariable;
otraVariable = false;

//Inmutables
let bar = 'bar';
console.log('Bar inmutable ===>', bar);
let barMayus = bar.toUpperCase(); //'BAR'
console.log('Bar mayusculas ===>', barMayus);
console.log('Bar después de la función', bar);
bar = 'bar2';
console.log('Bar después de la función', bar);

//Pregunta de entrevista técnica
//Los valores primitivos no se copian por referencia sino por el valor que almacenan;

let rolling = 20;
let code = rolling;
rolling = 'code string';
console.log('RESPUESTA DEFINITIVA ===>', code);

let a = 20;
let b = a;
a = 25;


/* Objetos o Compuestos o Datos no primitivos */
let corolla = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020
};

let corolla2 = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020
};

//IMPORTANTE. Copian y almacenan por referencia.

//Dato primitivo => Creamos la variable => almacenamos el valor 'hola mundo' en la memoria del navegador. La memoria se conoce como Memory Heap.

//let variable = 1; variable será asignado en el espacio A2.

//Dato no primitivo => creamos el objeto => se almacena en Call Stack B 33.
//Memory Heap A3 (corolla) = B33. 

//Call Stack
/*
B33 => {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020
}
*/

//Memory HEAP
//A4 (text1) = 'texto'
//A5 (text2) = 'texto'
//A3 => B33
//A2 (corolla2) => B34

/*
  B33 == B34 //false
*/




let text1 = 'texto';
let text2 = 'texto';

//Array, Listas o Vectores

let menuItems = ['pase sanitario', 'politica', 'policiales'];
let arrayDisorder = [1, true, corolla, false, 'hola mundo'];

//let shoppingCart = [objeto1, objeto2, objeto3];

//FUNCIONES o METODOS: STRING
let myStr = 'Hola Mundo';
console.log('MINUSCULAS ===>', myStr.toLowerCase());
console.log('MAYUSCULAS ===>', myStr.toUpperCase());
console.log('CANTIDAD CARACTERES ===>', myStr.length);
console.log('PRIMER CARACTER', myStr.charAt(myStr.length - 1));
console.log('ULTIMO CARACTER CON OTRA FUNCION', myStr[myStr.length - 1]);
console.log('QUIERO MOSTRAR HOLA ===>', myStr.substr(5, 7));
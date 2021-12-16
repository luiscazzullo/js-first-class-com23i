//BUCLES o LOOPS

//FOR
//Inicialización de variable
//Condición de salida
//Incremental o Incrementación de la variable
console.log('Hola mundo');

/* for(let i = 0; i < 10; i++) {
  console.log(i * 20);
} */

/* 
const list = [1, 2, 3, 4, 5];
console.log('Cuántos elementos tiene una array', list.length);
console.log(list[list.length - 1]);
let sum = 0;
for(let i = 0; i < list.length; i++) {
  console.log('El valor de i', i)
  console.log('Imprimir el valor de la array en la posición de i', list[i]);
  sum = sum + list[i]; 
  console.log('Valor de la suma', sum);
} */

/* for(let i = 0; i < 10000000000000000; i++) {

} */

for(let i = 10; i > 0; i--) {
  console.log(i);
}

const shoppingCart = [
  { name: 'Play 5', price: 10000 },
  { name: 'Pantalon', price: 2000 },
  { name: 'Celular', price: 5000 }
]

let totalPrice = 0;
for(let i = 0; i < shoppingCart.length; i++) {
  //totalPrice = totalPrice + shoppingCart[i].price;
  totalPrice += shoppingCart[i].price;
  console.log(totalPrice);
}

let obj1 = {
  name: 'pepito',
  edad: 10
}

console.log(obj1.edad);

//Ejercicio típico de las entrevistas
//Fizzbuzz
//Numero multiples de 3 = fizz
// Numeros multiples de 5 = buzz
//Numeros multiples de 5 y 3 = fizzbuzz

for(let i = 1; i < 100; i++) {
  //Operadores lógicos
  //&& => and => Espera que las dos condiciones o más que cumplamos sean más
  //|| => or => Espera 
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if(i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  }else {
    console.log(i);
  }
}

if (2 < 1) {
  console.log('Entro en el bloque del true');
} else {
  console.log('Entro en el bloque del false');
}

/*
OPERADORES PARA COMPARACIONES
! negado
< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
!= distinto de
!== estrictamente distinto de
== igual a
=== estrictamente igual
*/

/*
COERCION EXPLÍCITA

String()
Number() - parseInt()
Boolean()
*/

/* let userAge = Number(prompt('Ingrese su edad'));

console.log('Tipo de dato ===>', typeof userAge);
console.log('Valor de userAge ==>', userAge)

if(userAge >= 18) {
  alert('Usted puede ingresar a la página');
} else {
  alert('Es menor de edad, no tiene permisos');
}
 */

//COMPARACIONES & COMPARACIONES ESTRICTAS
console.log('Comparación debil', 2 == 2);
console.log('Comparación debil', 2 == '2');

console.log('Comparación estricta', 2 === '2');

console.log('Desigualdad debil ==>', 2 != '2');
console.log('Desigualdad estricta ==>', 2 !== '2');


//CONDICIONALES II: TRUTHY & FALSY


/* let nameLuis;
console.log(nameLuis);

//Si existe la variable nameLuis
if (0) {
  alert('Existe el name');
} else {
  //Hay algunos valores en Javascript que automáticamente se leen como false.
  alert('No existe el nombre');
} */

//Falsy Values => undefined, null, 0, '', false, NaN
//Truthy => Son todos el resto de valores y se entienden como true


// Ejercicio: if, else if, else

/* let num = Number(prompt('Ingrese un número'));
let num2 = Number(prompt('Ingrese otro número'));

if (num > num2) {
  alert(`El primer número ${num} es mayor que el segundo`);
} else if(num === num2) {
  alert('Ambos números son iguales');
} else {
  alert(`El segundo número ${num2} es mayor que el primero`);
}

if(2 !== 2) {
  alert('Dentro del if');
}

console.log('Ejecutandose después del if individual'); */

//Ejercicio: Signos del zodíaco

/* let signo = prompt('Ingrese su signo'); */

/* if(signo === 'escorpio') {
  alert('Hoy tendrás un gran día');
} else if (signo === 'capricornio') {
  alert('Hoy respirarás');
} else if (signo === 'tauro') {
  alert('Hoy será un mal día')
} else if (signo === 'libra') {
  alert('Otra frase genérica')
} */

//Switch
/* switch(signo) {
  case 'escorpio':
    alert('Hoy será un gran día');
    break;
  case 'libra':
    alert('LA vida te sonreirá');
    break;
  case 'acuario':
    alert('Te espera una sorpresa');
    break;
  case 'tauro':
    alert('Hola mundo desde tauro');
    break;
  default:
    alert('El signo ingresado no existe');
} */

/* ANIDAR IF'S */

let number = 48;

//Operador de resto
if(number % 2 === 0) {
  console.log('El número es par');
  if(number > 50) {
    console.log('Número mayor a 50');
  } else {
    console.log('El número es menor a 50');
  }
} else {
  console.log('Número impar');
}

/*SWITCH CONDICIONALES */
/* let otherNumber = 4;

switch(true) {
  case (otherNumber < 5): {
    alert('El número es demasiado bajo');
    break;
  }
  case (otherNumber < 10): {
    alert('El número es muy bajo');
    break;
  }
  case (otherNumber > 100): {
    alert('El número es muy alto');
    break;
  }
  default:
    alert('Número no reconocido');
} */

/* EJERCICIO GRUPAL */
let word = prompt('Ingrese una primera palabra');
let word2 = prompt('Ingrese una segunda palabra');

if (word.length > word2.length) {
  alert('La primera palabra tiene más caracteres');
} else if (word.length === word2.length) {
  alert('Ambas palabras tienen la misma cantidad de caracteres');
} else {
  alert('La segunda palabra tiene más caracteres');
}
"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if(texto1 > texto2){
    alert("La primer palabra ingresada es mayor");
}else{
    alert("La segunda palabra ingresada es mayor");
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

if (copiaTexto1 === texto1){
    alert("La variable copiaTexto1 es igual a la primer palabra ingresada");
}

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if(copiaTexto1 != texto2){
    alert("La copiaTexto1 es distinta a texto2");
}

"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.


const a=prompt("Ingrese un numero");
const b=prompt("Ingrese otro numero");
let dif = (a-b);
if(dif > 0){
    alert("El resultado de la diferencia es Positivo");
}else{
    alert("El resultado de la diferencia es Negativo");
}
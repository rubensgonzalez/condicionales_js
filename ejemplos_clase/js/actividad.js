"use strict"
//Actividad de la clase de condicionales:

// 1 - usar prompt para consultar la
// de la persona

// 2- Imprir con console la edad en consola

// 3- Validad si la persona es mayor o igual a
// 18 años

// 4 - Si la persona cumple con la condicion
// imprimir con console un mensaje en consola
// ej: "edad minima alcanzada"

// 5 - sino (else) imprimir una alerta
// que indique al usuario que no puede
// ingresar a la página
// ej: edad minima no alcanza
// ej: no autorizado para ingresar

// 6 - Compartir en discord la implementacion



let edad = prompt("Ingrese su edad");
console.log(edad);

if (edad >= 18){
    console.log("edad minima alcanzada");
} else {
    alert(" Edad minima no alcanzada");
}
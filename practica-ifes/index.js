/*
if.
if ( condition ) {

}


if else.
if ( condition ) {

} else {

}


else if.
if ( condition ) {

} else if ( condition ) {

} else {

}

if anidado.
if ( condition ) {
    if ( condition ) {
        if ( condition ) {

        } else {

        }
    } else {

    }
} else {

}

switch.
const value = prompt( 'ingrese un valor' ); // Valor ingresado por el usuario.
switch ( value ) {
    case 10:

        break;

    case 15:

        break;

    case 20:

        break;
    default: // else.
        break;
}

Consigna 1:
Determinar el nombre del día de la semana según un número ingresado por el usuario (1 para lunes, 2 para martes, etc.).

Consigna 2:
Determinar si un año es bisiesto o no. Pide al usuario que ingrese un año y muestra el resultado.

Consigna 3:
Determinar la clasificación de un estudiante según su puntaje en un examen. Pide al usuario que ingrese su puntaje y muestra la clasificación: Sobresaliente, Aprobado o No Aprobado.

Consigna 4:
Determinar si un número es positivo, negativo o cero. Pide al usuario que ingrese un número y muestra el resultado.

Consigna 5:
Modifica el programa anterior para agregar una condición adicional. Si el número es positivo, verifica si es par o impar.

*/

// Consigna 1:
// Determinar el nombre del día de la semana según un número ingresado por el usuario (1 para lunes, 2 para martes, etc.).
let diaEnNumero = prompt( 'Ingrese un número de dia de semana (del 1 al 7)', 1 );
let diaEnTexto = '';

diaEnNumero = parseInt( diaEnNumero );

switch ( diaEnNumero ) {
    case 1:
        diaEnTexto = 'Es lunes';
        break;

    case 2:
        diaEnTexto = 'Es martes';
        break;

    case 3:
        diaEnTexto = 'Es miércoles';
        break;

    case 4:
        diaEnTexto = 'Es jueves';
        break;

    case 5:
        diaEnTexto = 'Es viernes';
        break;

    case 6:
        diaEnTexto = 'Es sábado';
        break;

    case 7:
        diaEnTexto = 'Es domingo';
        break;
    default:
        diaEnTexto = 'El número ingresado es inválido.';
        break;
}

console.log( diaEnTexto );

// Consigna 2:
// Determinar si un año es bisiesto o no. Pide al usuario que ingrese un año y muestra el resultado.
let anio = prompt( 'Ingrese un año', 2024 );

if ( ( ( anio % 4 == 0 ) && ( anio % 100 != 0 ) ) || anio % 400 == 0 ) {
    console.log( `el ${anio} es bisiesto` );
} else {
    console.log( `el ${anio} no es bisiesto` );
}

// Consigna 3:
// Determinar la clasificación de un estudiante según su puntaje en un examen. 
// Pide al usuario que ingrese su puntaje y muestra la clasificación: Sobresaliente, Aprobado o No Aprobado.
let clasificacionNumero = prompt( 'Ingrese su calificación', 10 );
let clasificacionTexto = '';

clasificacionNumero = parseInt( clasificacionNumero );

if ( clasificacionNumero == 10 ) {
    clasificacionTexto = 'Su calificación es sobresaliente.';
} else if ( clasificacionNumero <= 9 && clasificacionNumero >= 6 ) {
    clasificacionTexto = 'Su calificación es aprobado.';
} else if ( clasificacionNumero <= 5 && clasificacionNumero >= 0 ) {
    clasificacionTexto = 'Su calificación es no aprobado.';
} else {
    clasificacionTexto = 'Su calificación no es válida.';
}

console.log( clasificacionTexto );

// Consigna 4 y 5:
// 4 Determinar si un número es positivo, negativo o cero. Pide al usuario que ingrese un número y muestra el resultado.
// 5 Modifica el programa anterior para agregar una condición adicional. Si el número es positivo, verifica si es par o impar.
let numero = prompt( 'Ingrese un número', 10 );
let respuesta = '';

numero = parseInt( numero );

if ( numero > 0 ) {
    respuesta = `${numero} es un número positivo`;
    if ( numero % 2 == 0 ) {
        respuesta = respuesta + ' y par.';
    } else {
        respuesta = respuesta + ' e impar.';
    }
} else if ( numero < 0 ) {
    respuesta = `${numero} es un número negativo.`;
} else {
    respuesta = `${numero} es el número 0.`;
}

console.log( respuesta );

/**

Ej 22
A partir de un texto dado, separar las palabras en un array y mostrarlas en pantalla (una por cada línea).

22.1 Hacerlo con for simple

"auto lapiz teclado casa"

1. recorrer el texto.
2. Separar cada palabra, para esto, concatenamos las letras hasta encontrar un espacio.
3. Por cada palabra detectada la guardamos en un array.
4. Para mostrarlo recorremos el array para mosrtar cada palbra en pantalla.

*/
console.log( '-- Con for ------------' );

const texto = 'auto lapiz teclado   casa ';
let palabra = '';
let arrayDePalabras = [];

for ( let i = 0; i < texto.length; i++ ) {
    if ( texto[i] == ' ' ) {
        if ( palabra != '' ) {
            arrayDePalabras.push( palabra );
        }

        palabra = '';
    } else if ( i == texto.length - 1 ) {
        palabra = palabra + texto[i];
        arrayDePalabras.push( palabra );
    } else {
        palabra = palabra + texto[i];
    }
}

// for ( let i = 0; i < arrayDePalabras.length; i++ ) {
//     console.log( arrayDePalabras[i] );
// }

// arrayDePalabras.forEach( ( p ) => {
//     console.log( p );
// } );

for ( pal in arrayDePalabras ) {
    console.log( arrayDePalabras[pal] );
}


// 22.1 Hacerlo con split
console.log( '-- Con split ------------' );
const texto2 = 'auto lapiz    teclado casa';

// .filter() Omite los valores falsos: false, 0, NaN, null, undefined, "".
const arrayDePalabras2 = texto2.split( ' ' ).filter( Boolean );

for ( let i = 0; i < arrayDePalabras2.length; i++ ) {
    console.log( arrayDePalabras2[i] );
}



// 22.1 Hacerlo con subString
/**
1. Recortar con substring del 0 hasta el espacio.
2. Recortar del último espacio usado hasta el próximo espacio.

*/
const texto3 = 'auto lapiz teclado casa';
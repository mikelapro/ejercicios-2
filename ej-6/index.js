// https://www.arkaitzgarro.com/javascript/capitulo-18.html

//51585939K
//23568860R

const dniEntero = prompt( 'Ingrese su número de DNI', '51585939k' );
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

console.log( dniEntero );

let letraDni = dniEntero.substring( letras.length -1, letras.length );
const numeroDni = parseInt( dniEntero.substring( 0, letras.length -1 ) );

letraDni = letraDni.toUpperCase();

console.log( letraDni );
console.log( numeroDni );

if ( numeroDni < 0 || numeroDni > 99999999 ) {
    document.write( 'El número no es válido.' );
} else {
    const letraSeleccionada = numeroDni % 23;
    const letraCorrespondiente = letras[letraSeleccionada];

    if ( letraDni != letraCorrespondiente ) {
        document.write( 'La letra indicada no es correcta.' );
    } else {
        document.write( 'El número y la letra de DNI son correctos.' );

    }
}

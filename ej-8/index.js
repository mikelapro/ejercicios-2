const numero = prompt( 'Ingrese un número', 5 );
let texto;

const parOImpar = ( numero ) => {
    if ( numero % 2 == 0 ) {
        texto = 'El número ingresado es par.';
    } else {
        texto = 'El número ingresado es impar.';
    }

    return texto;
}

document.write( parOImpar( numero ) );

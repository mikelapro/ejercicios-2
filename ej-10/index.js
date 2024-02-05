const texto = prompt( 'Ingrese un texto', 'La ruta nos aporto otro paso natural' );

let texto1 = texto.replaceAll( ' ', '' );
texto1 = texto1.toLowerCase();

let info;

const verificarSiEsPalindrimo = ( texto1, texto2 ) => {
    if ( texto1 == texto2 ) {
        info = 'Este texto es un palíndromo.';
    } else {
        info = 'Este texto no es un palíndromo.';
    }

    return info;
};

const getTextoInvertido = ( textoAInvertir ) => {
    let textoInvertido = '';

    for ( let i = textoAInvertir.length - 1; i >= 0; i-- ) {
        textoInvertido = textoInvertido + textoAInvertir[i];
    }

    return textoInvertido;
};

const texto2 = getTextoInvertido( texto1 );

const respuesta = verificarSiEsPalindrimo( texto1, texto2 )
document.write( respuesta );

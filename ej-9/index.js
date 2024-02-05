const texto = prompt( 'Ingrese un texto', '123' );
let info;

const getInfo = ( texto ) => {
    if ( texto == texto.toUpperCase() ) {
        info = 'Tiene solo mayúsculas (y/o números)';
    } else if ( texto == texto.toLowerCase() ) {
        info = 'Tiene solo minúsculas (y/o números)';
    } else {
        info = 'Tiene minusculas y mayúsculas (y/o números)';
    }

    return info;
}

document.write( getInfo( texto ) );

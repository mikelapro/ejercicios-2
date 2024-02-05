const divRaton = document.querySelector( '#raton' );
const ratonCoordNav = document.querySelector( '#raton-coord-nav' );
const ratonCoordPag = document.querySelector( '#raton-coord-pag' );
const divTeclado = document.querySelector( '#teclado' );
const tecladoChar = document.querySelector( '#teclado-char' );
const tecladoCode = document.querySelector( '#teclado-code' );

divRaton.addEventListener( 'click', ( e ) => {
    ratonCoordNav.innerHTML = `Navegador[${e.x}, ${e.y}]`;
    ratonCoordPag.innerHTML = 'Rb';

    console.log( e );
} );

// divTeclado.addEventListener( 'click', ( e ) => {
//     tecladoChar.innerHTML = 'Ta';
//     tecladoCode.innerHTML = 'Tb';

//     console.log( e );
// } );

addEventListener( 'keypress', ( e ) => {
    tecladoChar.innerHTML = `Carácter[${e.key}]`;
    tecladoCode.innerHTML = `Código[${e.keyCode}]`;

    console.log( e );
} );

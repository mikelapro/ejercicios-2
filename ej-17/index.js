const link1 = document.querySelector( '#link-1' );
const p1 = document.querySelector( '#p-1' );
const link2 = document.querySelector( '#link-2' );
const p2 = document.querySelector( '#p-2' );
const link3 = document.querySelector( '#link-3' );
const p3 = document.querySelector( '#p-3' );


// link1.addEventListener( 'click', () => {
//     if ( window.getComputedStyle( p1 ).display != 'none' ) {
//         link1.innerHTML = 'Mostrar contenidos';
//         p1.style.display = 'none';
//     } else {
//         link1.innerHTML = 'Ocultar contenidos';
//         p1.style.display = 'block';
//     }
// } );

// link1.addEventListener( 'click', () => {
//     if ( p1.style.display == 'none' ) {
//         // Si está oculto.
//         link1.innerHTML = 'Ocultar contenidos';
//         p1.style.display = 'block';
//     } else {
//         // Si no está oculo.
//         link1.innerHTML = 'Mostrar contenidos';
//         p1.style.display = 'none';
//     }
// } );

const togleContentView = ( contentElement, linkElement ) => {
    if ( contentElement.style.display == 'none' ) {
        // Si está oculto.
        linkElement.innerHTML = 'Ocultar contenidos';
        contentElement.style.display = 'block';
    } else {
        // Si no está oculo.
        linkElement.innerHTML = 'Mostrar contenidos';
        contentElement.style.display = 'none';
    }
};

link1.addEventListener( 'click', () => {
    togleContentView( p1, link1 );
} );

link2.addEventListener( 'click', () => {
    togleContentView( p2, link2 );
} );

link3.addEventListener( 'click', () => {
    togleContentView( p3, link3 );
} );

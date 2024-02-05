/**
 Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función 
 Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos
 de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de
 apariciones de dicha suma, repitiendo 36.000 veces esta operación.
 */

let miArray = [];

const tirarDados = () => {
    let num1 = parseInt( Math.floor( Math.random() * 6 ) + 1 );
    let num2 = parseInt( Math.floor( Math.random() * 6 ) + 1 );

    let resultado = num1 + num2;

    return resultado;
};

for ( let i = 0; i < 5; i++ ) {
    miArray.push( tirarDados() );
}

console.log( miArray );

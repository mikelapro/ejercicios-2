
class Persona {
    nombre;
    edad;
    genero;

    constructor( nombre, edad, genero = 'F' ) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    getDetalles() {
        let detalles = `Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}`;

        return detalles;
    };
}

class Estudiante extends Persona {
    grado;
    colegio;

    constructor( nombre, edad, genero = 'F', curso, colegio ) {
        super( nombre, edad, genero );
        this.curso = curso;
        this.colegio = colegio;
    }

    getDetalles() {

        let detalles = `${super.getDetalles()}, curso: ${this.curso}, colegio: ${this.colegio}`;

        return detalles;
    };
}

class Profesor extends Persona {
    materia;
    nivel;

    constructor( nombre, edad, genero = 'F', materia, nivel ) {
        super( nombre, edad, genero );
        this.materia = materia;
        this.nivel = nivel;
    }

    getDetalles() {

        let detalles = `${super.getDetalles()}, materia: ${this.materia}, nivel: ${this.nivel}`;

        return detalles;
    };
}

const mike = new Persona( 'Mikaela', 12 );
console.log( mike.getDetalles() );

const estudianteMike = new Estudiante( 'Mikaela', 12, 'F', '7A', 'Euskal Echea' );
console.log( estudianteMike.getDetalles() );

const profesorRuben = new Profesor( 'Rubén', 42, 'M', 'Matemática', '7A' );
console.log( profesorRuben.getDetalles() );

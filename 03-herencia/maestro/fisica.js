const {Maestro} = require('./maestro')

class Fisica extends Maestro{
    constructor(nombre, edad, materia, escuela, alumno, laboratorio){
        console.log(`se inicializo el maestro..empezando a construirlo con: ${nombre}, ${edad}`);
        super(nombre, edad, materia, escuela, alumno);
        this.laboratorio = laboratorio;
    }

};

let alumno1 = [8,10,10,9,9];

const hugo =  new Fisica('hugo', 23, 'Fisica','algo', alumno1, 'A2');

console.log(hugo.promedio());
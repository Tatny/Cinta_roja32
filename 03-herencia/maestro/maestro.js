class Maestro {
    constructor(nombre, edad, materia, escuela, alumno) {
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia;
        this.escuela = escuela;
        this.alumno = alumno;
    }
    promedio() {
        let suma = 0 
        for (let i=0; i< this.alumno.length; i++){
            suma += this.alumno[i]
            
        }
        let promedio = suma / this.alumno.length
        return promedio
    }

};

module.exports ={
    Maestro
}

let alumno1 = [8,10,10,9,8]
const Ella = new Maestro('Tatny', 29, 'general', 'algo', alumno1)

console.log(Ella.promedio())
const { Pelicula } = require('./pelicula')
    


const { Documental } = require('./documental')
    


class Cine {
    constructor(sala) {
        this.sala = sala
    

    }




    reproducir(Largoometraje){
        console.log(`se esta reproduciendo ...${Largoometraje.getTitle()} en la ${this.sala}`)
    }
}
 const batman = new Pelicula('Batman', '123min', 'accion')

 const cosmos = new Documental('cosmos', '90min', 'Eichi M')

 const cineteca = new Cine ('sala IMAX');

 cineteca.reproducir(batman)


 
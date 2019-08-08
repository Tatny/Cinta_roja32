const {Largometraje} = require ('./largometraje')

class Pelicula extends Largometraje{
    constructor(title, duracion, genero){
    super(title, duracion)
    this.genero = genero;
    }

    getGenero(){
        return this.genero
    }

}

module.exports ={
    Pelicula
}
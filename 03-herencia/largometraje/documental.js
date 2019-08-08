const {Largometraje} = require('./largometraje')

class Documental extends Largometraje{
    constructor(title, duracion, director){
        super(title, duracion)
        this.director = director;
    }

    getDirector (){
        return this.director
    }
};
 
 module.exports ={
    Documental
}
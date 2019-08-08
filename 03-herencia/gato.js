const {Mascota} = require('./mascota.js')

class gato extends Mascota{
    constructor(nombre, patas, vidas){
        super(nombre, patas, vidas)
        console.log('se ha creado un gato')
        this.vidas = vidas
        this.estasPatas = patas
    }

    getVidas(){
        return this.vidas
    }
}
const Robin =  new gato ('Robin', 4, 9 )

console.log (Robin)
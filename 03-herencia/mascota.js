class Mascota{
    constructor(patas, cola, edad, raza, velocidad, nombre ){
        this.estasPatas = patas;
        this.cola= cola;
        this.edad =  edad;
        this.raza =  raza;
        this.velocidad = velocidad;
        this.nombre = nombre;
    }
    comer(){
        return `Estoy Comiendo un ${comida}`
    }
    emitirSonido(){
        return  `Mi nombre es ${this.nombre}`
    }
    moverse(){
            return ` Estoy moviendome a ${this.velocidad} Km/h`
    }
    dormir(){
        return ` ZzZZzZ`

    }
};

module.exports ={
    Mascota
}
console.log('hola')
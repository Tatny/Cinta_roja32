// class Perro{
//     constructor(color, raza, tamano, velocidad) {
//         this.color = color;
//         this.raza =  raza;
//         this.tamano =  tamano;
//         this.velocidad = velocidad;
//     }

//     ladrar(){
//         return 'ladro'
//     }
//     correr(){
//         return 'corretendo'
//     }

//     comer(comida){
//         return 'estoy comiendo...${comida}'
//     }

    
// };

// const snoopy = new Perro ('blanco', 'beagle', 80, 115)

// console.log(snoopy)

// function mifuncion(msg, msg2){
//     console.log (`este es ${msg2} mi mensaje ${msg}`)
// }
// console.log(mifuncion)

// class Pinguino{
//     constructor(name, origin, creator,  place){
//         this.name = Opus;
//         this.origin = BloomCounty;
//         this.creator = BerkeleyBreathed;
//         this.place = FalklandIslands;
//     }
// };

// const P =  new Pinguino ('mi nombre es ${name}')

let array1 = ['8', '9', '10', '9', '9'];
console.log(array1[2]);

let suma = array1.reduce((previous, current) => current += previous);
let avg = suma / array1.length;

console.log(avg)
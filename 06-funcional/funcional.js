///MAP

// const numeros =[1,2,3,4,23,412,12,23,523]
// const nuevosNumeros = [];

// for (let i=0; i<numeros.length; i++){
//     nuevosNumeros.push(numeros[i]*2)
// }
// console.log(nuevosNumeros)
// console.log(numeros)

///funcional

// const numeros =[1,2,3,4,23,412,12,23,523]

// // const multiplicaPor2 = () =>{
// //     const nuevosNumeros = [];
// //     for (let i=0; i<numeros.length; i++){
// //             nuevosNumeros.push(numeros[i]*2)
// // }
// // return nuevosNumeros
// // }

// const mapMultiplicaPor2 = ()=>{
//     const nuevosNumeros2 = numeros.map (numero => numero *2)
//     return nuevosNumeros2
// }
//  console.log(mapMultiplicaPor2())


// const lista = [{id:1, name: 'perro'}, {id:2, name: 'Gato'}, {id:3, name: 'caballo'}, {id:4, name: 'burro'} ]

// const Namelist = lista.map(objeto => objeto.name)
// return Namelist


// haerlo despues


/// FILTER
// const getNamesWithLengthFive = ()=>{
//     const nuevoArreglo = new Array;
//     for (let i=0; i<lista.length; i++){
//         if(lista[i].name.length>4 ){
//             nuevoArreglo.push(lista[i])
//         }
        
//     }
//     return nuevoArreglo
// }

// let namesArray = getNamesWithLengthFive ();
// console.log(namesArray)


// .FILTER

const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];

const especies = ()=>{


    const animalitosList = animalitos.filter(objeto => objeto.especie === 'conejo')
     return animalitosList

}
console.log(especies());
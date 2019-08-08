// import { request } from "http";


const request = require('request');

// // const URL = 'https://pokeapi.co/api/v2/pokemon/23'

// // getPokemonbyId= ()=>{
// //     request.get(URL,(error, response, body)=>{
// //         response.statusCode===200

// //         ? 
// //         JSON.parse(body).moves.forEach((e,i)=> {
// //             if (i<=4){
// //             console.log(e.move.name)
// //             }

// //         })

// //         : console.log(`no se hizo la peticion, codigo: ${response.statusCode}`)
// //     })
// // };

// // getPokemonbyId(); 





// //starwars

// const getPeoplebyID = (id)=>{
//     const SW_URL = `https://swapi.co/api/people${id}`
//     request.get(SW_URL,(error, response, body)=>{
//         const people= JSON.parse(body)
//         const peopleFilms= people.films

//         peopleFilms.forEach(urls => {
//             const peopleFilmsURL =  urls
//             request.get(urls,(error, response, body)=>{
//                 const films = JSON.parse(body).title
//                 console.log(film)
//             })
//         });
//     }
//     )
// };

// getPeoplebyID('1');



// const pokePromise = new Promise((resolve, reject)=>{
//     const URL_pokePromise = `https://pokeapi.co/api/v2/pokemon/151`
//     request.get(URL_pokePromise, (err, res, body)=>{
//         res.statusCode === 200
//         ? resolve (JSON.parse(body))

//         : reject (new Error (`Error, codigo: ${res.statusCode}`))
//     })
// });

// pokePromise
// .then(respuesta=>{
//     console.log(respuesta)})
// .catch(unError => console.log(unError))

// const Asteriodes = new Promise ((resolve, reject)=>{
//     conts URL_asteroides = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-04&detailed=true&api_key=DEMO_KEY`
//     request.get(URL_asteroides, (err, res, body)=>{
//         res.statusCode === 400

//         ? resolve(JSON.parse(body)) 

//         : reject(new Error (`Error, codigo :${res.statusCode}`))

//     })
// });

// Asteriodes()
// .then(respuesta=>{
//     console.log(respuesta)
// })
// .catch(unError => console.log(unError))

// const Asteriodes = (date) => {
//     const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-04&detailed=true&api_key=DEMO_KEY`

//     request.get(URL, (error, response, body) => {
//         response.statusCode === 404
//             ? JSON.parse(body).is_potentially_hazardous_asteroid.forEach((e, i) => {
//                 if (i <= 4) {
//                     console.log(e.is_potentially_hazardous_asteroid)
//                 }

//             })

//             : 
//             console.log(`no se encontro, codigo: ${response.statusCode}`)
//     })

// }

// Asteriodes()

const URL_NASA = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-04&detailed=true&api_key=hbVP8DcCrfkfFwU95OqADF0EFDACK7R1h29evXTX`
// getHazardousAsteroids = () => {
//     request.get(URL_NASA, (error, response, body) => {
//         const json = JSON.parse(body)
//         const dangerousAsterioids = []

//         // console.log(Object.values(json.near_earth_objects)
//         const fechas = Object.values(json.near_earth_objects)

//         fechas.forEach(fecha => {
//             // console.log('esto es un arreglo de asteriodes')
//             fecha.forEach(asteroide => {
//                 // console.log(asteroide.id)
//                 if (asteroide.is_potentially_hazardous_asteroid)
//                     dangerousAsterioids.push(asteroide.id)
//             })

// is_potentially_hazardous_asteroid
//         });
//          console.log(dangerousAsterioids)
//          return dangerousAsterioids
//     })
// }

// getHazardousAsteroids()

const NASAPROMESA = new Promise((resolve, reject)=>{
    request.get(URL_NASA, (error, response, body)=>{
        

        // const fechas = Object.values(jasonParseado.near_earth_objects)

        //response.statuscode es response obejto y statuscode un atributo y su numero es 200

        if(response.statusCode ===200){
        const jasonParseado = JSON.parse(body);
        const dangerousAsterioids = [];

        const fechas = Object.values(jasonParseado.near_earth_objects)

        fechas.forEach(fecha=>{
            fecha.forEach(asteroide =>{
                if(asteroide.is_potentially_hazardous_asteroid)
               dangerousAsterioids.push(asteroide.id)


            })
            resolve(dangerousAsterioids)
        })
        } else{
            reject(new Error (`codigo http: ${response.statusCode}`))
        }
        
    })
})

NASAPROMESA
.then( response => console.log(response))
// .then( response =>
//      response.forEach(asteroide =>{
//     console.log(`Asteroide potencialmente peligroso con id: ${asteroide}`
// )
// }))

.catch(err => console.log(err))




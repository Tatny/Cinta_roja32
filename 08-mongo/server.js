const express = require('express');

const bodyParser = require ('body-parser')

//definir puerto

const PORT = 5000;


const {Movie} = require ('./movie');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//endpoint

app.post('/create/movie',(req,res)=>{
    const {title,  
        year, 
        synopsis, 
        director,
        cover_url

    } = req.body

    console.log(req.body)

    const newMovie = Movie({
        title, 
        year, 
        synopsis, 
        director, 
        cover_url
    })

    //save
    newMovie.save((err,movie)=>{
        err
        ? res.status(409).send(err)
        : res.status(201).send(movie)
    })
});

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
});
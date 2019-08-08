const express = require('express');

const bodyParser = require ('body-parser')

const app =  express();



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/api',(request, response)=>{
    response.send({message:`hola`})

});

app.get('/home',(req, res)=>{
    res.send({message:`mensaje desde home`})

});

app.get('/user/:uid',()=>{
    console.log(req.params);
    const uid= req.params.uid
    res.send({message:uid})
});

app.get('search', (req,res)=>{
    console.log(req.query)
    const {q,color,vidas} = req.query
    res.send({q,color,vidas})
})

app.post('/create/user', (req,res)=>{
    console.log(req.body)
    const {name, last_name, age}= req.body
    res.send({
        id: 19,
        name,
        age,
        last_name
    })
});


app.listen(4000,()=>{
    console.log('Server on port 4000 es xido')
})

 
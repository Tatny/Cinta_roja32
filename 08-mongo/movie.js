const mongoose = require ("mongoose");
const URL_MONGO = `mongodb+srv://Tatny:ponchita23@tatny-zvudk.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(URL_MONGO, {useNewUrlParser:true}, (err)=>{
    !err 
    ? console.log(`Succesfully connected to MongoDB`)
    : console.log('Shit man!')
});

const Schema = mongoose.Schema;

const movieSchema = new Schema({

    title: String,
    year: String,
    synopsis:{
        type: String,
    },
    director: String,
    cover_url:[String]

},{timestamps:true})

const Movie = mongoose.model('Movie', movieSchema);

module.exports ={
    Movie
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const CandidateController = require('./controllers/CandidateController')

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}))

dotenv.config()

const PORT = process.env.PORT
const DB = process.env.DB


//arquivo estático
app.get('/', (req, res)=>{
    return res.sendFile(__dirname + '/public/index.html')
})

app.post('/register', CandidateController.register);


//conexão banco de dados 
mongoose.connect(DB)
    .then(() =>{ console.log('Conexão efetuada com sucesso no Mongo DB Atlas ! ') })
    .catch(e =>{ console.log(e)})




app.listen(PORT, (e)=>{
    if(e){
        console.log('Erro ao inicializar o servidor...' + e)
    } else{
        console.log(`Server running on port ${PORT}`)
    }
})
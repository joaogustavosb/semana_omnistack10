const express = require('express')
const dataBase = require('mongoose')
const cors = require('cors') // permite acesso externo
const router = require('./router') // importanto as rotas

const app = express()

//conectando ao banco de dados
dataBase.connect("mongodb+srv://admin:teykeys321@semanaomnistack10-xxp63.gcp.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

// permite o acesso externo à aplicação
app.use(cors())

// fazendo com a aplicação entenda json
app.use(express.json())


// fazendo a aplicação escutando as rotas
app.use(router)

// escutando a porta 3333
app.listen(3333)



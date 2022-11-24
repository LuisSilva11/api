const express = require('express')
const mongoose = require('mongoose')
const app = express()
require("dotenv").config()
const artistasRoutes = require("./routes/artistas")
const cancionesRoutes = require("./routes/canciones")
const generosRoutes = require("./routes/generos")

app.use('/api', artistasRoutes)

app.get('/', function(req, res) {
    res.send('Hola bebe')
})

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error) => console.error(error))

app.listen(5000, function() {
    console.log('Servidor inicializado')
})


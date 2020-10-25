/*Importamos las rutas*/
const routes = require('./routes')
const express = require('express') //Esto es equivalente a import express from 'express', pero no admite este formato express
const path = require('path')
const bodyParser = require('body-parser') //para poder leer los datos de req.body

//Crear la conexión a la base de datos
const db = require('./config/db')

//Importar el modelo
require('./models/Proyectos')


//Crea la estructura de la base de datos
db.sync()
    .then(() => console.log("Conectado a servidor"))
    .catch(err => console.log(err))

//creamos una aplicación de express, app es la aplicación de express
const app = express()

//Donde cargar los archivos estáticos
app.use(express.static('public'))

//Habilitar Pug
app.set('view engine', 'pug')

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes())



app.listen(3000) //listen es un método que existe dentro de express
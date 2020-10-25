const Proyectos = require('../models/Proyectos')
const slug = require('slug') //Para crear strings para url con formato palabra-palabra


exports.projectHome = (req, res) => {
    res.render('index', {
        nombrePagina: ' Proyectos'
    })
}


exports.projectForm = (req, res) => {
    res.render('newProject', {
        nombrePagina: 'Nuevo Proyecto'
    })

}

exports.newProject = async (req, res) => {

    const { nombre } = req.body
    let errores = []

    if (!nombre) {
        errores.push({ 'texto': 'Agrega un nombre al proyecto' })
    }

    //si hay errores
    if (errores.length > 0) {
        res.render('newProject', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        //No hay errores
        //Insertar en la BD
        const Proyecto = await Proyectos.create({ nombre })
        res.redirect('/')

    }
}
const express = require('express')
const router = express.Router()

//importar el controlador
const projectController = require('../controllers/projectController')

//importar express-validator
const { body } = require('express-validator/check')

module.exports = function () {
    //ruta para el home
    router.get('/', projectController.projectHome)
    router.get('/nuevo-proyecto', projectController.projectForm)
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(), //Todo esto son métodos de express validator
        projectController.newProject)


    router.get('/nosotros')

    return router
}


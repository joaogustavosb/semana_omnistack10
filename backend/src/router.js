const { Router } = require("express")

const DevController = require("./Controllers/DevController")
const SearchController = require("./Controllers/SearchController")
const routers = Router()

// Buscando os usuarios
routers.get('/search', SearchController.index)

// Listando todos os usuarios
routers.get('/', DevController.index)

// Cadastradando Usuario
routers.post('/registrandodevs', DevController.store)

module.exports = routers
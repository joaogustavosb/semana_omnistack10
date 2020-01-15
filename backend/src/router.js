const { Router } = require("express")

const DevController = require("./Controllers/DevController")
const routers = Router()


// Listando todos os usuarios
routers.get('/', DevController.index)

// Cadastradando Usuario
routers.post('/registrandodevs', DevController.store)



module.exports = routers
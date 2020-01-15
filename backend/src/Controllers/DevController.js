// importando o schema
const dbDev = require("../models/dev")
const axios = require("axios")

module.exports = {

    async index(req, res) {
        const developers = await dbDev.find();
        return res.json(developers)
    },

    async store(req, res) {

        // pegando dados do body 
        const { github_username: username, techs: tech, longitude: long, latitude: lat } = req.body;


        let dev = await dbDev.findOne({ github_username: username })
        if (dev) {
            return res.json({ ERRO: "USER EXIST", dev })
        }

        // requisição de dados do usuario
        const resp = await axios.get(`https://api.github.com/users/${username}`)

        const techs = tech.split(',').map(technology => technology.trim())

        // pegando somente oque será usado
        let { name = login, bio, avatar_url } = resp.data;

        // enviando a localização do usuario
        const location = {
            type: 'Point',
            coordinates: [long, lat]
        }

        //Salvando no banco de dados    
        dev = await dbDev.create({
            github_username: username,
            name,
            bio,
            avatar_url,
            techs,
            location
        })

        //enviando em json ao front-end
        return res.json(dev)
    }
}
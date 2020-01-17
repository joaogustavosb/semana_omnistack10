// importando o schema
const dbDev = require("../models/dev")
const parseStringAsArray = require("../utils/parseStringAsArray")
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

        const techs = parseStringAsArray(tech)

        // pegando somente oque será usado
        let { name, bio, avatar_url, public_repos } = resp.data;
        if (name == null) {
            const { login } = resp.data
            name = login
        }
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
            public_repos,
            location
        })

        //enviando em json ao front-end
        return res.json(dev)
    }
}
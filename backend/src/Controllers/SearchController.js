const dbDev = require("../models/dev")
const parseStringAsArray = require("../utils/parseStringAsArray")

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs: tech } = await req.query
        console.log(latitude + " " + tech + " " + longitude)
        const techs = await parseStringAsArray(tech)

        const devs = await dbDev.find({
            techs: {
                $in: techs // pegando usuarios q trabalho com as techs escolhidads
            },
            // encontrar objs perto de uma localizção
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 15000,
                }
            }
        })

        console.log(devs)
        return res.json({ devs })
    }
}
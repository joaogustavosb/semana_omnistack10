const mongoose = require("mongoose")
const pointSchema = require("./utils/pointSchema")

// Estrutarando a entidade no banco de dados (como se fosse uma tabela)
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs:[String],
    public_repos: Number,
    location:{
        type: pointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model("Developer", DevSchema)
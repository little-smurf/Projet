const mongoose = require("mongoose")
const {Schema} = mongoose

const Reclamation= new Schema ({
    client:{type:String},
    paragraph:{type:String},
    file: { type: Buffer }
})

const ReclamationModel=mongoose.model("Reclamation",Reclamation)
module.exports = ReclamationModel
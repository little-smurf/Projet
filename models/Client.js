const mongoose = require("mongoose")
const {Schema} = mongoose

const Client= new Schema ({
    name:{type:String},
    surname:{type:String},
    phone:{type:String},
    email:{type:String},
    residence:{type:String},
    floor:{type:Number},
    appartement:{type:Number},
    distributeur:{type:Number},
    brin:{type:Number}, 
    matrice:{type:String}, 
    joint:{type:Number}, 
    bloc:{type:Number}, 
    coupleur:{type:Number}, 
    PB:{type:Number}, 
    password :{type:String}
})

const ClientModel=mongoose.model("Client",Client)
module.exports = ClientModel
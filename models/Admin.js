const mongoose = require("mongoose")
const {Schema} = mongoose

const Admin= new Schema ({
    name:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    residence:{type:Array, default:[]},
    distributeur:{type:Array, default:[]}
})

const AdminModel=mongoose.model("Admin",Admin)
module.exports = AdminModel
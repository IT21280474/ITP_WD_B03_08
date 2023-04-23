const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TeacherSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
    Username:{
        type:String, 
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},
{ timestamps:true })
// Username email password department gender
module.exports = mongoose.model('Teacher',TeacherSchema)
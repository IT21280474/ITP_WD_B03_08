const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    title:{
        type:String,
        required:true
         
    },
    duration:{
        type: Number,
        required:true
    },
    day:{
        type: Array,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Course', courseSchema)


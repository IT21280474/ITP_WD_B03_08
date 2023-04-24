const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    studentId:{
        type:String,
        required:true
         
    },
    items:{
        type: String,
        required:true
    },
    prices:{
        type: Number,
        required:true
    },
    level :{
        type: String,
    }
    
}, {timestamps:true})

module.exports = mongoose.model('Cart', cartSchema)


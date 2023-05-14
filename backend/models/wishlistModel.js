const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    studentId:{
        type:String,
        required:true
         
    },
    items:{
        type: String,
        required:true
    },
    duration:{
        type: Number,
        required:true
    },
    prices:{
        type: Number,
        required:true
    }
    
    
}, {timestamps:true})

module.exports = mongoose.model('Wishlist', wishlistSchema)
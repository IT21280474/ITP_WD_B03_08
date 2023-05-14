const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = new Schema({
    headline:{
        type:String,
        required:true
         
    },
    details:{
        type: String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Notification', notificationSchema)


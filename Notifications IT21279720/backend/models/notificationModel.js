const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    Headline:{
        type:String,
        required:true
         },

    Details:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Workout', workoutSchema)


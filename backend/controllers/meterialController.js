const meterialModel = require('../models/meterialModel')
const Meterial = require('../models/meterialModel')
const mongoose = require('mongoose')

//get all meterials
const getMeterials = async (req, res) => {
    const meterials = await Meterial.find({}).sort({createdAt: -1})

    res.status(200).json(meterials)
}


//get a single meterial
const getMeterial = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meterial'})
    }

    const meterial  = await Meterial.findById(id)
    
    if(!meterial){
        return res.status(404).json({error: 'No such meterial'})
    }

    res.status(200).json(meterial )

}

//create new meterial
const createMeterial = async (req, res) => {
    const {title, content} = req.body

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }
    if (!content){
        emptyFields.push('content')
    }
    
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields })
    }

    
    //add doc to db
    try{
        const meterial = await Meterial.create({title, content})
        res.status(200).json(meterial)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a meterial
const deleteMeterial = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meterial'})
    }

    const meterial = await Meterial.findOneAndDelete({_id: id})

    if(!meterial){
        return res.status(400).json({error: 'No such meterial'})
    }

    res.status(200).json(meterial)
}


//update a meterial
const updateMeterial = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meterial'})
    }
    const meterial = await Meterial.findOneAndUpdate({_id: id}, {
       ...req.body
    })

    if(!meterial){
        return res.status(400).json({error: 'No such meterial'})
    }
    res.status(200).json(meterial)
}


module.exports = {
    getMeterials,
    getMeterial,
    createMeterial,
    deleteMeterial,
    updateMeterial
}
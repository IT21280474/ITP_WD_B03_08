const notificationModel = require('../models/notificationModel')
const Notification = require('../models/notificationModel')
const mongoose = require('mongoose')

//get all notifications
const getNotifications = async (req, res) => {
    const notifications = await Notification.find({}).sort({createdAt: -1})

    res.status(200).json(notifications)
}


//get a single notification
const getNotification = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such notification'})
    }

    const notification  = await Notification.findById(id)
    
    if(!notification){
        return res.status(404).json({error: 'No such notification'})
    }

    res.status(200).json(notification )

}

//create new notification
const createNotification = async (req, res) => {
    const {headline, details} = req.body

    let emptyFields = []

    if (!headline){
        emptyFields.push('headline')
    }
    if (!details){
        emptyFields.push('details')
    }
    
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields })
    }

    
    //add doc to db
    try{
        const notification = await Notification.create({headline, details})
        res.status(200).json(notification)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a notification
const deleteNotification = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such notification'})
    }

    const notification = await Notification.findOneAndDelete({_id: id})

    if(!notification){
        return res.status(400).json({error: 'No such notification'})
    }

    res.status(200).json(notification)
}


//update a notification
const updateNotification = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such notification'})
    }
    const notification = await Notification.findOneAndUpdate({_id: id}, {
       ...req.body
    })

    if(!notification){
        return res.status(400).json({error: 'No such notification'})
    }
    res.status(200).json(notification)
}


module.exports = {
    getNotifications,
    getNotification,
    createNotification,
    deleteNotification,
    updateNotification
}
const notificationModel = require('../models/notificationModel')
const Notification = require('../models/notificationModel')
const mongoose = require('mongoose')

//get all notifications
const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 })
        res.status(200).json(notifications)
    } catch (error) {
        res.status(500).json({ error: 'Failed to get notifications from the database' })
    }
}

//get a notification
const getNotification = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such notification' })
    }

    const notification = await Notification.findById(id)

    if (!notification) {
        return res.status(404).json({ error: 'No such notification' })
    }

    res.status(200).json(notification)

}

//create a new notification
const createNotification = async (req, res) => {
    const { Headline, Details } = req.body

    let emptyFields = []

    if (!Headline) {
        emptyFields.push('Headline')
    }
    if (!Details) {
        emptyFields.push('Details')
    } Details
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: 'Please fill in all the fields',
            emptyFields
        })
    }

    //add doc to db
    try {
        const notification = await Notification.create({ Headline, Details })
        res.status(200).json(notification)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//delete a notification
const deleteNotification = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such notification' })
    }

    const notification = await Notification.findOneAndDelete({ _id: id })

    if (!notification) {
        return res.status(400).json({ error: 'No such notification' })
    }

    res.status(200).json(notification)
}


//update a notification
//Correction Update
const updateNotification = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such notification' })
    }

    const notification = await Notification.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })

    if (!notification) {
        return res.status(400).json({ error: 'No such notification' })
    }

    res.status(200).json(notification)
}

// Search notifications
// const searchNotifications = async (req, res) => {
//     const { query } = req.query;

//     try {
//         const results = await Notification.find({ $text: { $search: query } });
//         res.status(200).json(results);
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred during the search' });
//     }
// };

module.exports = {
    getNotifications,
    getNotification,
    createNotification,
    deleteNotification,
    updateNotification,
    // searchNotifications

}

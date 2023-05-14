const express = require('express')
const {
    createNotification,
    getNotifications,
    getNotification,
    deleteNotification,
    updateNotification
}= require('../controllers/notificationController')


const router = express.Router()

//GET all notifications
router.get('/', getNotifications)

//GET a single notification
router.get('/:id', getNotification)


//POST a new notification
router.post('/', createNotification)
    
//DELETE a notification 
router.delete('/:id', deleteNotification)

//UPDATE a notification
router.patch('/:id', updateNotification)



module.exports = router
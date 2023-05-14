require('dotenv').config()

const express =require('express')
const mongoose = require('mongoose')
const courseRoutes = require('./routes/courses')
const meterialRoutes = require('./routes/meterials')
const notificationRoutes = require('./routes/notifications')




//express app 
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/courses',courseRoutes)
app.use('/api/meterials',meterialRoutes)
app.use('/api/notifications',notificationRoutes)






//connect to the database my
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })





    
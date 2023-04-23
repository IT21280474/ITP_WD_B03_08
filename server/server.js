require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRouters =require("./routes/Dashboard/workouts")
const studentRouters = require("./routes/Dashboard/students")
const teacherRouters = require("./routes/Dashboard/teacher")
// const courseRouters = require("./routes/Dashboard/courses")

//express app
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//router routes
app.use('/api/workouts',workoutRouters)
app.use('/api/students',studentRouters)
app.use('/api/teachers',teacherRouters)
// app.use('/api/courses',courseRouters)

//connect db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    //listen for app
        app.listen(process.env.PORT, ()=>{
            console.log('Connect DB & Listening on port',process.env.PORT);
        })
}).catch((error)=>{
    console.log(error)
})





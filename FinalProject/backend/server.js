require('dotenv').config();
// const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const workoutRouters =require("./routes/Dashboard/workouts")
const studentRouters = require("./routes/Dashboard/students")
const teacherRouters = require("./routes/Dashboard/teacher")
const feedbackRouter = require('./routes/feedback');
const courseRouters = require("./routes/courses")
const DashboarduserRoutes = require('./routes/Dashboard/user')
//express app
const app = express()
// app.use(cors());
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//router routes
app.use('/api/workouts',workoutRouters)
app.use('/api/students',studentRouters)
app.use('/api/teachers',teacherRouters)
app.use('/api/Dashboarduser', DashboarduserRoutes)
app.use('/api/feedback', feedbackRouter);
app.use('/api/courses',courseRouters)

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





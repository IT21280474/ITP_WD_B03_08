const courseModel = require('../models/courseModel')
const Course = require('../models/courseModel')
const mongoose = require('mongoose')

//get all courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})

    res.status(200).json(courses)
}


//get a single course
const getCourse = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'})
    }

    const course  = await Course.findById(id)
    
    if(!course){
        return res.status(404).json({error: 'No such course'})
    }

    res.status(200).json(course )

}

//create new course
const createCourse = async (req, res) => {
    const {title, duration, day, price} = req.body

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }
    if (!duration){
        emptyFields.push('duration')
    }
    if (!day){
        emptyFields.push('day')
    }
    if (!price){
        emptyFields.push('price')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields })
    }

    
    //add doc to db
    try{
        const course = await Course.create({title, duration, day, price})
        res.status(200).json(course)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a course
const deleteCourse = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if(!course){
        return res.status(400).json({error: 'No such course'})
    }

    res.status(200).json(course)
}


//update a course
const updateCourse = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'})
    }
    const course = await Course.findOneAndUpdate({_id: id}, {
       ...req.body
    })

    if(!course){
        return res.status(400).json({error: 'No such course'})
    }
    res.status(200).json(course)
}


module.exports = {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
}
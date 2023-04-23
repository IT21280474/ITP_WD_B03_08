const Teacher = require('../../models/Dashboard/TeacherModels')
const mongoose = require('mongoose')

//get  all teachers
const getTeachers = async (req,res)=>{
    const teachers = await Teacher.find({}).sort({createdAd:-1})

    res.status(200).json(teachers)
}


//get a single teacher
const getTeacher = async (req,res)=>{
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such teacher'})
  }

  const teacher = await Teacher.findById(id)

  if (!teacher) {
    return res.status(404).json({error: 'No such teacher'})
  }

  res.status(200).json(teacher)
}


//ctrate a single student
const createTeacher = async(req,res)=>{
    const {Username, email, password, department,gender} = req.body
    
    let emptyFields=[]
    if(!email){
      emptyFields.push('email')
    }
    if(!Username){
      emptyFields.push('Username')
    }
    if(!password){
      emptyFields.push('password')
    }
    if(!department){
      emptyFields.push('department')
    }
    if(!gender){
      emptyFields.push('gender')
    }
    
    if(emptyFields.length>0){
      return res.status(400).json({error: 'Please fill in all required fields',emptyFields})
    }

//add doc to DB
    try{
        const teacher = await Teacher.create({Username, email, password, department,gender})
        res.status(200).json(teacher)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a student
const deleteTeacher = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such teacher'})
  }

  const teacher = await Teacher.findOneAndDelete({_id: id})

  if(!teacher) {
    return res.status(400).json({error: 'No such teacher'})
  }

  res.status(200).json(teacher)
}

//update a teacher
const updateTeacher = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such teacher'})
  }

  const teacher = await Teacher.findOneAndUpdate({_id: id})

  if(!teacher) {
    return res.status(400).json({error: 'No such teacher'})
  }

  res.status(200).json(teacher)
}

module.exports = {
    createTeacher,
    getTeachers,
    getTeacher,
    deleteTeacher,  
    updateTeacher
}
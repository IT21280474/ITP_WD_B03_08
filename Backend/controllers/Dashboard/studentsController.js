const Student = require('../../models/Dashboard/studentsModels');
const mongoose = require('mongoose')

//get  all students
const getStudents = async (req,res)=>{
    const students = await Student.find({}).sort({createdAd:-1})

    res.status(200).json(students)
}


//get a single student
const getStudent = async (req,res)=>{
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such student'})
  }

  const student = await Student.findById(id)

  if (!student) {
    return res.status(404).json({error: 'No such student'})
  }

  res.status(200).json(student)
}


//ctrate a single student
const createStudent = async(req,res)=>{
    const {email, firstName, lastName,NIC,userName,address,dob,mobile} = req.body
    
    let emptyFields=[]
    if(!email){
      emptyFields.push('email')
    }
    if(!firstName){
      emptyFields.push('firstName')
    }
    if(!lastName){
      emptyFields.push('lastName')
    }
    if(!NIC){
      emptyFields.push('NIC')
    }
    if(!userName){
      emptyFields.push('userName')
    }
    if(!address){
      emptyFields.push('address')
    }
    if(!dob){
      emptyFields.push('dob')
    }
    if(!mobile){
      emptyFields.push('mobile')
    }
    if(emptyFields.length>0){
      return res.status(400).json({error: 'Please fill in all required fields',emptyFields})
    }

//add doc to DB
    try{
        const student = await Student.create({email, firstName, lastName,NIC,userName,address,dob,mobile})
        res.status(200).json(student)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a student
const deleteStudent = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such student'})
  }

  const student = await Student.findOneAndDelete({_id: id})

  if(!student) {
    return res.status(400).json({error: 'No such student'})
  }

  res.status(200).json(student)
}

//update a student
const updateStudent = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such student'})
  }

  const student = await Student.findOneAndUpdate({_id: id})

  if(!student) {
    return res.status(400).json({error: 'No such student'})
  }

  res.status(200).json(student)
}

module.exports = {
    createStudent,
    getStudent,
    getStudents,
    deleteStudent,  
    updateStudent
}
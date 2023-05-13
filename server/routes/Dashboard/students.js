const express = require('express');
const {
    createStudent, 
    getStudent,
    getStudents,
    deleteStudent,
    updateStudent} = require('../../controllers/Dashboard/studentsController');


const router =express.Router();

//get all Student
router.get('/', getStudents)

//get a single Student
router.get('/:id', getStudent)

//post a new Student
router.post('/', createStudent)

//delete a Student
router.delete('/:id',deleteStudent)

//update a Student
router.patch('/:id',updateStudent )

module.exports = router
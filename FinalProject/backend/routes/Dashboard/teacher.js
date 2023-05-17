const express = require('express');
const {
    createTeacher, 
    getTeacher,
    getTeachers,
    deleteTeacher,
    updateTeacher} = require('../../controllers/Dashboard/teacherController');


const router =express.Router();

//get all Teacher
router.get('/', getTeachers)

//get a single Teacher
router.get('/:id', getTeacher)

//post a new Teacher
router.post('/', createTeacher)

//delete a Teacher
router.delete('/:id',deleteTeacher)

//update a Teacher
router.patch('/:id',updateTeacher )
module.exports = router
// const Student = require("../models/student.model");

// const addStudent = async (req, res) => {
//     const { course,student,rating,student} =
//       req.body;
  
//     const newstudent = new Student({
//         course,
//         student,
//         rating,
//         student
//     });
  
//     await newstudent
//       .save()
//       .then(() => res.json('Student added!'))
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const getStudents = async (req, res) => {
//     try {
//       const student = await Student.find();
//       res.json(student);
//     } catch (error) {
//       res.status(500).send("Server Error" + error);
//     }
//   };

//   const getStudentById = async (req, res) => {
//     try {
//       const student = await Student.findById(req.params.id);
//       res.json(student);
//     } catch (error) {
//       res.status(500).send("Server Error" + error);
//     }
//   };

//   const updateStudent = async (req, res) => {
//     Student.findByIdAndUpdate(req.params.id)
//       .then((existingStudent) => {
//         existingStudent.course = req.body.course;
//         existingStudent.student = req.body.student;
//         existingStudent.rating = req.body.rating;
//         existingStudent.student = req.body.student;
//         existingStudent.response = req.body.response;
        
//         existingStudent
//           .save()
//           .then(() => res.json('Student updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };
  
//   const addResponse = async (req, res) => {
//     Student.findByIdAndUpdate(req.params.id)
//       .then((existingStudent) => {
//         existingStudent.course = req.body.course;
//         existingStudent.student = req.body.student;
//         existingStudent.rating = req.body.rating;
//         existingStudent.student = req.body.student;
//         existingStudent.response = req.body.response;
        
//         existingStudent
//           .save()
//           .then(() => res.json('Response Added!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const deleteStudent = async (req, res) => {
//     Student.findByIdAndDelete(req.params.id)
//       .then((deletedStudent) => {
//         res.json('Student deleted');
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

  
//   module.exports = {
//     addStudent,
//     getStudents,
//     getStudentById,
//     updateStudent,
//     deleteStudent,
//     addResponse
  
   
//   }
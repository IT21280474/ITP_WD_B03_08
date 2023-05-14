import {BrowserRouter , Route,Routes} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


//page import
import Home from './pages/Dashboard/Home';
import NavBar from "./components/NavBar"
import Dashboard from "./pages/Dashboard/Dashboard"
import Students from "./pages/Dashboard/Students"
import Teacher from './pages/Dashboard/Teacher'
import Courses from './pages/Dashboard/Courses'
import Transaction from './pages/Dashboard/Transactions'
import Feedback from './pages/Dashboard/Feedback'
import Studentupdate from './components/Students/editStudent'
import Teacherupdate from './components/Teacher/teacherEdit'

import Footer from './components/footer';
import Navbar from "./components/feedbackcom/navbar/navbar.component";

import AddFeedback from './components/feedbackcom/feedback/add-feedback.component';
import FeedbackList from './components/feedbackcom/feedback/feedback-list.component.js.js';
import EditFeedback from './components/feedbackcom/feedback/edit-feedback.component';
import FeedbackListStudent from './components/feedbackcom/feedback/feedback-list-student.component';
import FeedbackListAdmin from './components/feedbackcom/feedback/feedback-list-admin.component';
import AddResponse from './components/feedbackcom/feedback/add-response.component';

import AddStudent from './components/studentcom/feedback/add-student.component';
import StudentList from './components/studentcom/feedback/feedback-list.component.js.js';
import EditStudent from './components/studentcom/feedback/edit-feedback.component';
import StudentListStudent from './components/studentcom/feedback/feedback-list-student.component';
import StudentListAdmin from './components/studentcom/feedback/feedback-list-admin.component';

import AddTeacher from './components/teachercom/feedback/add-student.component';
import TeacherList from './components/teachercom/feedback/feedback-list.component.js.js';
import EditTeacher from './components/teachercom/feedback/edit-feedback.component';
import StudentListTeacher from './components/teachercom/feedback/feedback-list-student.component';
import TeacherListAdmin from './components/teachercom/feedback/feedback-list-admin.component';

// import AddResponse from './components/feedbackcom/feedback/add-response.component';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

          
            <NavBar/>
            
            <Routes> 
               <Route path="/" element={ <Home />} /> 
              <Route path="/dashboard" element={ <Dashboard />} />
              <Route path="/students" element={ <Students />}/>
              <Route path="/teachers" element={ <Teacher />}/>
              <Route path="/courses" element={ <Courses />}/>
              <Route path="/transactions" element={ <Transaction />}/>
              <Route path="/feedback" element={ <Feedback />}/>
              <Route path="/studentupdate/:id" element={ <Studentupdate />}/>
              <Route path="/teacherupdate/:id" element={ <Teacherupdate />}/>
              
              <Route exact path="/addFeedback" element={<AddFeedback/> } />
              <Route exact path="/listFeedback" element={<FeedbackList/> } />
              <Route exact path="/updateFeedback" element={<EditFeedback/> } />
              <Route exact path="/myFeedback" element={<FeedbackListStudent/> } />
              <Route exact path="/adFeedback" element={<FeedbackListAdmin/> } />
              <Route exact path="/addResponse" element={<AddResponse/> } />


              <Route exact path="/addStudent" element={<AddStudent/> } />
              <Route exact path="/listStudent" element={<StudentList/> } />
              <Route exact path="/updateStudent" element={<EditStudent/> } />
              <Route exact path="/myStudent" element={<StudentListStudent/> } />
              <Route exact path="/adStudent" element={<StudentListAdmin/> } />
              {/* <Route exact path="/addResponse" element={<AddResponse/> } /> */}

              <Route exact path="/addTeacher" element={<AddTeacher/> } />
              <Route exact path="/listTeacher" element={<TeacherList/> } />
              <Route exact path="/updateTeacher" element={<EditTeacher/> } />
              <Route exact path="/myTeacher" element={<StudentListTeacher/> } />
              <Route exact path="/adTeacher" element={<TeacherListAdmin/> } />


        

              </Routes>
              
           

            
            
          
      </BrowserRouter>
    </div>
  );
}

export default App;

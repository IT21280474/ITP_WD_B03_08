import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import  Student  from './pages/Student.js';
import  Teacher  from './pages/Teacher';
import Courses  from './pages/Courses'
import  Transtraction from './pages/Transtraction';
import Feedback from './pages/Feedback'


function App() {
  return (
    <BrowserRouter>
    <Home>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        
       
      </Routes>
      </Home>
    </BrowserRouter>
  );
}

export default App;

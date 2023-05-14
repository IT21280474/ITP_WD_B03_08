import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/workoutContext';
import { StudentsContextProvider } from './context/studentContext/studentContext.js';
import { TeachersContextProvider } from './context/teacherContext/teacherContext';
import { CoursesContextProvider } from './context/courseContext/courseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <WorkoutsContextProvider>    
      <StudentsContextProvider>
      <TeachersContextProvider>
      
        <App />   
        
        </TeachersContextProvider>
      </StudentsContextProvider>
    </WorkoutsContextProvider>

 
    
  </React.StrictMode>
);



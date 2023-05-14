import React, { useState, useEffect,useParams } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Swal from "sweetalert2";
import { useHistory } from 'react-router';
import { Rating } from 'react-simple-star-rating'

export default function EditFeedback() {

    const [email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [department, setdepartment] = useState('')
    const [gender, setgender] = useState('')
   



    const [id, setID] = useState(null);

    useEffect(() => {
        console.log("Update feedback is" + localStorage.getItem('Feedback'));
        setID(localStorage.getItem('ID'))
        setEmail((localStorage.getItem('email')))
      setUsername((localStorage.getItem('Username')))
      setpassword((localStorage.getItem('password')))
      setdepartment((localStorage.getItem('department')))
      setgender((localStorage.getItem('gender')))
     
        console.log("Update feedback id" + setID(localStorage.getItem('ID')));

    }, []);

    const updateAPIData = () => {

        const students = {
            email: email,
            Username: Username,
            password: password,
            department: department,
            gender: gender
        }

        console.log(students);
        if(email.length < 3){
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Course Name is too short!!',
                background: '#fff',
                confirmButtonColor: '#eb4034',
                confirmButton:true,
                iconColor: '#60e004',
                closeOnConfirm: true,
                
            })

        }else if(email.length < 3){
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Student Name is too short!!',
                background: '#fff',
                confirmButtonColor: '#eb4034',
                confirmButton:true,
                iconColor: '#60e004',
                closeOnConfirm: false,
                timer:2800000
            })
        }
        else if(email.length <= 5){
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Feedback can not be shorter than 5 characters!!',
                background: '#fff',
                confirmButtonColor: '#eb4034',
                confirmButton:true,
                iconColor: '#60e004',
                closeOnConfirm: false,
                timer:2800000
            })
        }else{
        
        axios.put(`http://localhost:5000/students/${id}`,students)
        .then(res => {

            console.log(res);

            if (res.status === 200) {
 
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Feedback has been Updated!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })               

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error in updating!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#e00404'
                })
            }
        })
    }
    }

 
    return (
<div className="flex flex-col px-5 pt-2 ">
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                            <form  className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'  > 
      <h4 className='text-3xl font-bold'><label value={Username}>Hi </label></h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can Update.
          </span>
{/* ///////////////////////////////////////////////////////////////////// */}

      {/* <label>Excersize Email:</label> */}
      <div className='textbox flex flex-col items-center gap-6 '>
      <input   type={'text'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} 
        value={email}
        ></input>
      </div>
{/* ///////////////////////////////////////////////////////////////////// */}

            <div className='textbox flex flex-col items-center gap-6 '>
                    <input   type={'text'} placeholder='Username' className='textbox01' value={Username}
                     onChange={(e) => setUsername(e.target.value)}></input>
            </div>
              <input   type={'text'} placeholder='password'  value={password} onChange={(e) => setpassword(e.target.value)} ></input>
                            
                            {/* // Username, email, password, department,gender */}

{/* title///////////////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='department' className='textbox01' value={department} onChange={(e) => setdepartment(e.target.value)}></input>
              </div><br/>
             
{/* ////////email, firstName, lastName,NIC,userName,address,dob,mobile///////////////////////////////////////////////////////////// */}
<div className='textbox flex flex-col gap-6'>
              <label className='textbox flex flex-col  gap-6'>Gender</label>
              <select value={gender} 
                                                type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setgender(e.target.value)}
                                                
                                            >Gender
                                                 <option></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                
                                               
                                            </select>
              
              </div>
              {/* ///////////////////////////////////////////////////////////////////// */}

              
 
<br/>
      
      <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Teacher" onClick={updateAPIData} />
      
    </form>
    

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useEffect, useState } from 'react'
import { useStudentsContext } from '../../hooks/useStudentContext/useStudentContaxt'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../Helper/validate';
import styles from './sudentformstyle.css'
import { useParams } from 'react-router-dom';

const StudentFormUpdate = () => {
  // {/* Email, first name , last name, nic, dob , username,  user profile picture, address, mobile */}
  const { dispatch } = useStudentsContext()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [NIC, setNIC] = useState('')
  const [userName, setUserName] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDOB] = useState('')
  const [mobile, setMobile] = useState('')
  


  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields]=useState([])

  const params =useParams()
  useEffect(()=>{
    getDetails()
  },[])
  const getDetails= async ()=>{
    console.warn(params);
    let error= await fetch(`/student/${params.id}`);
    error = await error.json();
    console.warn(error);
    setEmail(error.email)
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const student = {email, firstName, lastName,NIC,userName,address,dob,mobile}
    
    const response = await fetch('/api/dashboard/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setEmail('')
      setFirstName('')
      setLastName('')
      setDOB('')
      setNIC('')
      setUserName('')
      setAddress('')
      setMobile('')
      console.log('update student added',json)
      dispatch({type: 'UPDATE_STUDENT', payload: json})
    }
    

  }





  return (
    <>
    <div className=""style={{margin:"0",padding:"0"}}>
    <Toaster position='top-center' reverseOrder='false'/>
    <div className='flex allthebox'>
      <div className='flex glass ' style={ {  width:"50%" , paddingTop:"3em 5em" , marginRight:' 7em'}}>

    <form className="create"  onSubmit={handleSubmit } > 
      <h4 className='text-5xl font-bold'>Add a New student</h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can add new student.
          </span>
{/* ///////////////////////////////////////////////////////////////////// */}

      {/* <label>Excersize Email:</label> */}
      <div className='textbox flex flex-col items-center gap-6 '>
      <input   type={'text'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error':'' }></input>
      </div>
{/* ///////////////////////////////////////////////////////////////////// */}

            <div className='name flex w-3/4 gap-10'>
                    <input   type={'text'} placeholder='FirstName' className='textbox01' value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}></input>
            
              <input   type={'text'} placeholder='LastName' className={ emptyFields.includes('lastName') ? 'error':''  } value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                            </div>
      
{/* title///////////////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'number'} placeholder='NIC' className='textbox01' value={NIC} onChange={(e) => setNIC(e.target.value)}></input>
              </div>
             
{/* ////////email, firstName, lastName,NIC,userName,address,dob,mobile///////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='User Name' className='textbox01' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
              </div>
              {/* ///////////////////////////////////////////////////////////////////// */}

              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='Address' className='textbox01' value={address} onChange={(e) => setAddress(e.target.value)}></input>
              </div>
              {/* ///////////////////////////////////////////////////////////////////// */}

              <div className='textbox flex flex-col items-center gap-6'>
              <input  type={'date'} placeholder='Birth Day' className='textbox01' value={dob} onChange={(e) => setDOB(e.target.value)}></input>
              </div>


              <div 
              className='textbox flex flex-col items-center gap-6'>
              <input  
              type={'number'} placeholder='Mobile' className='textbox01' 
              value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
              </div>
 

      
      <button>update Student</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div></div></div>
    </>
  )
}

export default StudentFormUpdate
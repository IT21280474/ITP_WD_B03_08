import { useState } from 'react'
import { useTeachersContext } from '../../hooks/useTeacherContext/useTeacherContaxt'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../Helper/validate';
import styles from './teacherformstyle.css'

const StudentForm = () => {
  const { dispatch } = useTeachersContext()
{/*Username, email, password, department,gender*/}
  const [email, setEmail] = useState('')
  const [gender, setgender] = useState('')
  const [department, setDepartment] = useState('')
  const [password, setPassword] = useState('')
  const [Username, setUsername] = useState('')

  // const [address, setAddress] = useState('')
  // const [dob, setDOB] = useState('')
  // const [mobile, setMobile] = useState('')
  


  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields]=useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const teacher = { email, Username, department,gender, password}
    
    const response = await fetch('/api/teachers', {
      method: 'POST',
      body: JSON.stringify(teacher),
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
      setUsername('')
      setgender('')
      setPassword('')
      setDepartment('')
      // setUserName('')
      // setAddress('')
      // setMobile('')
      console.log('New teacher added',json)
      dispatch({type: 'CREATE_TEACHER', payload: json})
    }
    

  }





  return (
    <>
    <div className=""style={{margin:"0",padding:"0"}}>
    <Toaster position='top-center' reverseOrder='false'/>
    <h1 className='text-5xl  text-indigo-900 p-5 '>Teacher Dashboard</h1>
    <div className='flex allthebox'>
      <div className='flex glass ' style={ {  width:"50%" , paddingTop:"3em 5em" , marginRight:' 7em'}}>

    <form className="create"  onSubmit={handleSubmit } > 
      <h4 className='text-3xl font-bold'>Add a New teacher</h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can add new teacher.
          </span>
{/* ///////////////////////////////////////////////////////////////////// */}

      {/* <label>Excersize Email:</label> */}
      <div className='textbox flex flex-col items-center gap-6 '>
      <input   type={'text'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error':'' }></input>
      </div>
{/* ///////////////////////////////////////////////////////////////////// */}

<div className='textbox flex flex-col items-center gap-6 '>
                    <input   type={'text'} placeholder='Username' className='textbox01' value={Username}
                     onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              <div className='textbox flex flex-col items-center gap-6 '>
              <input   type={'text'} placeholder='department' className={ emptyFields.includes('department') ? 'error':''  } value={department} onChange={(e) => setDepartment(e.target.value)} ></input></div>
                          
      
{/* title///////////////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='gender' className='textbox01' value={gender} onChange={(e) => setgender(e.target.value)}></input>
              </div>
             
{/* ////////email, firstName, department,NIC,userName,address,dob,mobile///////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='password' className='textbox01' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div> 
              {/* /////////////////////////////////////////////////////////////////////

              <div className='textbox flex flex-col items-center gap-6'>
              <input   type={'text'} placeholder='Address' className='textbox01' value={address} onChange={(e) => setAddress(e.target.value)}></input>
              </div> */} 
              {/* ///////////////////////////////////////////////////////////////////// */}

              {/* <div className='textbox flex flex-col items-center gap-6'>
              <input  type={'date'} placeholder='Birth Day' className='textbox01' value={dob} onChange={(e) => setDOB(e.target.value)}></input>
              </div> */}


              {/* <div 
              className='textbox flex flex-col items-center gap-6'>
              <input  
              type={'number'} placeholder='Mobile' className='textbox01' 
              value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
              </div>
  */}

      
      <button>Add teacher</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div></div></div>
    </>
  )
}

export default StudentForm
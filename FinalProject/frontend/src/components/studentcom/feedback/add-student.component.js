import { useState } from 'react'
import { useStudentsContext } from '../../../hooks/useStudentContext/useStudentContaxt'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../../Helper/validate';
import styles from '../../../components/Students/sudentformstyle.css'

const StudentForm = () => {
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
  
  // const [load, setLoad] = useState('')
  // const [reps, setReps] = useState('')

  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields]=useState([])

            const handleSubmit = async (e) => {
                    e.preventDefault()

                    const student = {email, firstName, lastName,NIC,userName,address,dob,mobile}
                    
                    const response = await fetch('/api/students', {
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
                console.log('New student added',json)
                dispatch({type: 'CREATE_STUDENT', payload: json})
                }
    

                }





  return (
    <>
    <div className=""style={{margin:"0",padding:"0"}}>
    <Toaster position='top-center' reverseOrder='false'/>
    <div className="flex flex-col px-5 pt-2 ">

<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className='items-center overflow-hidden'>
            <div className=''>
                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">    
    <form  className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'  onSubmit={handleSubmit } > 
      <h4 className='text-3xl font-bold'>Add a New student</h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can add new student.
          </span>
{/* ///////////////////////////////////////////////////////////////////// */}

      {/* <label>Excersize Email:</label> */}
      <div className='textbox flex flex-col items-center gap-6 '>
      <input required  type={'text'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error':'' }></input>
      </div>
{/* ///////////////////////////////////////////////////////////////////// */}
<br/>
            <div className='name flex w-3/4 gap-10'>
                    <input required  type={'text'} placeholder='FirstName' className='textbox01' value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}></input>
            
              <input  required type={'text'} placeholder='LastName' className={ emptyFields.includes('lastName') ? 'error':''  } value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                            </div><br/>
      
{/* title///////////////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input  required type={'number'} placeholder='NIC' className='textbox01' value={NIC} onChange={(e) => setNIC(e.target.value)}></input>
              </div><br/>
             
{/* ////////email, firstName, lastName,NIC,userName,address,dob,mobile///////////////////////////////////////////////////////////// */}
              <div className='textbox flex flex-col items-center gap-6'>
              <input required  type={'text'} placeholder='User Name' className='textbox01' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
              </div><br/>
              {/* ///////////////////////////////////////////////////////////////////// */}

              <div className='textbox flex flex-col items-center gap-6'>
              <input required  type={'text'} placeholder='Address' className='textbox01' value={address} onChange={(e) => setAddress(e.target.value)}></input>
              </div><br/>
              {/* ///////////////////////////////////////////////////////////////////// */}

              <div className='textbox flex flex-col items-center gap-6'>
              <input  required type={'date'} placeholder='Birth Day' className='textbox01' value={dob} onChange={(e) => setDOB(e.target.value)}></input>
              </div><br/>


              <div 
              className='textbox flex flex-col items-center gap-6'>
              <input required 
              type={'number'} placeholder='Mobile' className='textbox01' 
              value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
              </div>
 
<br/>
      
      <button>Add Student</button>
      {error && <div className="error">{error}</div>}
    </form>
    
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StudentForm
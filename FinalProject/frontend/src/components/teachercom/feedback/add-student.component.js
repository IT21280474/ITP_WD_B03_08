import { useState } from 'react'
import { useTeachersContext } from '../../../hooks/useTeacherContext/useTeacherContaxt'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../../Helper/validate';
import styles from '../../../components/Students/sudentformstyle.css'
import { Form, Dropdown } from 'semantic-ui-react';
const departmentOptions = [
  { key: 'option1', value: 'IT', text: 'IT' },
  { key: 'option2', value: 'Bisness', text: 'Bisness' },
  { key: 'option3', value: 'Enginering', text: 'Enginering' },
  // Add more options as needed
];

const StudentForm = () => {
  // const { dispatch } = useTeachersContext()
{/*Username, email, password, department,gender*/}
  const [email, setEmail] = useState('')
  const [gender, setgender] = useState('')
  const [department, setDepartment] = useState('')
  const [password, setPassword] = useState('')
  const [Username, setUsername] = useState('')

  // const [address, setAddress] = useState('')
  // const [dob, setDOB] = useState('')
  // const [mobile, setMobile] = useState('')
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  


  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields]=useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter an email address.');
      return;
    }
  
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
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
   
      console.log('New teacher added',json)
      // dispatch({type: 'CREATE_TEACHER', payload: json})
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
                <form className="create"  onSubmit={handleSubmit } > 
      <h4 className='text-3xl font-bold'>Add a New teacher</h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can add new teacher.
          </span>
{/* ///////////////////////////////////////////////////////////////////// */}
<br/>
      <label><h3>Teacher Email :</h3></label>
      <div className='textbox flex flex-col  gap-6'>
            <input
              required
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={emptyFields.includes('email') ? 'error':'' }
            />
          {email && !isValidEmail(email) && <p style={{ color: 'red', backgroundColor: '#f8d7da', padding: '5px', borderRadius: '5px' }}>Please enter a valid email address.</p>}


          </div><br/>
{/* ///////////////////////////////////////////////////////////////////// */}
<br/>
      <label><h3>Teacher Username :</h3></label>
<div className='textbox flex flex-col items-center gap-6 '>
                    <input required  type={'text'} placeholder='Username' className='textbox01' value={Username}
                     onChange={(e) => setUsername(e.target.value)}></input><br/>
              </div>


              <br/>
                    <label><h3>Teacher department:</h3></label>
                    <div className='textbox flex flex-col  gap-6'>
                <Dropdown
                  placeholder='Select Department'
                  selection
                  options={departmentOptions}
                  value={department}
                  onChange={(e, { value }) => setDepartment(value)}
                />
              </div>

              <br/>
      
{/* title///////////////////////////////////////////////////////////////////// */}
<br/>
      <label><h3>Teacher Gender:</h3></label>
              <div className='textbox flex flex-col gap-6'>
              {/* <label className='textbox flex flex-col  gap-6'>Gender</label> */}
              <select value={gender} 
                                                type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setgender(e.target.value)}
                                                
                                            >
                                                 <option></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                
                                               
                                            </select>
              
              </div>
              <br/>
{/* ////////email, firstName, department,NIC,userName,address,dob,mobile///////////////////////////////////////////////////////////// */}
<div className='textbox flex flex-col items-center gap-6'>
              <input  required type={'text'} placeholder='password' className='textbox01' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div> 
              <br/>

      
      <button>Add teacher</button>
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
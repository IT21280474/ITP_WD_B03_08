// import { useState } from 'react'
// import { useCoursesContext } from '../../hooks/useCourseContext/useCourseContect'
// import { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import { usernameValidate } from '../../Helper/validate';
// import styles from './teacherformstyle.css'

// const CourseForm = () => {
//   const { dispatch } = useCoursesContext()
// {/*title,duration,day,price*/}
//   const [title, setTitle] = useState('')
//   const [duration, setduration] = useState('')
//   const [day, setday] = useState('')
//   const [price, setprice] = useState('')

// const [error, setError] = useState(null)
//   const [emptyFields, setEmptyFields]=useState([])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const course = { title,duration,day,price}
    
//     const response = await fetch('/api/courses', {
//       method: 'POST',
//       body: JSON.stringify(course),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//       setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setError(null)
//       setTitle('')
//       setduration('')
//       setday('')
//       setprice('')
      
//       console.log('New course added',json)
//       dispatch({type: 'CREATE_COURSE', payload: json})
//     }
    

//   }





//   return (
//     <>
//     <div className=""style={{margin:"0",padding:"0"}}>
//     <Toaster position='top-center' reverseOrder='false'/>
//     <h1 className='text-5xl  text-indigo-900 p-5 '>Teacher Dashboard</h1>
//     <div className='flex allthebox'>
//       <div className='flex glass ' style={ {  width:"50%" , paddingTop:"3em 5em" , marginRight:' 7em'}}>

//     <form className="create"  onSubmit={handleSubmit } > 
//       <h4 className='text-3xl font-bold'>Add a New Courses</h4>
//       <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
//             You can add new Courses.
//           </span>
// {/* ///////////////////////////////////////////////////////////////////// */}

     
//               <div className='textbox flex flex-col items-center gap-6 '>
//               <input   type={'text'} placeholder='Title' onChange={(e) => setTitle(e.target.value)} 
//                 value={title}
//                 className={emptyFields.includes('title') ? 'error':'' }></input>
//               </div>
// {/* ///////////////////////////////////////////////////////////////////// */}

//                 <div className='textbox flex flex-col items-center gap-6 '>
//                     <input   type={'text'} placeholder='Username' className='textbox01' value={duration}
//                      onChange={(e) => setduration(e.target.value)}></input>
//                 </div>


//                 <div className='textbox flex flex-col items-center gap-6 '>
//                 <input   type={'text'} placeholder='Day' className={ emptyFields.includes('day') ? 'error':''  } value={day} onChange={(e) => setday(e.target.value)} ></input>
//                 </div>
                          
      
// {/* title///////////////////////////////////////////////////////////////////// */}
//               <div className='textbox flex flex-col items-center gap-6'>
//               <input   type={'text'} placeholder='price' className='textbox01' value={price} onChange={(e) => setprice(e.target.value)}></input>
//               </div>
             


      
//       <button>Add Courses</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//     </div></div></div>
//     </>
//   )
// }

// export default CourseForm
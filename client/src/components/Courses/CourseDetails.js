// import {useCoursesContext} from '../../hooks/useCourseContext/useCourseContect'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import { Link } from 'react-router-dom'

// const CoursesDetails = ({ course }) => {

//     const {dispatch}=useCoursesContext()
//       const handleClick =async()=>{
//         const response = await fetch('api/courses/'+course._id,{
//           method:'DELETE'
//         })
//         const json = await response.json()
//         if (response.ok){
//             dispatch({type:'DELETE_COURSE',payload:json})
//         }
//       }

//       const editClick =async()=>{
//         // Perform any necessary validation checks or user prompts
      
//         // Send a PUT request to the API to update the workout data
//         const response = await fetch(`api/courses/${course._id}`, {
//           method: 'PUT'
//         });
//         const json = await response.json()
//         if (response.ok){
//             dispatch({type:'UPDATE_COURSE',payload:json})
//         }
//       }

//       return (
//         <div className="workout-details  ">
//           <div className='relative flex flex-col shadow-lg mb-6'>
//           <h4>{course.email}</h4>
//           <p><strong>Title : </strong>{course.title}</p>
//           <p><strong>Duration : </strong>{course.duration}</p>
//           <p><strong>Day : </strong>{course.day}</p>
//           <p><strong>Price : </strong>{course.price}</p>
          
//           {/* title,duration,day,price */}
//           <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
//           <span  className="material-symbols-outlined span1" onClick={editClick}>edit</span>
//           <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
// </div></div>

          
        


//       )
//   };
  
//   export default CoursesDetails
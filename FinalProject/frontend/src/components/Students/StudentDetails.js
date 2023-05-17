import { Link } from 'react-router-dom'
import {useStudentsContext} from '../../hooks/useStudentContext/useStudentContaxt'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const StudentsDetails = ({ student }) => {

    const {dispatch}=useStudentsContext()
      const handleClick =async()=>{
        const response = await fetch('api/students/'+student._id,{
          method:'DELETE'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type:'DELETE_STUDENT',payload:json})
        }
      }

      const editClick =async()=>{
        // Perform any necessary validation checks or user prompts
      
        // Send a PUT request to the API to update the workout data
        const response = await fetch(`api/students/${student._id}`, {
          method: 'PUT'
        });
        const json = await response.json()
        if (response.ok){
            dispatch({type:'UPDATE_STUDENT',payload:json})
        }
      }

      return ( 
        <div className="workout-details  ">
          <div className='relative flex flex-col shadow-lg mb-6  bg-transparent m-4 p-4 w-full'>
      
          
           <h4>{student.email}</h4>
          <p><strong>First Name: </strong>{student.firstName}</p>
          <p><strong>Last Name: </strong>{student.lastName}</p>
          <p><strong>NIC / Passport: </strong>{student.NIC}</p>
          <p><strong>Username: </strong>{student.userName}</p>
          <p><strong>Address: </strong>{student.address}</p>
          <p><strong>Date of Birth: </strong>{student.dob}</p>
          <p><strong>Mobile Number: </strong>{student.mobile}</p>
          

          <p>{formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}</p>
          
          <span  className="material-symbols-outlined span1" onClick={editClick}><Link to={"/Studentupdate/"+student._id}>edit</Link></span>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>
<div>

</div>
          
        </div>


      )
  }
  
  export default StudentsDetails
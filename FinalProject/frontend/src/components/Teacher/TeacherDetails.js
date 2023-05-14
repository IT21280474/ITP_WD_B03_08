import {useTeachersContext} from '../../hooks/useTeacherContext/useTeacherContaxt'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Link } from 'react-router-dom'

const TeachersDetails = ({ teacher }) => {

    const {dispatch}=useTeachersContext()
      const handleClick =async()=>{
        const response = await fetch('api/teachers/'+teacher._id,{
          method:'DELETE'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type:'DELETE_TEACHER',payload:json})
        }
      }

      const editClick =async()=>{
        // Perform any necessary validation checks or user prompts
      
        // Send a PUT request to the API to update the workout data
        const response = await fetch(`api/teachers/${teacher._id}`, {
          method: 'PUT'
        });
        const json = await response.json()
        if (response.ok){
            dispatch({type:'UPDATE_TEACHER',payload:json})
        }
      }

      return (
        <div className="workout-details  ">
          <div className='relative flex flex-col shadow-lg mb-6'>
          <table className=' block bg-transparent m-4 p-4 w-full'>
          <thead>
            <tr className='border bpder-solid boder-l-0'>
              <th className='text-md px-6 py-1'>Email</th>
              <th className='text-md px-6 py-1'>Username : </th>
              <th className='text-md px-6 py-1'>department :</th>
              <th className='text-md px-6 py-1'>gender :</th>
              <th className='text-md px-6 py-1'>password :</th>
              {/* <th className='text-md px-6 py-1'>Mobile Number</th> */}
              <th className='text-md px-6 py-1'>Since</th>
              <th className='text-md px-6 py-1'></th>
              <th className='text-md px-6 py-1' > <p>                 </p> </th>
            </tr>
          </thead>
          {/*Username, email, password, department,gender*/}
          
          {/* <h4>{student.email}</h4>
          <p><strong>First Name: </strong>{student.firstName}</p>
          <p><strong>Last Name: </strong>{student.lastName}</p>
          <p><strong>NIC / Passport: </strong>{student.NIC}</p>
          <p><strong>Username: </strong>{student.userName}</p>
          <p><strong>Address: </strong>{student.address}</p>
          <p><strong>Date of Birth: </strong>{student.dob}</p>
          <p><strong>Mobile Number: </strong>{student.mobile}</p>

          <p>{formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}</p>
          <span  className="material-symbols-outlined span1" onClick={editClick}>edit</span>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>
<div> */}

          {/*Username, email, password, department,gender*/}

          <tbody>
            <tr className='border bpder-solid boder-l-0'>
              <td className='text-md px-6 py-1'>{teacher.email}</td>
              <td className='text-md px-6 py-1'>{teacher.Username}</td>
              <td className='text-md px-6 py-1'>{teacher.department}</td>
              <td className='text-md px-6 py-1'>{teacher.gender}</td>
              <td className='text-md px-6 py-1'>{teacher.password}</td>
              {/* <td className='text-md px-6 py-1'>{teacher.mobile}</td> */}
              
              <td className='text-md px-6 py-1'><p>{formatDistanceToNow(new Date(teacher.createdAt), { addSuffix: true })}</p></td>
              {/* <td className='text-md px-6 py-1'><span  className="material-symbols-outlined span1" onClick={editClick}>edit</span></td>
              <td className='text-md px-6 py-1'><span className="material-symbols-outlined" onClick={handleClick}>delete</span></td>  */}
          
          
            </tr>
          </tbody>

        </table>
</div>
          
        </div>


      )
  }
  
  export default TeachersDetails
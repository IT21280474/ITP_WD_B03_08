import { useCoursesContext } from '../hooks/useCoursesContext'

import { useNavigate } from 'react-router-dom';


//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetails = ({course}) =>{
    const { dispatch } = useCoursesContext()
    const navigate = useNavigate()
    const handleClick = async () => {
        const response = await fetch('/api/courses/' + course._id, {
            method: 'DELETE'
        }) 
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_COURSE', payload: json})
        }
    }
    const handleClickUpdate = async (id) => {
       navigate(`/updateCourse/${id}`)
    }

    
    return(
    <div className="course-details">
        <h4>{course.title}</h4>
        <p><strong>Duration (months) :</strong> {course.duration}</p>
        <p><strong>Day :</strong>{course.day}</p>
        <p><strong>Price ($) :</strong> {course.price}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt),{addSuffix: true})}</p>
        <button className="material-symbols-outlined" onClick={handleClick}>delete</button>
        <button className="material-symbols-outlined" onClick={() => handleClickUpdate(course._id)}>update</button>
        
    </div>
    )
}
export default CourseDetails
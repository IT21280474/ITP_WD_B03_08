import { useEffect } from "react"
import { useTeachersContext } from "../../hooks/useTeacherContext/useTeacherContaxt"
import TeacherNav from "../../components/teachercom/navbar/navbar.component"

// components
import TeacherDetails from "../../components/Teacher/TeacherDetails"
import TeacherForm from "../../components/Teacher/TeacherForm"

const Teacher = () => {
  const { teachers, dispatch } = useTeachersContext()
  
  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch('/api/teachers')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_TEACHERS', payload: json})
      }
    }

    fetchTeachers()
  }, [dispatch])

  return (
    <div className="home">
    <ul><li>
      <TeacherForm /></li><hr/>
      <li>
         {teachers && teachers.map(teacher => (
          <TeacherDetails teacher={teacher} key={teacher._id} />
        ))} </li>
        <li>
        <TeacherNav/>
          </li></ul>
      </div>
      
     
     
  )
}

export default Teacher
import { useEffect } from "react"
import { useStudentsContext } from "../../hooks/useStudentContext/useStudentContaxt"
import StudentNav from "../../components/studentcom/navbar/navbar.component"

// components
import StudentDetails from "../../components/Students/StudentDetails"
import StudentForm from "../../components/Students/StudentForm"

const Student = () => {
  const { students, dispatch } = useStudentsContext()
  
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/api/students')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_STUDENTS', payload: json})
      }
    }

    fetchStudents()
  }, [dispatch])

  return (  
    <StudentNav/>
  )
}

export default Student
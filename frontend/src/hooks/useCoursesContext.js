import { CoursesContext } from "../context/CourseContext"
import { useContext } from "react"

export const useCoursesContext = () => {
    const context = useContext(CoursesContext)

    if (!context){
        throw Error('useCourseContext must be used inside an useCourseContextProvider')
    }

    return context
} 

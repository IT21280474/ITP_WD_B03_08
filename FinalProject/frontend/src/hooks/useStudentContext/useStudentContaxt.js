import { StudentsContext } from "../../context/studentContext/studentContext"
import { useContext } from "react"

export const useStudentsContext = () => {
  const context = useContext(StudentsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}
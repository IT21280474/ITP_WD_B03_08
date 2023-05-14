import { TeachersContext } from "../../context/teacherContext/teacherContext"
import { useContext } from "react"

export const useTeachersContext = () => {
  const context = useContext(TeachersContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}
import { MeterialsContext } from "../context/MeterialContext"
import { useContext } from "react"

export const useMeterialsContext = () => {
    const context = useContext(MeterialsContext)

    if (!context){
        throw Error('useMeterialContext must be used inside an useMeterialContextProvider')
    }

    return context
} 

import { NotificationsContext } from "../context/NotificationContext"
import { useContext } from "react"

export const useNotificationsContext = () => {
    const context = useContext(NotificationsContext)

    if (!context){
        throw Error('useNotificationContext must be used inside an useNotificationContextProvider')
    }

    return context
} 

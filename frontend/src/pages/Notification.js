import {useEffect} from 'react'
import {useNotificationsContext} from "../hooks/uesNotificationsContext"



//components
import NotificationDetails from '../components/NotificationDetails'
import NotificationForm from '../components/NotificationForm'

const Home = () => {
    const {notifications, dispatch} = useNotificationsContext()

    useEffect(() => {
        const fetchNotifications = async () =>{
            const response = await fetch('/api/notifications')
            const json = await response.json()

            if (response.ok){
               dispatch({type: 'SET_NOTIFICATIONS', payload: json})

            }

        }
        fetchNotifications()
    }, )
    
    return (
        <div className="home">
            <NotificationForm/>
            <div className="notifications">
                {notifications && notifications.map((notification) => (
                    <NotificationDetails key={notification._id} notification={notification}/>

                ))}

            </div>
           
            
        </div>

    )
}
export default Home
import { useNotificationsContext } from '../hooks/uesNotificationsContext'

import { useNavigate } from 'react-router-dom';


//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const NotificationDetails = ({notification}) =>{
    const { dispatch } = useNotificationsContext()
    const navigate = useNavigate()
    const handleClick = async () => {
        const response = await fetch('/api/notifications/' + notification._id, {
            method: 'DELETE'
        }) 
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_METERIAL', payload: json})
        }
    }
    const handleClickUpdate = async (id) => {
       navigate(`/updateNotification/${id}`)
    }
    return(
    <div className="notification-details">
        <h4>{notification.headline}</h4>
        <p><strong>Details :</strong> {notification.details}</p>
        <p>{formatDistanceToNow(new Date(notification.createdAt),{addSuffix: true})}</p>
        <button className="material-symbols-outlined" onClick={handleClick}>delete</button>
        <button className="material-symbols-outlined" onClick={() => handleClickUpdate(notification._id)}>update</button>
        
    </div>
    )
}
export default NotificationDetails
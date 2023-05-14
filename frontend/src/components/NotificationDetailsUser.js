import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const NotificationDetails = ({notification}) =>{
    
    return(
    <div className="notification-details">
        <h4>{notification.headline}</h4>
        <p><strong>Details :</strong> {notification.details}</p>
        <p>{formatDistanceToNow(new Date(notification.createdAt),{addSuffix: true})}</p>
        
        
    </div>
    )
}
export default NotificationDetails
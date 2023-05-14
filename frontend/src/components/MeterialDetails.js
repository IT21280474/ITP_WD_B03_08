import { useMeterialsContext } from '../hooks/useMeterialsContext'

import { useNavigate } from 'react-router-dom';


//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MeterialDetails = ({meterial}) =>{
    const { dispatch } = useMeterialsContext()
    const navigate = useNavigate()
    const handleClick = async () => {
        const response = await fetch('/api/meterials/' + meterial._id, {
            method: 'DELETE'
        }) 
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_METERIAL', payload: json})
        }
    }
    const handleClickUpdate = async (id) => {
       navigate(`/updateMeterial/${id}`)
    }
    return(
    <div className="meterial-details">
        <h4>{meterial.title}</h4>
        <p><strong>Content :</strong> {meterial.content}</p>
        <p>{formatDistanceToNow(new Date(meterial.createdAt),{addSuffix: true})}</p>
        <button className="material-symbols-outlined" onClick={handleClick}>delete</button>
        <button className="material-symbols-outlined" onClick={() => handleClickUpdate(meterial._id)}>update</button>
        
    </div>
    )
}
export default MeterialDetails
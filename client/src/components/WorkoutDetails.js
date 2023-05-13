import {useWorkoutsContext} from '../hooks/useWorkoutContaxt'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({ workout }) => {

    const {dispatch}=useWorkoutsContext()
      const handleClick =async()=>{
        const response = await fetch('api/workouts/'+workout._id,{
          method:'DELETE'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json})
        }
      }

      const editClick =async()=>{
        // Perform any necessary validation checks or user prompts
      
        // Send a PUT request to the API to update the workout data
        const response = await fetch(`api/workouts/${workout._id}`, {
          method: 'PUT'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type:'UPDATE_WORKOUT',payload:json})
        }
      }

      return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Number of reps: </strong>{workout.reps}</p>
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          <span  className="material-symbols-outlined span1" onClick={editClick}>edit</span>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      )
  }
  
  export default WorkoutDetails
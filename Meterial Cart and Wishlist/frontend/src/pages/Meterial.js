import {useEffect} from 'react'
import {useMeterialsContext} from "../hooks/useMeterialsContext"

//components
import MeterialDetails from '../components/MeterialDetails'
import MeterialForm from '../components/MeterialForm'
import "./meterial.css"

const Home = () => {
    const {meterials, dispatch} = useMeterialsContext()

    useEffect(() => {
        const fetchMeterials = async () =>{
            const response = await fetch('/api/meterials')
            const json = await response.json()

            if (response.ok){
               dispatch({type: 'SET_METERIALS', payload: json})

            }

        }
        fetchMeterials()
    }, )
    
    return (
        <div className="home">
            <MeterialForm/>
            <div className="meterials">
                {meterials && meterials.map((meterial) => (
                    <MeterialDetails key={meterial._id} meterial={meterial}/>

                ))}

            </div>
            
            
        </div>

    )
}
export default Home
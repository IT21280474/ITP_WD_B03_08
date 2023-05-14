import React, {createContext, useReducer} from 'react'

export const MeterialsContext = createContext() 

export const meterialsReducer = (state, action) => {
    switch(action.type){
        case 'SET_METERIALS':
            return {
                meterials: action.payload
            }
        case 'CREATE_METERIAL':
            return {
                meterials: [action.payload, ...state.meterials]
            }
        case 'DELETE_METERIAL':
            return{
            meterials: state.meterials.filter((w) => w._id !== action.payload._id)
            }    
        default:
            return state
    }
}
 
export const MeterialsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(meterialsReducer, {
        meterials: null
    })

    

    return(
    <MeterialsContext.Provider value={{...state, dispatch}}>
        { children }
    </MeterialsContext.Provider>
    )
}
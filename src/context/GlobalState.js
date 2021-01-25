import React, { createContext, useReducer  } from 'react'
import globalReducer from './reducers';

export const AppState = createContext()

const GlobalStateProvider = ({children}) => {

    const userInStoreage = JSON.parse(localStorage.getItem("JOURNAL_USER"))
    const initialState = { user :  userInStoreage ? userInStoreage : {}, journal : [], message : {}, featuredEntry : {}}
    const [ state, dispatch ] = useReducer(globalReducer, initialState)


    return (
        <AppState.Provider value = {{state, dispatch}}>
            {children}
        </AppState.Provider>
    )
}

export default GlobalStateProvider

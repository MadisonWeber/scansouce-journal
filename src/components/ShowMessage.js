import React, { useContext } from 'react'
import { AppState } from "../context/GlobalState"
import "../css/showmessage.css"
import { ACTIONS } from "../context/actions"


const ShowMessage = () => {

    const { state, dispatch } = useContext(AppState)
    const { message } = state

    const clearMessage = ()=>{
        dispatch({type : ACTIONS.SET_MESSAGE, payload : {}})
    }

    if( !message.message && !message.error) return null

    return (
        <div className = 'show__message'>
            {message.error && <p style = {{color : 'tomato'}}>{message.error}</p> }
            {message.message && <p style = {{color : 'palegreen'}}>{message.message}</p> }
            <i className = 'fas fa-times' onClick = {clearMessage}></i>
        </div>
    )
}

export default ShowMessage

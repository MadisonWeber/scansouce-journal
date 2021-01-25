import React, { useContext, useEffect } from 'react'
import "../css/readentry.css"
import { AppState } from "../context/GlobalState"
import { ACTIONS } from "../context/actions"

const ReadEntry = () => {

    const { state, dispatch } = useContext(AppState)
    const { featuredEntry } = state


    const clearFeature = () => {
        dispatch({type : ACTIONS.SET_FEATURED, payload : {}})
    }



    useEffect(() => {

        const exitIfOutside = (e) => {
            if(e.srcElement.className === 'read__entry'){
                return dispatch({type : ACTIONS.SET_FEATURED, payload : {}})
            }
            return 
        }
        
        window.scrollTo(0, 0);
        document.addEventListener('click', exitIfOutside)

        return ()=> document.removeEventListener('click', exitIfOutside)

    },[dispatch])

   

    return (
        <div className = 'read__entry'>
            <div className="read__entry__container">
                <h1>{featuredEntry.title}</h1>
                <small>{featuredEntry.date}</small>
                <p>{featuredEntry.content}</p>
                <div>
                    {featuredEntry.tags.map((tag) => (
                        <span key = {tag}>{tag} </span>
                    ))}
                </div>
                <i className="fas fa-times" onClick = {clearFeature}></i>
            </div>
        </div>
    )
}

export default ReadEntry

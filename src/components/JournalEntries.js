import React, { useContext } from 'react'
import "../css/journalentries.css"
import { ACTIONS } from "../context/actions"
import { AppState } from "../context/GlobalState"

const JournalEntries = () => {
    
    const { state, dispatch} = useContext(AppState)
    const { journal , currentlyEdit } = state

    const cropText = (str) => {
        const newText = str.slice(0, 36) + '...'
        return newText
    }


    if(journal.length === 0){
        return (
            <div className ='journal__entries' style= {{display: 'flex', alignItems : 'center', justifyContent : 'center', fontSize : '18px'}}>
                <span>You have no journal entries yet..</span>
            </div>
        )
    }

    const handleReadJournal = (entry) => {
        if(currentlyEdit) return dispatch({type : ACTIONS.SET_MESSAGE, payload :{error : 'Cannot view post while editing'}})
        dispatch({type : ACTIONS.SET_FEATURED, payload : entry })
    }

    const handleEdit = (entry) => {
        dispatch({type : ACTIONS.EDIT_ENTRY, payload : entry})
        dispatch({type : ACTIONS.TOGGLE_EDIT, payload : true})

    }

    return (
        <div className ='journal__entries'>
            <h3>Your Journal Entries</h3>
            {
                journal.map(entry => (
                    <div className = 'entry' key = {entry.id}>
                        <div className = 'entry__left'>
                            <h4 className = 'entry__title'>{entry.title}</h4>
                            <small className = 'entry__date'>{entry.date}</small>
                            <p>{entry.tags.map(tag => <span className = 'tag' key = {tag}>{tag}</span>)}</p>
                        </div>
                        <p className = 'entry__middle'>{ cropText(entry.content)} </p>
                        <i className="fas fa-book-open entry__right" onClick ={() =>handleReadJournal(entry)} > Read</i>
                        <i className="fas fa-edit entry__right" onClick = {()=> handleEdit(entry)}>Edit</i>
                    </div>
                ))
            }
        </div>
    )
}

export default JournalEntries

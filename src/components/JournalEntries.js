import React from 'react'
import "../css/journalentries.css"
import { ACTIONS } from "../context/actions"


const JournalEntries = ({journal, dispatch}) => {


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
        dispatch({type : ACTIONS.SET_FEAUTURED, payload : entry })
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
                    </div>
                ))
            }
        </div>
    )
}

export default JournalEntries

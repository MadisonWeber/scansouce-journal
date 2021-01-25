import React, { useContext } from 'react'
import Title from './Title'
import { AppState } from '../context/GlobalState'
import "../css/journal.css"
import JournalEntries from '../components/JournalEntries'
import JournalAdd from '../components/JournalAdd'

import { ACTIONS } from '../context/actions'

const Journal = () => {

    const { state, dispatch } = useContext(AppState)

    const { user } = state

    const handleLogout = () => {
        localStorage.removeItem('JOURNAL_USER');
        dispatch({type : ACTIONS.SET_USER, payload : {}});
        dispatch({type : ACTIONS.CLEAR_JOURNAL})
    }

    return (
        <div className = 'journal'>
            <Title />
            <h3 className = 'welcome'>Welcome to Your Journal <span>{user.username}.</span></h3>
            <JournalEntries />
            <JournalAdd />
            <button className = 'logout' onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Journal

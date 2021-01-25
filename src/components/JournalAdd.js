import React, { useState, useContext } from 'react';
import '../css/journaladd.css';
import { AppState } from "../context/GlobalState"
import { ACTIONS } from "../context/actions"
import { v4 as uuidv4 } from 'uuid';


const JournalAdd = () => {

    const { dispatch } = useContext(AppState)

    const [title, setTitle ] = useState('')
    const [content, setContent ] = useState('')
    const [ tags, setTags ] = useState('')

    const clearAddJournal = () =>{
        setTitle('')
        setContent('')
        setTags('')
    }

    const handleTags = (str) => {
        if(!str.includes('#')) return []

        const tagArr = str.split(' ').map( tag => {
            return tag.trim()
        }).filter(tag => tag.length > 1 && tag.startsWith('#'))

        return tagArr 
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.length <= 3 || content.length <=3) return  dispatch({type : ACTIONS.SET_MESSAGE, payload : {error : "Journal entry must have valid title and content"}})

        const journalEntry = {
            id: uuidv4(),
            title,
            content,
            date : new Date().toDateString(),
            tags: handleTags(tags),
        }

        dispatch({type : ACTIONS.UPDATE_JOURNAl, payload : journalEntry})
        dispatch({type : ACTIONS.SET_MESSAGE, payload : {message : 'Journal Added!'}})
        clearAddJournal()
    }   

    return (
        <div className = 'journal__add'>
                <h3>Add A Journal Entry Here!</h3>
            <form className = 'add__form' onSubmit = {handleSubmit}>
                <label htmlFor="title" >Journal Title</label>
                <input type="text" name = "title" title = "title" id = 'title' placeholder = "Journal title" value = {title} onChange = {(e) => setTitle(e.currentTarget.value)} maxLength = "40"/>
                <label htmlFor="content" >Journal Content</label>
                <textarea type="text" id = "content" name = "content" title = "content" placeholder = "Journal Content" value = {content} onChange = {(e) => setContent(e.currentTarget.value)}/>
                <label htmlFor="tags" >Keyword Tags<small style = {{marginLeft : '15px', color : 'palegreen'}}>--Must have # in front--</small></label>
                <input type="text" name = "tags" title = "tags" id = 'tags' placeholder = "Journal Tags" value = {tags} onChange = {(e) => setTags(e.currentTarget.value)} />
                <button className = 'submit__journal' aria-label = 'submit journal entry'><i className = 'fas fa-plus'/></button>
            </form>
        </div>
    )
}

export default JournalAdd

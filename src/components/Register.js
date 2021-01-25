import React, { useState, useContext } from 'react';
import "../css/register.css";
import Title from './Title'
import { AppState } from '../context/GlobalState'
import valid from '../utils/valid'
import { ACTIONS } from '../context/actions'

const Register = () => {

    const initialState = { name : '', username : '', password : '',  bio : ''}

    const [ formState, setFormState ] = useState(initialState)

    const { name, username, password, bio } = formState

    const { dispatch } = useContext(AppState)

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = valid(name, username, password, bio)
        if(msg){
         clearForm()
         return dispatch({type : ACTIONS.SET_MESSAGE , payload : {error : msg}})
        }    

        const newUser = { name, username, password, bio}
        dispatch({type : ACTIONS.SET_USER, payload: newUser })
        localStorage.setItem('JOURNAL_USER', JSON.stringify(newUser))
        clearForm()
    }

    const handleChange = (e) => {
        const { name, value} = e.target
        setFormState({...formState ,[name] : value}) 
    }

    const clearForm = () => {
        setFormState(initialState)
    }

    return (
        <div className = 'register'>
            <Title />
            <form className="register__container" onSubmit = {handleSubmit}>
                <h4 className = 'form__title'>Fill in to Register!</h4>
                <input type="text" name = 'name' placeholder = 'name' title = 'name' value = {name} onChange = {handleChange}/>
                <input type="text" name = 'username' placeholder = 'username' title = 'username' value = {username} onChange = {handleChange}/>
                <input type="password" name = 'password' placeholder = 'password' title = 'password' value = {password} onChange = {handleChange}/>
                <input type="text" name = 'bio' placeholder = 'A bit about yourself...' title = 'User Bio' value = {bio} onChange = {handleChange}/>
                <button className = 'form__send'>Register Now!</button>
            </form>
        </div>
    )
}

export default Register

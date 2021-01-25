import { ACTIONS } from './actions'

const globalReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_USER:
            return {...state, user : action.payload }
        case ACTIONS.UPDATE_JOURNAl:
            return {...state, journal : [action.payload , ...state.journal]}
        case ACTIONS.CLEAR_JOURNAL:
            return {...state, journal : []}
        case ACTIONS.SET_MESSAGE:
            return {...state, message : action.payload}
        case ACTIONS.SET_FEATURED:
            return { ...state, featuredEntry : action.payload}
        case ACTIONS.EDIT_ENTRY:
            return {...state, editEntry : action.payload}
        case ACTIONS.UPDATE_EDIT:
            let updatedJournal = state.journal.map( journal => {
                if(journal.id === action.payload.id) return action.payload
                return journal
            })
            return {...state, journal : updatedJournal}
        case ACTIONS.TOGGLE_EDIT:
            return{ ...state, currentlyEdit : action.payload}
        default:
            return state
    }
}

export default globalReducer
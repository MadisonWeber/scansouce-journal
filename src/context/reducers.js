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
        case ACTIONS.SET_FEAUTURED:
            return { ...state, featuredEntry : action.payload}
        default:
            return state
    }
}

export default globalReducer
import { userDetail } from '../Actions/actionLogin'

const initialstate = {
    Data: ''
}

export function homeDataReducer(state = initialstate, action) {
    switch (action.type) {

        case 'dashboard':
            return {
                ...state,
                Data: action.payload
            }
        default:
            return state
    }
}
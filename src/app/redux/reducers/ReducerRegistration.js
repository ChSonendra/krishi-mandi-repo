import { saveToken } from '../Actions/actionRegistration'

const initialState = { token: '' };

export function keycloakTokenReducer(state = initialState, action) {

    switch (action.type) {
        case 'saveToken':
            return {
                ...state,
                token: action.payload
            }
        case 'remover':
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}
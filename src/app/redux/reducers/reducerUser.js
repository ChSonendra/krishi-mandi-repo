

const initialstate = {
    user: ''
}

export function userDataReducer(state = initialstate, action) {
    switch (action.type) {

        case 'Detail':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
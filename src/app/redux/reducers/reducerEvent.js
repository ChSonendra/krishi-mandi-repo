
const initialstate = {
    list: ''
}

export function eventDataReducer(state = initialstate, action) {
    switch (action.type) {

        case 'events':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
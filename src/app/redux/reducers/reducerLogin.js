import { userDetail } from '../Actions/actionLogin'
import StorageConstant from '../../../utils/values/StorageConstant'
const initialstate = {
    userData: ''
}

export function loginDataReducer(state = initialstate, action) {
    switch (action.type) {

        case 'userDetail':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}
import { combineReducers } from 'redux';

import { keycloakTokenReducer } from './ReducerRegistration';
import { loginDataReducer } from './reducerLogin'
import { homeDataReducer } from './reducerDashboard';
import { userDataReducer } from './reducerUser';
import { eventDataReducer } from './reducerEvent';

const appReducer= combineReducers({
    authToken: keycloakTokenReducer,
    userData: loginDataReducer,
    Data:homeDataReducer,
    Detail:userDataReducer,
    list:eventDataReducer
});
const rootReducer = (state, action) => {
    if (action.type === 'CLEARSTORE') {
      state = undefined
    }

     return appReducer(state, action)
   }
export default rootReducer
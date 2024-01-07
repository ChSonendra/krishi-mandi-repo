import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers'; // the value from combineReducers
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {};
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const middleware = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, initialState, applyMiddleware(...middleware));
export const persistor = persistStore(store);
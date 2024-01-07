
import HttpService from "./HttpService";
import ServerConstants from "../../utils/values/ServerConstant";
import { store } from '../redux/store'
import { ErrorUtils } from './ErrorHandler'
import { CLEARSTORE } from "../redux/Actions/actionLogout";
import {events} from '../redux/Actions/actionEvents';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default AppService = {

    /** Method to call Http API
   * @param functionName name of th API 
   * @param params json data
   * @param methodType type of the http
   * @returns response of the API
   */

    async ApiHandler(functionName, params, methodType) {
        let result = await HttpService.callFetch(functionName, params, methodType)
        console.log("api", result);
        switch (result.responseCode) {
            case ServerConstants.SUCCESS:
                return result;
   
        }
        throw new Error(result.message)

    },

    async ApiHandlerPost(functionName, params, methodType) {
        let result = await HttpService.callFetch(functionName, params, methodType)
        // AsyncStorage.setItem("api", JSON.stringify(result));
        store.dispatch(events(response))
            return result
    
    },

    /** Method to call Get Http API
    * @param functionName name of th API 
    * @param params json data
    * @returns response of the API
    */

    async ApiHandlerGet(functionName, params) {
        let result = await HttpService.callFetchGet(functionName, params)
        console.log("api", result);
        switch (result.responseCode) {
            case ServerConstants.SUCCESS:
                return result.data;
            // case ServerConstants.Token_Expired:
            //     store.dispatch(CLEARSTORE())
            //     const newError = new ErrorUtils(result, "Error");
            //     newError.showAlert();
            // default:
            //     const defaultError = new ErrorUtils(result, "Error");
            //     defaultError.showAlert();
            //     break;
        }
        throw new Error(result.message)

    },

    /** Method to call delete Http API
    * @param functionName name of th API 
    * @param params json data
    * @returns response of the API
    */

    async ApiHandlerDelete(functionName) {
        let result = await HttpService.callFetchDelete(functionName)
        if (result.responseCode == ServerConstants.SUCCESS) {
            return result.data;
        } else {
            throw new Error(result.message)
        }
    },

    /** Method to Check Logged inn user
   * @param params json data
   * @returns logged in status
   */


    async isLoggedIn() {
        const state = store.getState();
        const authToken = state.userData?.userData?.email
        return authToken ? true : false;

    },
    async isLoggedOut() {
        store.dispatch(CLEARSTORE())

    }

}
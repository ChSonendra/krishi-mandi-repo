import baseUrl from "../../utils/environment/Environment";
// import AsyncStorageItem from "./AsyncStorage";
import StorageConstants from "../../utils/values/StorageConstant";
import ServerConstants from "../../utils/values/ServerConstant";
import { store } from '../redux/store'
import {userDetail} from '../redux/Actions/actionLogin';


export default HttpService = {

    /** Method to call http API
     * @param functionName name of th API 
     * @param params json data
     * @param methodType type of the http
     * @returns response of the API
     */

    async callFetch(functionName, params, methodType) {
        console.log("url", baseUrl);
        try {
            // const state = store.getState();
            // const jwt_token = state.userData?.userData?.jwttoken
            // let userToken = await AsyncStorageItem.getData(StorageConstants.Auth);
            // let language = await AsyncStorageItem.getData(StorageConstants.Language);
            let response = await fetch(baseUrl + functionName, {
                method: methodType,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${jwt_token}`,
                    // 'lang': language
                },
                body: JSON.stringify(
                    params,
                ),
            })
            console.log(response);
            if (response.status == ServerConstants.Unauthorized) {
                this.setLoginSubject(false);
            }
            let responseJson = await response.json();
            console.log(responseJson);
            
        // store.dispatch(userDetail(responseJson));
            return responseJson;
        }
        catch (error) {
            throw new Error(error);
        }
    },

    /** Method to call GET http API
     * @param functionName name of th API 
     * @param params json data
     * @returns response of the API
     */

    async callFetchGet(functionName, params) {
        try {
          
            // let userToken = await AsyncStorageItem.getData(StorageConstants.Auth);
            // let language = await AsyncStorageItem.getData(StorageConstants.Language);
            let newParams;
            let response;
            if (params && params.length != 0) {
                newParams = new URLSearchParams(params)
                response = await fetch(baseUrl + functionName + '?' + newParams, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${jwt_token}`,
                        // 'lang': language
                    },
                })
            } else {
                response = await fetch(baseUrl + functionName, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${jwt_token}`,
                        // 'lang': language
                    },
                })
            }
            if (response.status == ServerConstants.Unauthorized) {
                this.setLoginSubject(false);
            }
            let responseJson = await response.json();
            return responseJson;

        } catch (error) {
            throw new Error(error);
        }
    },

    /** Method to call delete http API
     * @param functionName name of th API 
     * @param params json data
     * @returns response of the API
     */

    async callFetchDelete(functionName) {
        try {

            // let userToken = await AsyncStorageItem.getData(StorageConstants.Auth);
            // let language = await AsyncStorageItem.getData(StorageConstants.Language);
            let response = await fetch(baseUrl + functionName, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': userToken,
                    // 'lang': language
                },
            })
            if (response.status == ServerConstants.Unauthorized) {
                this.setLoginSubject(false);
            }
            let responseJson = await response.json();
            return responseJson;
        }
        catch (error) {
            throw new Error(error);
        }
    },

    /**
     * get login status
     * @returns Observable
     */
    isLoggedIn: () => {
        return isLoginSubject.asObservable();
    },

    /**
    * Set login status
    * @val to set login object
    */
    setLoginSubject(val) {
        isLoginSubject.next(val);
    }
}


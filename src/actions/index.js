import {
    LOGIN,
    LOADING_START,
    LOADING_END
} from './types'
import Axios from 'axios';

export function LoginAction(credentials) {
    let { username, password } = credentials;
    
    return dispatch => {
        console.log("username, password", username, password);
        dispatch({ "type": LOADING_START });
        Axios({
            url: 'http://192.168.104.4:5858/user/login',
            method: 'post',
            data: { "user_email": username, "user_password": password }
        })
        .then(loginResult=>{
            console.log("loginResult", loginResult.data);
            if(loginResult.hasOwnProperty('data') && loginResult.data.success){
                dispatch({ "type": LOADING_END });
                dispatch({ "type": LOGIN, "user": loginResult.data });
            }
        })
        .catch(loginError=>{
            dispatch({ "type": LOADING_END });
            dispatch({ "type": "ERROR", "error": loginError.response.data.error });
        })
        
    };
};
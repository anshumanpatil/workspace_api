import {
    LOGIN,
    LOADING_START,
    LOADING_END
} from './types'
import Axios from 'axios';

let API_URL = process.env.REACT_APP_API_URL;
let PORT = process.env.REACT_APP_API_PORT;

export function LoginAction(credentials) {
    let { username, password } = credentials;
    console.log(`${API_URL}:${PORT}/user/login`)
    return dispatch => {
        console.log("username, password", username, password);
        dispatch({ "type": LOADING_START });
        Axios({
            url: `${API_URL}:${PORT}/user/login`,
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
            console.log("loginError",loginError)
            dispatch({ "type": LOADING_END });
            dispatch({ "type": "ERROR", "error": loginError.response.data.error });
        })
        
    };
};
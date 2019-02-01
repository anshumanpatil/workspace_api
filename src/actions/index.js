import {
    LOGIN
} from './types'

export function LoginAction(credentials) {
    let { username, password } = credentials;
    return dispatch => {
        dispatch({ type: LOGIN, credentials });
    };
};
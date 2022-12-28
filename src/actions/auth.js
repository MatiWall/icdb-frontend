import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    LOGOUT,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL
} from './types';

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
                'Accept':  'application/json'
            }
        };
        try{
            const res = await axios.get(
                process.env.REACT_APP_API_URL +  process.env.USER_INFO_URL,
                config
            )
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
            dispatch(load_user());
        } catch (err) {
            dispatch({type: USER_LOADED_FAIL});
        };
    }
    else {
        dispatch({type: USER_LOADED_FAIL});
    };
}

export const login = (email, password) => async dispatch =>  {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body =  {
        email: email,
        password: password
    };

    try{
        const res = await axios.post(
            process.env.REACT_APP_API_URL +  process.env.USER_LOGIN_URL,
            body,
            config
        )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({type: LOGIN_FAIL})
    };
};



export const logout = () => async dispatch =>  {
    dispatch({
            type: LOGOUT
    })

};

export const delete_user = () => async dispatch => {

    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
                'Accept':  'application/json'
            }
        };

        const body = {
            'current_password': 'thisismyuser'
        }
        try{
            const res = await axios.delete(
                process.env.REACT_APP_API_URL +  process.env.USER_INFO_URL,
                body,
                config, 
            );
            dispatch({
                type: USER_DELETE_SUCCESS,
            })
        } catch (err) {
            dispatch({type: USER_DELETE_FAIL});
        };
    }
    else {
        dispatch({type: USER_DELETE_FAIL});
    };

};


export const activate_user = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = { uid, token };
    try {
        await axios.post(process.env.REACT_APP_API_URL + process.env.USER_ACTIVATE_URL, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};
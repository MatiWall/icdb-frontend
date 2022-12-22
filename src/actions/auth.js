import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS
} from './types';

export const load_user = () => async dispatch => {
    if   (localStorage.getItem('access')) {
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

// TODO: async dispatch
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
        console.log(process.env.REACT_APP_API_URL +  process.env.USER_LOGIN_URL);
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
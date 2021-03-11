import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';
import Swal from 'sweetalert2';

export const login = ( email, password) => {
    return async (dispatch) => {
        
        const resp = await fetchSinToken('login', {email,password}, 'POST');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( loginStart({
                _id: body._id,
                nombre: body.nombre
            }))
        }
    }
}
/*
export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( loginStart({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}*/

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'login/renew' );
        const body = await resp.json();

        //console.log(body);

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( loginStart({
                _id: body._id,
                nombre: body.nombre
            }) );
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const loginStart = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })
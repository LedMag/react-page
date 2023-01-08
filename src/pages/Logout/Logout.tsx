import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from 'redux/constans';
import { redirect } from 'react-router-dom';
import { logout } from 'redux/actions/actionCreator';

const Logout = (): JSX.Element => {
    
    const dispatch = useDispatch();
    
    useEffect( () => {
        document.cookie = '';
        dispatch(logout());
        redirect('/');
    }, [dispatch])

    return <></>
}

export default Logout;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from 'redux/constans';
import { redirect } from 'react-router-dom';

const Logout = (): JSX.Element => {
    
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch({type: LOGOUT});
        redirect('/');
    }, [dispatch])

    return <></>
}

export default Logout;
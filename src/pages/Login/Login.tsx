import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { setLoginForm } from 'redux/actions/actionCreator';
import { GET_USER } from 'redux/constans';
import { Form, Input, Label, Button } from './LoginStyle';

const Login = (): JSX.Element => {
    const form: HTMLFormElement = document.querySelector('#login') as HTMLFormElement;

    const dispatch = useDispatch();

    const { email, password }: { email: string, password: string } = useSelector( (store: any) => {
        return {
            email: store.loginForm.email,
            password: store.loginForm.password,
        }
    });

    const getLoginForm = (form: any) => {
        if(!form) return;
        const loginInputs: any = {};
        form.forEach( (defaultValue: string | number, key: string) => {
            loginInputs[key] = defaultValue;
        })
        return loginInputs;
    }

    const handleChange = (data: { email: string, password: string }) => {
        dispatch(setLoginForm(data));
    }

    const handleSubmit = () => {
        dispatch({type: GET_USER});
        dispatch(setLoginForm({email: '', password: ''}));
        form.reset();
    }

    return (
            <Form id='login' 
                onChange={ (event) => {
                    event.preventDefault();
                    const formData = form ? new FormData(form) : null;

                    handleChange(getLoginForm(formData))
                }} 
                onSubmit={ async (event) => {
                    event.preventDefault();
                    handleSubmit();
            }}>
                <Label />
                <FormattedMessage id='email' />
                <Input name='email' defaultValue={email} />
                <FormattedMessage id='password' />
                <Input name='password' defaultValue={password} type='password' />

                <Button type='submit' >Submit</Button>
            </Form>
        )
}

export default Login;
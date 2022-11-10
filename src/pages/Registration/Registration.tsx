import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationForm } from 'redux/actions/actionCreator';
import { POST_USER } from 'redux/constans';
import { Form, Input, Label } from './RegistrationStyle';

interface IRegistrationForm {
    name: string;
    surname: string;
    email: string;
    role: string;
    password: string;
    password_confirmation: string;
}

const Registration = (): JSX.Element => {
    const form: HTMLFormElement | null = document.querySelector('#registration');

    const dispatch = useDispatch();

    const { email, password }: IRegistrationForm = useSelector( (store: any) => {
        return {
            name: store.registrationForm.name,
            surname: store.registrationForm.surname,
            email: store.registrationForm.email,
            role: store.registrationForm.role,
            password: store.registrationForm.password,
            password_confirmation: store.registrationForm.password_confirmation,
        }
    });

    const getRegistrationForm = (form: any) => {
        if(!form) return;
        const registrationInputs: any = {};
        form.forEach( (defaultValue: string | number, key: string) => {
            registrationInputs[key] = defaultValue;
        })
        return registrationInputs;
    }

    const handleChange = (data: IRegistrationForm) => {
        dispatch(setRegistrationForm(data));
    }

    const handleSubmit = () => {
        dispatch({type: POST_USER});
        dispatch(setRegistrationForm(null));
        form?.reset();
    }
    
    return (
        <Form id='registration' 
                onChange={ (event) => {
                    event.preventDefault();
                    const formData = form ? new FormData(form) : null;

                    handleChange(getRegistrationForm(formData))
                }} 
                onSubmit={ async (event) => {
                    event.preventDefault();
                    handleSubmit();
            }}>
            <Label />
            <FormattedMessage id='name' />
            <Input name='name' />

            <FormattedMessage id='surname' />
            <Input name='surname' />

            <FormattedMessage id='role' />
            <Input name='role' />

            <FormattedMessage id='email' />
            <Input name='email' />

            <FormattedMessage id='password' />
            <Input name='password' type='password' />

            <FormattedMessage id='password' />
            <Input name='password_confirmation' type='password' />

            <button type='submit' >Submit</button>
        </Form>
    )
}

export default Registration;
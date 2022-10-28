import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, Input, Label } from './LoginStyle';

const Login = (): JSX.Element => {
    return (
        <Form>
            <Label />
            <FormattedMessage id='email' />
            <Input />
            <FormattedMessage id='password' />
            <Input />
        </Form>
    )
}

export default Login;
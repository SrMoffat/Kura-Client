import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import TextInput from '../TextInput';
import { successMessages } from '../../utils/alerter';

import AUTHMUTATIONS from '../../queries/mutation/Auth';
import AUTH_TOKEN from '../../constants';

const { SIGNUP_MUTATION } = AUTHMUTATIONS;

const SignupForm = ({ props }) => {
    const [values, setValues] = useState({});
    const { name, email, password } = values;

    const [errors, setErrors] = useState({})
    const [signUp, { loading, error, data }] = useMutation(SIGNUP_MUTATION);

    console.log({loading, data, error});

    const onChange = (e) => {
        const { target: { name, value } } = e;

        const newState = { ...values, [name]: value }
        setValues(newState);
    }

    const handleSubmit = e => {
        e.preventDefault();
        signUp({ variables: {
            name, email, password            
        }});

    }

    const saveUserData = token => { localStorage.setItem(AUTH_TOKEN, token) }



    
    const confirm = async (data) => {
        const { signUp: { payload, error } } = data;

        if(payload){
            const { history } = props;
            const { token, message } = payload;

            successMessages(message);

            saveUserData(token);
             
            history.push('/cluster');
        } else {

            const newState = { [error.field] : error.message }

            setErrors({...newState})     
        }
    }
    
    const inputs = [
        {
            label: 'Username', 
            name: 'name', 
            placeholder: 'username',
            onChange, 
            value: name, 
            type: 'text',
            key: 'name',
            errors
        },
        {
            label: 'Email', 
            name: 'email', 
            placeholder: 'mail@mail.com',
            onChange, 
            value: email, 
            type: 'email',
            key: 'email',
            errors
        },
        {
            label: 'Password', 
            name: 'password', 
            placeholder: 'password',
            onChange, 
            value: password, 
            type: 'password',
            key: 'pass',
            errors
        }
    ]  

    return(
        <form onSubmit={handleSubmit}>
            { inputs.map(input => (<TextInput {...input} />)) }
              
            <button className="btn btn-purple">Sign Up</button>  

            <span className="form-text">Already have an account?
                <a href="/login" className="form-link">Login</a>
            </span>
        </form>
    )
}


export default SignupForm;
import React, { useState } from 'react';
import toastr from 'toastr';
import { Mutation } from 'react-apollo';

import AUTHMUTATIONS from '../../queries/mutation/Auth';
import TextInput from '../TextInput';
import AUTH_TOKEN from '../../constants';

const { SIGNUP_MUTATION } = AUTHMUTATIONS;

const SignupForm = ({ props }) => {
    const [values, setValues] = useState({});
    const { name, email, password } = values;

    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        const { target: { name, value } } = e;

        const newState = { ...values, [name]: value }
        setValues(newState);
    }

    const handleSubmit = e => { e.preventDefault() }

    const saveUserData = token => { localStorage.setItem(AUTH_TOKEN, token) }

    
    const confirm = async (data) => {
        const { signUp: { payload, error } } = data;

        if(payload){
            const { history } = props;
            const { token, message } = payload;

            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }

            toastr.success(message);

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
            {
                inputs.map(input => (<TextInput {...input} />))
            }
            <Mutation
                mutation={SIGNUP_MUTATION}
                variables={{ name, email, password }}
                onCompleted={data => confirm(data)}            
            >
                {mutation => (
                    <button className="btn btn-purple" onClick={mutation}>Sign Up</button>               
                )}
            </Mutation>

            <span className="form-text">Already have an account?
                <a href="/login" className="form-link">Login</a>
            </span>
        </form>
    )
}


export default SignupForm;
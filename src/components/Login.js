import React, { useState } from 'react';
import toastr from 'toastr';
import { Mutation } from 'react-apollo';

import logo from '../images/logop.png'
import TextInput from './TextInput';
import AUTH_TOKEN from '../constants';
import AUTHMUTATIONS from '../queries/mutation';

const { LOGIN_MUTATION } = AUTHMUTATIONS;

const Login = (props) => {
    const [values, setValues] = useState({});
    const { email, password } = values;

    const [errors, setErrors] = useState({});

    const handleSubmit = e => { e.preventDefault() };
    
    const onChange = (e) => {
        const { target: { name, value } } = e;
        const newState = { ...values, [name] : value };

        setValues(newState);
    }

    const confirm = async data => {
        const { login: { payload, error } } = data;
        
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

            const newState = { [error.field] : error.message };

            setErrors({ ...errors, ...newState });
        }
    }

    const saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    }

    const inputs = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            value: email,
            onChange,
            key: 'email',
            placeholder: 'mail@email.com',
            errors
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            value: password,
            onChange,
            key: 'password',
            placeholder: 'password',
            errors
        }
    ]


    return(
       <div className="login-container">
            <div className="logop-container">
                <img src={logo} alt="Kura" className="logop"/>
                <span className="brand">Kura</span>
            </div>
            <div className="login-section">
                <form className="login-form" onSubmit={handleSubmit}>
                    { inputs.map(input => (<TextInput {...input}/>)) }
                    <Mutation
                        mutation={LOGIN_MUTATION}
                        variables={{ email , password }}
                        onCompleted={data => confirm(data)}
                    >
                        {mutation => (
                            <button className="btn btn-white" onClick={mutation}>Login</button>  
                        )}
                    </Mutation>

                    <span className="login-form-text">You don't have an account?
                        <a href="/" className="login-form-link">Sign Up</a>
                    </span>
                </form>
            </div>
       </div>
    )
}

export default Login;

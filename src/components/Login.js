import React, { useState } from 'react';
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
            const { token } = payload;

            saveUserData(token);    
            history.push('/clusters');

        } else {

            const newState = { [error.field] : error.message };

            setErrors({ ...errors, ...newState });

            // TODO: Clear form when the error has been corrected
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

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import AUTH_TOKEN from '../constants';
import AUTHMUTATIONS from '../queries/mutation';

const { SIGNUP_MUTATION, LOGIN_MUTATION } = AUTHMUTATIONS;

class Login extends Component {
    state = {
        login: true,
        email: '',
        password: '',
        name: ''
    }

    render(){
        const { name, email, password, login } = this.state;
        return(
            <div>
                <h4 className="">{ login ? 'Login' : 'Sign Up' }</h4>
                <div className="">
                    { !login && (
                        <input
                            value={name}
                            type="text"
                            placeholder="4fr0c0d3"
                            onChange={e => this.setState({ name: e.target.value })}                 
                        />
                    )}
                    <input
                        value={email}
                        type="text"
                        placeholder="email@mail.com"
                        onChange={e => this.setState({ email: e.target.value }) }                      
                    />
                    <input
                        value={password}
                        type="password"
                        placeholder="p4ssw0rd"
                        onChange={e => this.setState({ password: e.target.value }) }                      
                    />
                </div>
                <div className="">
                    <Mutation
                        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION }
                        variables={{ name, email , password }}
                        onCompleted={data => this._confirm(data)}
                    >
                        {mutation => (
                            <div className="" onClick={mutation}>
                            { login ? 'Login' : 'Create Account'}

                            </div>
                        )}
                    </Mutation>
                    <div className="" onClick={() => this.setState({ login: !login })}>
                        {login ? 'Need to create an account' : 'Already have an account?'}
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const { token } = this.state.login ? data.login : data.signUp;
        const { history } = this.props;

        this._saveUserData(token);

        history.push('/');
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    }
}

export default Login;
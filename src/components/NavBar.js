import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AUTH_TOKEN from '../constants';

class NavBar extends Component {
    render(){
        const authToken = localStorage.getItem(AUTH_TOKEN);
        return(
            <div className="">
                <div className="">
                    <div className="fw7 mr1">Kura</div>
                    <Link to="/" className="">
                        new
                    </Link>
                    { authToken && (
                        <div className="flex">
                            <div className="ml1">|</div>
                            <Link to="/create" className="">
                                submit
                            </Link>
                        </div>
                    )}
                </div>
                <div className="">
                { authToken ? (
                    <div 
                        className=""
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            this.props.history.push('/');
                        }}
                    >
                    Logout
                    </div>
                ) : (
                    <Link to="/login" className="">
                        Login
                    </Link>
                )}
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);
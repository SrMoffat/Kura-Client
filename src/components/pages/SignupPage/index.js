import React from 'react';
import SignupForm from '../../SignupForm';
import logo from '../../../images/logo2.png';


const LandingPage = (props) => {
    const signupForm = React.createRef();

    const scrollToSignup = () => {
        const { current } = signupForm;
        const { y } = current.getBoundingClientRect();

        window.scrollTo({
            top: y,
            left: 0,
            behavior: "smooth"
        });
    }

    return(
        <div>
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Kura" className="logo"/>
                </div>
                <div className="landing-caption">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Kura</span>
                        <span className="heading-primary-sub">Bestow leadership</span>                    
                    </h1>
                    <button className="btn btn-white animated-btn" onClick={scrollToSignup}>Vote</button> 
                </div>
            </header>

            <div className="signup-form-container" ref={signupForm}>
                <SignupForm props={props}/>
            </div>

            <footer className="signup-footer">
            </footer>
        </div>
    )
}

export default LandingPage;
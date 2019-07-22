import React from 'react';

import back from '../../images/back-btn.svg';
import slash from '../../images/Line.svg';


const Breadcrumb = (props) => {

    const { currentPage: { icon, text } } = props;

    return (
        <div className="breadcrumb">              
            <img
                src={back}
                alt={back}
                className="breadcrumb-back-button"                      
            >                   
            </img>
            <div className="breadcrumb-content">
                <span className="breadcrumb-icon">
                        <img
                            src={icon} 
                            alt={icon}                       
                        >
                        </img>  
                </span>
                <span className="breadcrumb-text" style={{color: '#46307B'}}>
                    {text}
                </span>
            </div>
            <img src={slash} alt={slash}></img>
        </div>
    )
}

export default Breadcrumb;
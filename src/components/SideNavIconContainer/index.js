import React from 'react';

const IconContainer = (props) => {
    const { icon, alt, page } = props;

    return (
        <div className="nav-icon-container">
            <span>
                <img 
                    src={icon}
                    className="nav-icon"
                    alt={alt}
                    >
                </img>
                <span className="nav-icon-text">{page}</span>
            </span>
        </div> 
    )
    
}

export default IconContainer;
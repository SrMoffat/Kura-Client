import React from 'react';

const SideNavIcon = (props) => {
    const { icon, iconFile, onClick } = props;
    return (
        <span className="side-pane-icons">
            <img 
                className={`side-pane-${icon}`}
                src={iconFile} 
                onClick={onClick}
                alt={icon}               
                >
            </img>
        </span>
    )
}

export default SideNavIcon;
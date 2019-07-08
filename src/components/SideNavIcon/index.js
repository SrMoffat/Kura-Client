import React from 'react';

const SideNavIcon = (props) => {

    const { icon, iconFile, onClick, selected } = props;
    return (
        <span className="side-pane-icons">
            <img 
                className={selected ? `side-pane-${icon} active` : `side-pane-${icon}`}
                src={iconFile}
                alt={icon}
                onClick={onClick}          
                >
            </img>
            
        </span>
       
    )
}

export default SideNavIcon;
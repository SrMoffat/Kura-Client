import React from 'react';

const SideNavIcon = (props) => {

    const { icon, iconFile, onClick, selected } = props;
    return (
        <span className={selected ? `side-pane-icons side-pane-${icon} active` : `side-pane-icons  side-pane-${icon}` }>
            <img 
                className={`side-pane-${icon}`}
                src={iconFile}
                alt={icon}
                onClick={onClick}          
                >
            </img>            
        </span>
       
    )
}

export default SideNavIcon;
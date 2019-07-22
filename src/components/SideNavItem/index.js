import React from 'react';


const NavItem = props => {
    const { text } = props;
    return(
        <div className="nav-item">
            <span className="">{text}</span>
        </div>
    )
}

export default NavItem;
import React from 'react';


const NavItem = props => {
    const { item } = props;
    return(
        <div className="nav-item">
            <span className="">{item}</span>
        </div>
    )
}

export default NavItem;
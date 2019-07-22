import React from 'react';

import NavItem from '../SideNavItem';

const ItemContainer = (props) => {

    const { items } = props;

    return (
        <div className="nav-items-container">
            <div className="nav-items">
                { items.map(item => (<NavItem text={item}/>)) }                   
            </div>
        </div>
    )
}

export default ItemContainer;
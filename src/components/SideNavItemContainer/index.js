import React from 'react';

import NavItem from '../SideNavItem';

const ItemContainer = (props) => {

    const { items, onItemClick } = props;

    return (
        <div className="nav-items-container">
            <div className="nav-items">
                { items.map((item, index) => (<NavItem text={item} key={index} onItemClick={onItemClick}/>)) }                   
            </div>
        </div>
    )
}

export default ItemContainer;
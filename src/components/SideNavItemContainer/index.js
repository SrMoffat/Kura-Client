import React from 'react';

import NavItem from '../SideNavItem';

const ItemContainer = (props) => {
    const navItems = [
        {item: 'Add Cluster'},
        {item: 'Add Member'},
        {item: 'Assign Head'}
    ]

    return (
        <div className="nav-items-container">
            <div className="nav-items">
                { navItems.map(item => (<NavItem {...item}/>)) }                   
            </div>
        </div>
    )
}

export default ItemContainer;
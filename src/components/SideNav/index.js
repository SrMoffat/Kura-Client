import React from 'react';

import SidePane from '../SidePane';
import IconContainer from '../SideNavIconContainer';
import ItemContainer from '../SideNavItemContainer';

import clustertrans from '../../images/cluster-trans.svg'

const SideNav = () => {

    const navIcon = { 
        icon: clustertrans, 
        alt: 'cluster', 
        page: 'Manage Clusters' 
    }

    return (
        <div className="side-nav">
           <SidePane />
            <div className="nav">
                <IconContainer {...navIcon} />
                <ItemContainer/>
            </div>
        </div>
    )
}

export default SideNav;

import React, { useState } from 'react';

import SidePane from '../SidePane';
import IconContainer from '../SideNavIconContainer';
import ItemContainer from '../SideNavItemContainer';

import hometrans from '../../images/home-trans.svg';
import clustertrans from '../../images/cluster-trans.svg';
import positiontrans from '../../images/position-trans.svg';
import nominationtrans from '../../images/nomination-trans.svg';
import ballottrans from '../../images/ballot-trans.svg';

const SideNav = (props) => {
    const { history, match: { path }, onItemClick } = props;

    const [active, setActive] = useState(path.substring(1));

    let navIcon;

    switch(active) {
        case 'cluster':
            navIcon = {
                icon: clustertrans, 
                alt: 'cluster', 
                page: 'Manage Clusters',
                navItems:['Add Cluster', 'Add Member', 'Assign Head']
            }
            break;
        case 'position':
            navIcon = {
                icon: positiontrans, 
                alt: 'position', 
                page: 'Manage Positions',
                navItems:['Add Position', 'View Candidates']
            }
            break;
        case 'nomination':
            navIcon = {
                icon: nominationtrans, 
                alt: 'nomination', 
                page: 'Manage Nominations',
                navItems:['Nominate', 'Members']
            }
            break;
        case 'ballot':
            navIcon = {
                icon: ballottrans, 
                alt: 'ballot', 
                page: 'Manage Votes',
                navItems:['Nominations', 'Votes']
            }
            break;
        default:
            navIcon = {
                icon: hometrans, 
                alt: 'home', 
                page: 'Home Page',
                navItems:['Profile', 'Clusters', 'Posts']
            }
    }

    const { navItems } = navIcon;

    return (
        <div className="side-nav">
           <SidePane active={active} history={history} setActive={setActive}/>
            <div className="nav">
                <IconContainer {...navIcon} />
                <ItemContainer items={navItems} onItemClick={onItemClick}/>
            </div>
        </div>
    )
}

export default SideNav;

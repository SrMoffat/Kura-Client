import React from 'react';

import SideNavIcon from '../SideNavIcon';

import logo from '../../images/white-logo.svg';
import home from '../../images/home-icon.svg';
import cluster from '../../images/cluster-icon.svg';
import position from '../../images/position-icon.svg';
import nomination from '../../images/nomination-icon.svg';
import ballot from '../../images/ballot-icon.svg';
import logout from '../../images/logout-icon.svg';

const onClick = e => {
    console.log(e.target)

}


const navIcons = [
    {
        icon: 'home',
        iconFile: home,
        onClick
    },
    {
        icon: 'cluster',
        iconFile: cluster,
        onClick
    },
    {
        icon: 'position',
        iconFile: position,
        onClick
    },
    {
        icon: 'nomination',
        iconFile: nomination,
        onClick
    },
    {
        icon: 'ballot',
        iconFile: ballot,
        onClick
    }
]


const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-pane">
                <span>
                    <img 
                        src={logo}
                        className="side-pane-logo"
                        alt={logo}
                        >
                    </img>
                </span>
                {
                    navIcons.map(icon => (<SideNavIcon {...icon} />))
                }                
                <span>
                    <img 
                        src={logout}
                        className="side-pane-logout"
                        alt={logout}
                        >
                    </img>
                </span>
            </div>
            <div className="nav">
                Side Nav            
            </div>
        </div>
    )
}

export default SideNav;
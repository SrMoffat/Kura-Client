import React, { useState } from 'react';
import SideNavIcon from '../SideNavIcon';

import logo from '../../images/white-logo.svg';
import home from '../../images/home-icon.svg';
import cluster from '../../images/cluster-icon.svg';
import position from '../../images/position-icon.svg';
import nomination from '../../images/nomination-icon.svg';
import ballot from '../../images/ballot-icon.svg';
import logout from '../../images/logout-icon.svg';

const SidePane = (props) => {

    const { history, active } = props;

    const [selected, setSelected] = useState({
        [active]: true
    });

    const onClick = e => {
        const icon = e.target.getAttribute('alt');
        history.push(`/${icon}`)
    }

    const navIcons = [
        {
            icon: 'home',
            iconFile: home,
            key: home,
            onClick,
            selected: selected['home']
        },
        {
            icon: 'cluster',
            iconFile: cluster,
            key: cluster,
            onClick,
            selected: selected['cluster']
        },
        {
            icon: 'position',
            iconFile: position,
            key: position,
            onClick,
            selected: selected['position']
        },
        {
            icon: 'nomination',
            iconFile: nomination,
            key: nomination,
            onClick,
            selected: selected['nomination']
        },
        {
            icon: 'ballot',
            iconFile: ballot,
            key: ballot,
            onClick,
            selected: selected['ballot']
        }
    ]

    const renderSidePaneLogo = (logo, alt) => (
        <span className="side-logo-conatiner">
                <img 
                    src={logo}
                    className={`side-pane-${alt}`}
                    alt={alt}
                    >
                </img>
            </span>
    )
    
    return (
        <div className="side-pane">
            { renderSidePaneLogo(logo, 'logo') }
            
            <div className="main-side-nav">
                { navIcons.map(icon => (<SideNavIcon {...icon} setSelected={setSelected}/>)) }        
            </div>  
                  
            { renderSidePaneLogo(logout, 'logout') }
    </div>
    )
}

export default SidePane;
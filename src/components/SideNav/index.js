import React, { useState, useEffect } from 'react';

import SideNavIcon from '../SideNavIcon';

import logo from '../../images/white-logo.svg';
import home from '../../images/home-icon.svg';
import cluster from '../../images/cluster-icon.svg';
import clustertrans from '../../images/cluster-trans.svg'
import position from '../../images/position-icon.svg';
import nomination from '../../images/nomination-icon.svg';
import ballot from '../../images/ballot-icon.svg';
import logout from '../../images/logout-icon.svg';

const SideNav = () => {
    const [selected, setSelected] = useState({
        home: false,
        cluster: false,
        position: false,
        nomination: false,
        ballot: false
    });

    const onClick = e => {
        const icon = e.target.getAttribute('alt');

        const newSelected = Object.keys(selected).reduce((acc, val) => {
            return {
                ...acc,
                [val]: false
            }
        },{});

        newSelected[icon] = true;

        setSelected(newSelected);
    }

    useEffect(() => {
        console.log(selected)

    }, [selected])

    const navIcons = [
        {
            icon: 'home',
            iconFile: home,
            onClick,
            selected: selected['home']
        },
        {
            icon: 'cluster',
            iconFile: cluster,
            onClick,
            selected: selected['cluster']
        },
        {
            icon: 'position',
            iconFile: position,
            onClick,
            selected: selected['position']
        },
        {
            icon: 'nomination',
            iconFile: nomination,
            onClick,
            selected: selected['nomination']
        },
        {
            icon: 'ballot',
            iconFile: ballot,
            onClick,
            selected: selected['ballot']
        }
    ]

    return (
        <div className="side-nav">
            <div className="side-pane">
                <span className="side-logo-conatiner">
                    <img 
                        src={logo}
                        className="side-pane-logo"
                        alt={logo}
                        >
                    </img>
                </span>
                <div className="main-side-nav">
                    {
                        navIcons.map(icon => (<SideNavIcon {...icon} />))
                    }        
                </div>        
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
                <div className="nav-icon-container">
                    <span>
                        <img 
                            src={clustertrans}
                            className="nav-icon"
                            alt={cluster}
                            >
                        </img>
                        <span className="nav-icon-text">Manage Clusters</span>
                    </span>
                </div> 
                <div className="nav-items-container">
                    <div className="nav-items">
                        <div className="nav-item">
                            <span className="">Add Cluster</span>
                        </div>
                        <div className="nav-item">
                            <span className="">Add Members</span>
                        </div>
                        <div className="nav-item">
                            <span className="">Assign Head</span>
                        </div>
                    </div>
                        

                </div>
            </div>
        </div>
    )
}

export default SideNav;
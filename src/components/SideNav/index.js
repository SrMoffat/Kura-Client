import React from 'react';

import SidePane from '../SidePane';

import cluster from '../../images/cluster-icon.svg';
import clustertrans from '../../images/cluster-trans.svg'

const SideNav = () => {

    const renderIconContainer = (icon, alt) => (
        <div className="nav-icon-container">
            <span>
                <img 
                    src={icon}
                    className="nav-icon"
                    alt={alt}
                    >
                </img>
                <span className="nav-icon-text">Manage Clusters</span>
            </span>
        </div> 
    )

    return (
        <div className="side-nav">
           <SidePane/>
            <div className="nav">
                {
                    renderIconContainer(clustertrans, cluster)
                }
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
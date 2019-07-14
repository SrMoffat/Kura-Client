import React from 'react';

import back from '../../images/back-btn.svg';
import clusterBC from '../../images/cluster-breadcrumb.svg';
import slash from '../../images/Line.svg';


const Breadcrumb = () => {
    return (
        <div className="breadcrumb">              
            <img
                src={back}
                alt={back}
                className="breadcrumb-back-button"                      
            >                   
            </img>
            <div className="breadcrumb-content">
                <span className="breadcrumb-icon">
                        <img
                            src={clusterBC} 
                            alt={clusterBC}                       
                        >
                        </img>  
                </span>
                <span className="breadcrumb-text" style={{color: '#46307B'}}>
                    Clusters
                </span>
            </div>
            <img src={slash} alt={slash}></img>
        </div>
    )
}

export default Breadcrumb;
import React from 'react';

import SideNav from '../../SideNav';
import back from '../../../images/back-btn.svg'
import clusterBC from '../../../images/cluster-breadcrumb.svg';
import slash from '../../../images/Line.svg';
import head from '../../../images/card-head-icon.svg'
import member from '../../../images/card-member-icon.svg'
import position from '../../../images/card-position-icon.svg'


const AppContent = () => {
    return (
        <div className="app-content">
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
           <div className="app-content-container">
                <div className="app-content-container-items">
                    <div className="card">
                        <div className="card-header">
                            Code Blooded
                        </div>
                        <div className="card-body">
                            <div>
                                <span className="card-icon">
                                        <img
                                            src={head} 
                                            alt={head}                       
                                        >
                                        </img>  
                                </span>
                                <span className="card-text" style={{color: '#46307B'}}>
                                    Super Modo
                                </span>
                            </div>
                            <div>
                                <span className="card-icon">
                                        <img
                                            src={member} 
                                            alt={member}                       
                                        >
                                        </img>  
                                </span>
                                <span className="card-text" style={{color: '#46307B'}}>
                                    Members
                                </span>
                            </div>
                            <div>
                                <span className="card-icon">
                                        <img
                                            src={position} 
                                            alt={position}                       
                                        >
                                        </img>  
                                </span>
                                <span className="card-text" style={{color: '#46307B'}}>
                                    Positions
                                </span>
                            </div>
                        </div>
                        <div className="card-footer">
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            Header
                        </div>
                        <div>
                            Body
                        </div>
                        <div>
                            Footer
                        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    )
}

const ClustersPage = () => {
    return (
        <div className="grid-container">
            <SideNav/>
            <AppContent/>
        </div>
    )

}

export default ClustersPage;
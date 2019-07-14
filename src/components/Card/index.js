import React from 'react';

import head from '../../images/card-head-icon.svg';
import member from '../../images/card-member-icon.svg';
import position from '../../images/card-position-icon.svg';


const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                Code Blooded
            </div>
        <div className="card-body">
            <div className="card-details">
                <span className="card-icon">
                        <img
                            src={head} 
                            alt={head}                       
                        >
                        </img>  
                </span>
               <div className="card-details-meta">
                    <div className="card-text" style={{color: '#46307B', fontWeight: 'bold'}}>
                            Super Modo
                        </div>
                        <div className="card-text-meta" style={{color: '#777', fontSize: '12px'}}>
                            23 Days
                    </div>
               </div>
            </div>
            <div className="card-details">
                <span className="card-icon">
                        <img
                            src={member} 
                            alt={member}                       
                        >
                        </img>  
                </span>
                <div className="card-details-meta">
                    <div className="card-text" style={{color: '#46307B', fontWeight: 'bold'}}>
                            23
                        </div>
                        <div className="card-text-meta" style={{color: '#777', fontSize: '12px'}}>
                            Members
                    </div>
               </div>
            </div>
            <div className="card-details">
                <span className="card-icon">
                        <img
                            src={position} 
                            alt={position}                       
                        >
                        </img>  
                </span>
                <div className="card-details-meta">
                    <div className="card-text" style={{color: '#46307B', fontWeight: 'bold'}}>
                            5
                        </div>
                        <div className="card-text-meta" style={{color: '#777', fontSize: '12px'}}>
                            Positions
                    </div>
               </div>
            </div>
        </div>
        <div className="card-footer">
            Footer
        </div>
    </div>

    )
}

export default Card;
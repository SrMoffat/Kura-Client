import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Card from '../Card';


const AppContent = () => {
    return (
        <div className="app-content">
           <Breadcrumb/>
           <div className="app-content-container">
                <div className="app-content-container-items">
                    <Card/>
                </div>             
           </div>
        </div>
    )
}

export default AppContent;
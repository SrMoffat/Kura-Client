import React from 'react';

import SideNav from '../../SideNav';


const AppContent = () => {
    return (
        <div className="app-content">
           App Content
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
import React from 'react';

import SideNav from '../../SideNav';
import AppContent from '../../AppContent';

const ClustersPage = (props) => {
    const { match: { path } } = props;
    const page = path.substring(1);

    return (
        <div className="grid-container">
            <SideNav {...props}/>
            <AppContent page={page}>

            </AppContent>
        </div>
    )

}

export default ClustersPage;
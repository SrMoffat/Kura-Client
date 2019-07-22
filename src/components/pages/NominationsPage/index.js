import React from 'react';

import SideNav from '../../SideNav';
import AppContent from '../../AppContent';

const NominationsPage = (props) => {
    const { match: { path } } = props;
    const page = path.substring(1);

    return (
        <div className="grid-container">
            <SideNav {...props}/>
            <AppContent page={page}/>
        </div>
    )
}

export default NominationsPage;
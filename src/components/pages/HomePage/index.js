import React from 'react';

import SideNav from '../../SideNav';

// import AppContent from '../../AppContent';


const HomePage = (props) => {
    const { match: { path } } = props;
    const page = path.substring(1);

    return (
        <div className="grid-container" style={{backgroundColor: '#e4e2e2'}}>
            <SideNav {...props}/>
        </div>
    )
}

export default HomePage;
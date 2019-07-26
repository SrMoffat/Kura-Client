import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Card from '../Card';

import head from '../../images/card-head-icon.svg';
import member from '../../images/card-member-icon.svg';
import position from '../../images/card-position-icon.svg';

import homeBC from '../../images/home-bc.svg';
import clusterBC from '../../images/cluster-breadcrumb.svg';
import positionBC from '../../images/positions-bc.svg';
import nominationBC from '../../images/nominations-bc.svg';
import voteBC from '../../images/votes-bc.svg';



const cards = [
    {
        header: 'Code Blooded',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    },
    {
        header: 'Engineering Council',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    },
    {
        header: 'Sparks Society',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    },
    {
        header: 'Invictus Society',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    },
    {
        header: 'Cohort XXX',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    },
    {
        header: 'iEstelle Society',
        details: [
            {
                icon: head,
                alt: head,
                text: 'Super Modo',
                meta: '23 Days'
            },
            {
                icon: member,
                alt: member,
                text: '23',
                meta: 'Members'
            },
            {
                icon: position,
                alt: position,
                text: '5',
                meta: 'Positions'
            }
        ]
    }

]


const AppContent = (props) => {

    const { page } = props;

    let currentPage;

    switch (page){
        case 'cluster':
            currentPage = {
                icon: clusterBC,
                text: 'Clusters'
            }
            break;
        case 'position':
            currentPage = {
                icon: positionBC,
                text: 'Positions'
            }
            break;
        case 'nomination':
            currentPage = {
                icon: nominationBC,
                text: 'Nominations'
            }
            break;
        case 'ballot':
            currentPage = {
                icon: voteBC,
                text: 'Votes'
            }
            break;
        default:
            currentPage = {
                icon: homeBC,
                text: 'Home'
            }
            break;
    }

    return (
        <div className="app-content">
           <Breadcrumb currentPage={currentPage}/>
           <div className="app-content-container">
                <div className="app-content-container-items">
                    {
                        cards.map((card, index) => (<Card {...card} key={index}/>))
                    }
                </div>             
           </div>
        </div>
    )
}

export default AppContent;
import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Card from '../Card';

import head from '../../images/card-head-icon.svg';
import member from '../../images/card-member-icon.svg';
import position from '../../images/card-position-icon.svg';


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


const AppContent = () => {
    return (
        <div className="app-content">
           <Breadcrumb/>
           <div className="app-content-container">
                <div className="app-content-container-items">
                    {
                        cards.map(card => (<Card {...card}/>))
                    }
                </div>             
           </div>
        </div>
    )
}

export default AppContent;
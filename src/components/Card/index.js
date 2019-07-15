import React from 'react';

import CardDetails from '../CardDetails';

const Card = (props) => {
    const { header, details } = props
    return (
        <div className="card">
            <div className="card-header">
                { header }
            </div>
            <div className="card-body">
            {
                details.map(card => (<CardDetails {...card}/>))
            } 
            </div>
        <div className="card-footer"></div>
    </div>

    )
}

export default Card;
import React from 'react';

const CardDetails = (props) => {
    const { icon, alt, text, meta } = props;
    return (
        <div className="card-details">
            <span className="card-icon">
                <img
                    src={icon} 
                    alt={alt}                       
                >
                </img>  
            </span>
            <div className="card-details-meta">
                <div className="card-text">
                    { text }
                </div>
                <div className="card-text-meta">
                    { meta }
                </div>
            </div>
        </div>
    )
}

export default CardDetails;
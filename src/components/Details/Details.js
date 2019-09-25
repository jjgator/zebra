import React from 'react';
import './Details.scss';

const Details = (props) => {
    let { details, name, hasFeatures } = props;

    return (
        <React.Fragment>
            {details && 
            <div className={`details-box ${hasFeatures ? '' : 'full-width'}`}>
                <div className="details-header">
                    <i class="fab fa-leanpub"></i>
                    <p className="details-title">Why {name}?</p>
                </div>
                <p className="details-body">{details}</p>
            </div>}
        </React.Fragment>
    );
};

export default Details;
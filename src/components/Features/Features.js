import React from 'react';
import './Features.scss';

const Features = (props) => {
    let { features } = props;

    return (
        <div className="features-box">
            <div className="features-header">
                <i className="fas fa-list-ul"></i>
                <p className="features-title">Features</p>
            </div>
            <div className="features-list-box">
                {features &&
                <ul>
                    {features.map(f => <li>{f.name}</li>)}
                </ul>}
            </div>
        </div>
    );
};



export default Features;
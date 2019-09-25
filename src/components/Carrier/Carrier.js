import React from 'react';
import './Carrier.scss';
import { getIcon } from '../../utils';
import CarrierLogo from '../../assets/logo-carrier-sm-default.png';

const Carrier = (props) => {
    let { name, tagline, stars, features } = props;

    return (
        <div className="carrier">
            <img className="logo" src={CarrierLogo} alt=""/>
            <div className="carrier-details">
                <p className="carrier-name">{name}</p>
                
                {tagline && 
                <p className="tagline">{tagline}</p>}

                <div className="stars-icons">
                    {stars &&
                    <div className="star-box">
                        {[...Array(stars)].map(e => getIcon('IconStarGold'))}
                    </div>}

                    {features && features.length !== 0 &&
                    <div className="icons-box">
                        {features.map(f => getIcon(f.icon))}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Carrier;
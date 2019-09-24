import React from 'react';
import './Carrier.scss';
import { getIcon } from '../../utils';

const Carrier = (props) => {
    let { name, tagline, stars, icons } = props;

    return (
        <div className="carrier-box">
            <p className="carrier">{name}</p>
            
            {tagline && 
            <p className="tagline">{tagline}</p>}

            <div className="details">
                {stars &&
                <div className="star-box">
                    {[...Array(stars)].map(e => getIcon('IconStarGold'))}
                </div>}

                {icons && icons.length !== 0 &&
                <div className="icons-box">
                    {icons.map(i => getIcon(i.icon))}
                </div>}
            </div>
        </div>
    );
};

export default Carrier;
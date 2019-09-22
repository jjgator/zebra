import React from 'react';
import './Card.scss';
import { ReactComponent as IconStarWhite } from '../../assets/IconStarWhite.svg';

const Card = (props) => {
    let { type, cornerTag, name, tagline, stars, link, rate, tag, features } = props;
    
    return (
        <div className="card">
            {cornerTag &&
            <div className="corner">
                <IconStarWhite/>
            </div>}
        </div>
    );
};

export default Card;
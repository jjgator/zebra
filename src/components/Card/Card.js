import React from 'react';
import './Card.scss';
import Logo from '../Logo/Logo';
import Carrier from '../Carrier/Carrier';

const Card = (props) => {
    let { type, cornerTag, name, tagline, stars, link, rate, tag, features } = props;

    return (
        <div className="card">
            <div className="header">
                <Logo cornerTag={cornerTag}/>
                <Carrier
                    name={name}
                    tagline={tagline}
                    stars={stars}
                    features={features}/>
            </div> 
        </div>
    );
};

export default Card;
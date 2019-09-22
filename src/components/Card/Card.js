import React from 'react';
import './Card.scss';
import Logo from '../Logo/Logo';
import Carrier from '../Carrier/Carrier';
import Rate from '../Rate/Rate';

const Card = (props) => {
    let { cornerTag, name, tagline, stars, rate, features, tag } = props;

    return (
        <div className="card">
            <div className="header">
                <Logo cornerTag={cornerTag}/>
                <Carrier
                    name={name}
                    tagline={tagline}
                    stars={stars}
                    features={features}/>
                <Rate 
                    rate={rate}
                    tag={tag}/>
            </div> 
        </div>
    );
};

export default Card;
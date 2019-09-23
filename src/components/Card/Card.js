import React from 'react';
import './Card.scss';
import Logo from '../Logo/Logo';
import Carrier from '../Carrier/Carrier';
import Rate from '../Rate/Rate';

const Card = (props) => {
    let { 
        cornerTag, name, tagline, stars, rate, features, 
        tag, type, link 
    } = props;

    return (
        <div className="card">
            <div className="header">
                <Logo 
                    cornerTag={cornerTag}/>
                <Carrier
                    name={name}
                    tagline={tagline}
                    stars={stars}
                    features={features}/>
                <Rate 
                    rate={rate}
                    tag={tag}
                    type={type}
                    link={link}/>
            </div>
            <button className="arrow-button">
                <div className="arrow"></div>
            </button> 
        </div>
    );
};

export default Card;
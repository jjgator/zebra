import React from 'react';
import './Card.scss';
import Logo from '../Logo/Logo';
import Carrier from '../Carrier/Carrier';
import Rate from '../Rate/Rate';
import Features from '../Features/Features';
import Details from '../Details/Details';

const Card = (props) => {
    let { 
        cornerTag, name, tagline, stars, rate, features, 
        tag, type, link, details
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

            {((features && features[0]) || details) &&
            <button className="arrow-button">
                <div className="arrow"></div>
            </button>}

            <div className="main">
                <Features
                    features={features}/>
                <Details 
                    details={details}
                    name={name}
                    hasFeatures={
                        features && features[0] 
                        ? true : false}/>
            </div>
        </div>
    );
};

export default Card;
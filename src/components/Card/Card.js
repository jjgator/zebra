import React from 'react';
import './Card.scss';
import { ReactComponent as IconStarWhite } from '../../assets/IconStarWhite.svg';
import Logo from '../../assets/logo-carrier-sm-default.png';

const Card = (props) => {
    let { type, cornerTag, name, tagline, stars, link, rate, tag, features } = props;
    
    return (
        <div className="card">
            {cornerTag 
            ? <div className="corner-box">
                <div className="corner">
                    <IconStarWhite/>
                </div>
                <img className="corner-logo" src={Logo} alt=""/>
            </div>
            : <img className="card-logo" src={Logo} alt=""/>}
        </div>
    );
};

export default Card;
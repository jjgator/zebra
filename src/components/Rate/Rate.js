import React from 'react';
import './Rate.scss';
import Button from '../Button/Button';

const Rate = (props) => {
    let { rate, tag, link, type } = props;

    return (
        <div className="quote-box">
            {rate &&
            <div className="rate-box">
                <span className="tag">{tag}</span>                
                <div className="rate">
                    <span className="dolla">$</span>
                    <span className="number">{getRate(rate)}</span>
                </div>
                <span className="per">/ mo</span>
            </div>}
            {type && type !== 2 &&
            <Button
                link={link}
                type={type}/>}
        </div>
    );
};

// helper function rounds rate to nearest whole number
const getRate = (rate) => {
    if (rate) {
        return Math.ceil(rate);
    }
};

export default Rate;
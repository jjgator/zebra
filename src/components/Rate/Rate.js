import React from 'react';
import './Rate.scss';

const Rate = (props) => {
    let { rate, tag } = props;

    return (
        <React.Fragment>
            {rate &&
            <div className="rate-box">
                <span className="tag">{tag}</span>                
                <div className="rate">
                    <span className="dolla">$</span>
                    <span className="number">{getRate(rate)}</span>
                </div>
                <span className="per">/ mo</span>
            </div>}
        </React.Fragment>
    );
};

// helper function rounds rate to nearest whole number
const getRate = (rate) => {
    if (rate) {
        return Math.ceil(rate);
    }
};

export default Rate;
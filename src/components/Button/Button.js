import React from 'react';
import './Button.scss';
import { ReactComponent as IconArrowDown } from '../../assets/IconArrowDown.svg';
import { ReactComponent as IconBoltWhite } from '../../assets/IconBoltWhite.svg';

const Button = (props) => {
    let { type, link } = props;

    return (
        <React.Fragment>
            {(type === 0 || type === 1) &&
            <button className="button button--blue" onClick={()=> window.open(link, "_blank")}>
                <div className="button-content">
                    <IconArrowDown className="button-icon"/>
                    <span>Get Quote</span>
                </div>
            </button>}

            {type === 3 &&
            <button className="button button--orange" onClick={()=> window.open(link, "_blank")}>
                <div className="button-content">
                    <IconBoltWhite className="button-icon"/>
                    <span className="button-text">Buy Now</span>
                </div>
            </button>}        
        </React.Fragment>

    );
};

export default Button;
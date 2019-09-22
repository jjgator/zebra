import React from 'react';
import './Logo.scss';
import CarrierLogo from '../../assets/logo-carrier-sm-default.png';
import { getIcon } from '../../utils';

const Logo = (props) => {
    let { cornerTag } = props;

    return (
        <div className="logo-box">
            {cornerTag 
            ? <div className="corner-box">
                <div className="corner">
                    {getIcon('IconStarWhite')}
                </div>
                <img className="logo-with-corner" src={CarrierLogo} alt=""/>
            </div>
            : <img className="logo" src={CarrierLogo} alt=""/>}
        </div>
    );
};

export default Logo;
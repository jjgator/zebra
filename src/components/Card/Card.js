import React from 'react';
import './Card.scss';
import Carrier from '../Carrier/Carrier';
import Rate from '../Rate/Rate';
import Features from '../Features/Features';
import Details from '../Details/Details';
import { getIcon } from '../../utils';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    onArrowClick = () => {
        this.setState({ open: !this.state.open});
    };

    render() {
        let { open } = this.state;
        let { 
            cornerTag, name, tagline, stars, rate, features, 
            tag, type, link, details
        } = this.props;
    
        return (
            <div className="card">
                <div className="header">
                    <div className="corner-box">
                        <div className={`corner ${cornerTag ? 'visible' : ''}`}>
                            {getIcon('IconStarWhite')}
                        </div>
                    </div>
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
    
    
                <div className={`main ${open ? 'open' : ''}`}>
                    <Features
                        features={features}/>
                    <Details 
                        details={details}
                        name={name}
                        hasFeatures={
                            features && features[0] 
                            ? true : false}/>
                </div>

                {((features && features[0]) || details) &&
                <button className="arrow-button" onClick={this.onArrowClick}>
                    <div className={`arrow ${open ? 'open' : ''}`}></div>
                </button>}
            </div>
        );
    }
}

export default Card;
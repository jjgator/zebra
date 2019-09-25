import React from 'react';
import './Card.scss';
import Logo from '../Logo/Logo';
import Carrier from '../Carrier/Carrier';
import Rate from '../Rate/Rate';
import Features from '../Features/Features';
import Details from '../Details/Details';

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
                <button className="arrow-button" onClick={this.onArrowClick}>
                    <div className={`arrow ${open ? 'open' : ''}`}></div>
                </button>}
    
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
            </div>
        );
    }
}

export default Card;
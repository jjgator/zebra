import React from 'react';
import { ReactComponent as IconArrowDown } from './assets/IconArrowDown.svg';
import { ReactComponent as IconBoltWhite } from './assets/IconBoltWhite.svg';
import { ReactComponent as IconCarrierDefault } from './assets/IconCarrierDefault.svg';
import { ReactComponent as IconChevronDown } from './assets/IconChevronDown.svg';
import { ReactComponent as IconFeatures247Support } from './assets/IconFeatures247Support.svg';
import { ReactComponent as IconFeaturesAutomaticPayment } from './assets/IconFeaturesAutomaticPayment.svg';
import { ReactComponent as IconFeaturesBuyOnline } from './assets/IconFeaturesBuyOnline.svg';
import { ReactComponent as IconFeaturesCreditCard } from './assets/IconFeaturesCreditCard.svg';
import { ReactComponent as IconFeaturesDriverExclusion } from './assets/IconFeaturesDriverExclusion.svg';
import { ReactComponent as IconFeaturesImmediateCoverage } from './assets/IconFeaturesImmediateCoverage.svg';
import { ReactComponent as IconFeaturesLocalAgent } from './assets/IconFeaturesLocalAgent.svg';
import { ReactComponent as IconFeaturesLowDownPayment } from './assets/IconFeaturesLowDownPayment.svg';
import { ReactComponent as IconFeaturesMobile } from './assets/IconFeaturesMobile.svg';
import { ReactComponent as IconFeaturesNewCarReplacement } from './assets/IconFeaturesNewCarReplacement.svg';
import { ReactComponent as IconFeaturesNoCreditCheck } from './assets/IconFeaturesNoCreditCheck.svg';
import { ReactComponent as IconFeaturesNonOwner } from './assets/IconFeaturesNonOwner.svg';
import { ReactComponent as IconFeaturesOnlineIdCards } from './assets/IconFeaturesOnlineIdCards.svg';
import { ReactComponent as IconFeaturesOnlineServicing } from './assets/IconFeaturesOnlineServicing.svg';
import { ReactComponent as IconFeaturesPaperless } from './assets/IconFeaturesPaperless.svg';
import { ReactComponent as IconFeaturesRateLock } from './assets/IconFeaturesRateLock.svg';
import { ReactComponent as IconFeaturesRentersBundle } from './assets/IconFeaturesRentersBundle.svg';
import { ReactComponent as IconFeaturesRideshare } from './assets/IconFeaturesRideshare.svg';
import { ReactComponent as IconFeaturesRoadside } from './assets/IconFeaturesRoadside.svg';
import { ReactComponent as IconFeaturesSR22 } from './assets/IconFeaturesSR22.svg';
import { ReactComponent as IconStarGold } from './assets/IconStarGold.svg';
import { ReactComponent as IconStarWhite } from './assets/IconStarWhite.svg';

export const getIcon = (name) => {
    switch (name) {
        case 'IconArrowDown':
            return <IconArrowDown/>;
        case 'IconBoltWhite':
            return <IconBoltWhite/>;
        case 'IconCarrierDefault':
            return <IconCarrierDefault/>;        
        case 'IconChevronDown':
            return <IconChevronDown/>;
        case 'IconFeatures247Support':
            return <IconFeatures247Support className="feature-icon"/>;
        case 'IconFeaturesAutomaticPayment':
            return <IconFeaturesAutomaticPayment className="feature-icon"/>;  
        case 'IconFeaturesBuyOnline':
            return <IconFeaturesBuyOnline className="feature-icon"/>;
        case 'IconFeaturesCreditCard':
            return <IconFeaturesCreditCard className="feature-icon"/>;
        case 'IconFeaturesDriverExclusion':
            return <IconFeaturesDriverExclusion className="feature-icon"/>;
        case 'IconFeaturesImmediateCoverage':
            return <IconFeaturesImmediateCoverage className="feature-icon"/>;
        case 'IconFeaturesLocalAgent':
            return <IconFeaturesLocalAgent className="feature-icon"/>;
        case 'IconFeaturesLowDownPayment':
            return <IconFeaturesLowDownPayment className="feature-icon"/>;
        case 'IconFeaturesMobile':
            return <IconFeaturesMobile className="feature-icon"/>;
        case 'IconFeaturesNewCarReplacement':
            return <IconFeaturesNewCarReplacement className="feature-icon"/>;  
        case 'IconFeaturesNoCreditCheck':
            return <IconFeaturesNoCreditCheck className="feature-icon"/>;
        case 'IconFeaturesNonOwner':
            return <IconFeaturesNonOwner className="feature-icon"/>;
        case 'IconFeaturesOnlineIdCards':
            return <IconFeaturesOnlineIdCards className="feature-icon"/>;
        case 'IconFeaturesOnlineServicing':
            return <IconFeaturesOnlineServicing className="feature-icon"/>;
        case 'IconFeaturesPaperless':
            return <IconFeaturesPaperless className="feature-icon"/>;
        case 'IconFeaturesRateLock':
            return <IconFeaturesRateLock className="feature-icon"/>;
        case 'IconFeaturesRentersBundle':
            return <IconFeaturesRentersBundle className="feature-icon"/>;
        case 'IconFeaturesRideshare':
            return <IconFeaturesRideshare className="feature-icon"/>;  
        case 'IconFeaturesRoadside':
            return <IconFeaturesRoadside className="feature-icon"/>;
        case 'IconFeaturesSR22':
            return <IconFeaturesSR22 className="feature-icon"/>;
        case 'IconStarGold':
            return <IconStarGold/>;
        case 'IconStarWhite':
            return <IconStarWhite/>;
        default:
            return <span></span>
    }
};
import React from 'react';
import './TimeMachine.scss';
import classNames from 'classnames';
import {TIME_MACHINE} from "./GameCardTypes";
import {LANGUAGES, withCurrentLanguage} from "../Languages";

const REQUIRES_LABEL = {
  [`${LANGUAGES.ENGLISH}`]: 'requires',
  [`${LANGUAGES.SPANISH}`]: 'necesita'
};
const isFullyEquipped = (card) => !card.requires;

const renderRequirements = (cardRequirement, currentLanguage) => <div className={'title-description'}>
    {REQUIRES_LABEL[currentLanguage]}: {cardRequirement}
</div>;

const renderSubtitle = (subtitle) => <div className={'title-description'}>{subtitle}</div>;

const TimeMachineCard = ({ className, card, currentLanguage }) => {
    const classes = classNames(className, 'bttf-card', 'time-machine');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Time Machine
            </div>
            <div className={'bttf-card-body'}>
                {card.title}
                {isFullyEquipped(card) ? renderSubtitle(card.subtitle) : renderRequirements(card.requires, currentLanguage) }
            </div>
            <div className={'bttf-card-footer'}>
                {card.description}
            </div>
        </div>
    );
};

const TimeMachine = withCurrentLanguage(TimeMachineCard);
TimeMachine.canHandle = (card) => card.type === TIME_MACHINE;

export default TimeMachine;
import React from 'react';
import './TimeMachine.scss';
import classNames from 'classnames';
import {TIME_MACHINE} from "./GameCardTypes";

const TimeMachine = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'time-machine');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Time Machine
            </div>
            <div className={'bttf-card-body'}>
                {card.title}
            </div>
            <div className={'bttf-card-footer'}>
                {card.description}
            </div>
        </div>
    );
};

TimeMachine.canHandle = (card) => card.type === TIME_MACHINE;

export default TimeMachine;
import React from 'react';
import './Action.scss';
import classNames from 'classnames';
import {ACTION} from "./GameCardTypes";

const Action = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'action');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Action
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

Action.canHandle = (card) => card.type === ACTION;

export default Action;
import React from 'react';
import classNames from 'classnames';
import {DOUBLE_BACK} from "./GameCardTypes";

const DoubleBack = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'double-back');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                DoubleBack
            </div>
            <div className={'bttf-card-body'}>
                {card.firstAction}
            </div>
            <div className={'bttf-card-footer'}>
                {card.secondAction}
            </div>
        </div>
    );
};

DoubleBack.canHandle = (card) => card.type === DOUBLE_BACK;

export default DoubleBack;
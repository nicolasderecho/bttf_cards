import React from 'react';
import './PowerAction.scss';
import classNames from 'classnames';

const PowerAction = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'power-action');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Power Action
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

export default PowerAction;
import React from 'react';
import './Action.scss';
import classNames from 'classnames';
import {ACTION} from "./GameCardTypes";
import {DISCONTINUITY} from "../GameCardContents";

const cardNote = (note) => {
    if(!!note) {
        return <div className={'card-note'}>({note})</div>
    }
};
const isDiscontinuity = (card) => card.id === DISCONTINUITY;

const Action = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'action', {discontinuity: isDiscontinuity(card)});
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Action
            </div>
            <div className={'bttf-card-body'}>
                <span>{card.title}</span>
            </div>
            <div className={'bttf-card-footer'}>
                {card.description}
                {cardNote(card.note)}
            </div>
        </div>
    );
};

Action.canHandle = (card) => card.type === ACTION;

export default Action;
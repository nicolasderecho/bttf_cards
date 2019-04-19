import React from 'react';
import './Item.scss';
import classNames from 'classnames';
import {ITEM} from "./GameCardTypes";

const Item = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'item');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Item
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

Item.canHandle = (card) => card.type === ITEM;

export default Item;
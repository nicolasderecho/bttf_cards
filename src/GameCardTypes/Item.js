import React from 'react';
import './Item.scss';
import classNames from 'classnames';
import {ITEM} from "./GameCardTypes";

const renderSubtitle = (subtitle) => {
  if(!!subtitle) {
      return <div className={'item-subtitle'}>{subtitle}</div>
  }
};
const cardNote = (note) => {
    if(!!note) {
        return <div className={'card-note'}>({note})</div>
    }
};

const Item = ({ className, card }) => {
    const classes = classNames(className, 'bttf-card', 'item');
    return (
        <div className={classes}>
            <div className={'bttf-card-header'}>
                Item
            </div>
            <div className={'bttf-card-body'}>
                {card.title}
                {renderSubtitle(card.subtitle)}
            </div>
            <div className={'bttf-card-footer'}>
                {card.description}
                {cardNote(card.note)}
            </div>
        </div>
    );
};

Item.canHandle = (card) => card.type === ITEM;

export default Item;
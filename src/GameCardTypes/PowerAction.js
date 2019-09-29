import React from 'react';
import classNames from 'classnames';
import {POWER_ACTION} from "./GameCardTypes";
import {SCIENCE_EXPERIMENT} from "../GameCardContents";

const cardNote = (note) => {
  if(!!note) {
      return <div className={'card-note'}>({note})</div>
  }
};
const scienceExperimentDescription = (card) => {
    return <React.Fragment>
        <div className={'card-connector'}>{card.connector}</div>
        <div>{card.note}</div>
    </React.Fragment>
};


const isScienceExperiment = (card) => card.id === SCIENCE_EXPERIMENT;

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
                {isScienceExperiment(card) ? scienceExperimentDescription(card) : cardNote(card.note) }
            </div>
        </div>
    );
};

PowerAction.canHandle = (card) => card.type === POWER_ACTION;

export default PowerAction;
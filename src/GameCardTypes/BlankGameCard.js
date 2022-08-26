import React from 'react';

const BlankGameCard = ({ card }) => {
    return (
        <div className={'bttf-card'}>
            <div className={'bttf-card-header'}>
                Blank Game Card
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

BlankGameCard.canHandle = () => true;

export default BlankGameCard;
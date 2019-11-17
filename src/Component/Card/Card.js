import React from 'react';
import CardDeck from "../../CardDeck";

const Card = (props) => {
    let className = 'card rank-' + props.rank + ' ' + props.suit;
    let symbol;
    let card = new CardDeck();
    switch (props.suit) {
        case 'spades':
            symbol = '♠';
            break;
        case 'clubs':
            symbol = '♣';
            break;
        case 'hearts':
            symbol = '♥';
            break;
        case 'diams':
            symbol = '♦';
            break;
        default:
            console.error('Error occured on the switch');
    }
    return (
        <div className={className}>
            <span className='rank'>{props.rank}</span>
            <span className='suit'>{symbol}</span>
        </div>
    );
};

export default Card;
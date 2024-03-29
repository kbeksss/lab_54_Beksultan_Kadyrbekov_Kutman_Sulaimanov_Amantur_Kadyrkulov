import React from 'react';

const Card = (props) => {
    let className = 'card rank-' + props.rank + ' ' + props.suit;
    let symbol;
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
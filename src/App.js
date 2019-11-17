import React from 'react';
import './App.css';
import './cards.css';
import Card from "./Component/Card/Card";
import CardDeck from "./CardDeck";


function App() {
    let deck = new CardDeck();
    console.log(deck.getCard());
    let cards = deck.getCards(5);
    console.log(cards);
  return (
    <div className="App">

      <div className='playingCards'>
          {cards.map((cardArr, index) => (
              <Card
                  key={index}
                  rank={cardArr[0].rank}
                  suit={cardArr[0].suit}/>
          ))}
      </div>
    </div>
  );
}

export default App;

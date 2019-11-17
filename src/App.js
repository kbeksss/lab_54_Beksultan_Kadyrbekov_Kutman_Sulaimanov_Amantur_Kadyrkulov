import React from 'react';
import './App.css';
import './cards.css';
import Card from "./Component/Card/Card";
import CardDeck from "./CardDeck";


function App() {
    let card = new CardDeck();
    card.getCard();
  return (
    <div className="App">
      <div className='playingCards'>
          <Card rank='7' suit='spades'/>
          <Card rank='q' suit='clubs'/>
          <Card rank='a' suit='hearts'/>
      </div>
    </div>
  );
}

export default App;

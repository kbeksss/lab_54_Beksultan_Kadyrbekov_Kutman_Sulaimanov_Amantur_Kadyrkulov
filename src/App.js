import React, {Component} from 'react';
import './App.css';
import './cards.css';
import Card from "./Component/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component{
    state = {
        cards: ['jkjk'],
    };
    generate(){
        // let deck = new CardDeck();
        // let generatedCards = deck.getCards(5);
        console.log(this.state);
    }
    render() {
        let deck = new CardDeck();
        let cards = deck.getCards(5);
        console.log(cards);
        return(
            <div className="App">
                <button onClick={this.generate}>Generate</button>
                <div className='playingCards'>
                    {cards.map((cardArr, index) => (
                        <Card
                            key={index}
                            rank={cardArr[0].rank}
                            suit={cardArr[0].suit}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;

import React, {Component} from 'react';
import CardDeck from "../../CardDeck";
import PokerHand from "../../PokerHand";
import Card from "../Card/Card";

class Cards extends Component {
    state = {
        cards: [],
        pokerHand: ''
    };
    generate =  async () => {
        let deck = new CardDeck();
        let cards = deck.getCards(5);
        await this.setState({cards});
        let hand = new PokerHand(this.state.cards);
        let pokerHand = hand.getOutcome();
        if(pokerHand){
            this.setState({pokerHand});
        } else{
            this.setState({pokerHand: ''});
        }
    };
    render() {
        return(
            <div className="App">
                <button onClick={this.generate}>Generate</button>
                <div className='playingCards'>
                    {this.state.cards.map((cardArr, index) => (
                        <Card
                            key={index}
                            rank={cardArr[0].rank}
                            suit={cardArr[0].suit}/>
                    ))}
                </div>
                <span className='hand'>{this.state.pokerHand}</span>
            </div>
        )
    }
}

export default Cards;
import React, {Component} from 'react';
import './App.css';
import './cards.css';
import Card from "./Component/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component{
    state = {
        cards: [],
        type: ''
    };
    generate = () => {
        let deck = new CardDeck();
        let cards = deck.getCards(5);
        this.setState({cards});
        let royalFlush = [];
        let straightFlush = {
            spades: 0,
            diams: 0,
            hearts: 0,
            clubs: 0
        };
        setTimeout(() => {
            for(let cardArr of this.state.cards){
                if(cardArr[0].rank === 'a' || cardArr[0].rank ==='j' || cardArr[0].rank === 'q' || cardArr[0].rank === 'k'){
                    royalFlush.push(cardArr[0].rank);
                }
                switch (cardArr[0].suit) {
                    case 'spades':
                        straightFlush.spades++;
                        break;
                    case 'diams':
                        straightFlush.diams++;
                        break;
                    case 'hearts':
                        straightFlush.hearts++;
                        break;
                    case 'clubs':
                        straightFlush.clubs++;
                        break;
                    default:
                        console.error('Incorrect suit value')
                }
            }
            if(royalFlush.length === 5){
                let type = 'Royal flush';
                this.setState({type});
                console.log('Royal flush', royalFlush);
                royalFlush = [];
            } else if(straightFlush.spades === 5 || straightFlush.diams === 5 || straightFlush.hearts === 5 || straightFlush.clubs === 5){
                let type = 'Straight flush';
                this.setState({type});
                console.log('Straight flush', straightFlush);
            }

        }, 0);
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
                <span className='type'>{this.state.type}</span>
            </div>
        )
    }
}

export default App;

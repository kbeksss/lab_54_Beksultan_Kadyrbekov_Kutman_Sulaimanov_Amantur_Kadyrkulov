import React, {Component} from 'react';
import './App.css';
import './cards.css';
import Card from "./Component/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component{
    state = {
        cards: [],
        hand: ''
    };
    generate = () => {
        let deck = new CardDeck();
        let cards = deck.getCards(5);
        this.setState({cards});
        let royalFlush = 0;
        let suits = {spades: 0, diams: 0, hearts: 0, clubs: 0};
        let ranks = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0};
        setTimeout(() => {
            for(let cardArr of this.state.cards){
                switch (cardArr[0].suit) {
                    case 'spades':
                        suits.spades++;
                        break;
                    case 'diams':
                        suits.diams++;
                        break;
                    case 'hearts':
                        suits.hearts++;
                        break;
                    case 'clubs':
                        suits.clubs++;
                        break;
                    default:
                        console.error('Incorrect suit value')
                }
                switch (cardArr[0].rank) {
                    case 'a':
                        ranks[1]++;
                        break;
                    case 2:
                        ranks[2]++;
                        break;
                    case 3:
                        ranks[3]++;
                        break;
                    case 4:
                        ranks[4]++;
                        break;
                    case 5:
                        ranks[5]++;
                        break;
                    case 6:
                        ranks[6]++;
                        break;
                    case 7:
                        ranks[7]++;
                        break;
                    case 8:
                        ranks[8]++;
                        break;
                    case 9:
                        ranks[9]++;
                        break;
                    case 10:
                        ranks[10]++;
                        break;
                    case 'j':
                        ranks[11]++;
                        break;
                    case 'q':
                        ranks[12]++;
                        break;
                    case 'k':
                        ranks[13]++;
                        break;
                    default:
                        console.error('Incorrect rank value')
                }
                if(cardArr[0].rank === 'a' || cardArr[0].rank ==='j' || cardArr[0].rank === 'q' || cardArr[0].rank === 'k' || cardArr[0].rank === 10){
                    royalFlush++;
                }

            }
            if(suits.spades === 5 || suits.diams === 5 || suits.hearts === 5 || suits.clubs === 5){
                if(royalFlush === 5){
                    this.setState({hand: 'Royal flush'});
                    console.log('Royal flush');
                } else {
                    for(let r in ranks){
                        if(ranks[r] === 1 && ranks[r+1] ===1 && ranks[r+2] === 1 && ranks[r+3]===1 && ranks[r+4]===1){
                            console.log('kjkkljlkj')
                        }
                    }
                    this.setState({hand: 'Flush'});
                    console.log('Flush');
                }
            } else {
                this.setState({hand: ''});
            }
            for(let r in ranks){
                if(ranks[r] === 4){
                    this.setState({hand: 'Four of a kind'});
                    console.log('Four of a kind')
                } else if(ranks[r] === 3){
                    for(let r2 in ranks){
                        if(ranks[r2] === 2){
                            this.setState({hand: 'Full house'});
                            console.log('full house');
                        }
                    }
                }
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
                <span className='hand'>{this.state.hand}</span>
            </div>
        )
    }
}

export default App;

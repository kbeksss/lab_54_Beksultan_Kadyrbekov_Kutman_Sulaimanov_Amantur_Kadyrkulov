class CardDeck {
    cards = [];
    constructor(){
        let suits = ['spades', 'clubs', 'hearts', 'diams'];
        let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'j', 'q', 'k'];
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < ranks.length; j++){
                this.cards.push({suit: suits[i], rank: ranks[j]})
            }
        }
    }
    getCard(){
        return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
    }
    getCards(howMany){
        let cards = [];
        for(let i = 0; i < howMany; i++){
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;
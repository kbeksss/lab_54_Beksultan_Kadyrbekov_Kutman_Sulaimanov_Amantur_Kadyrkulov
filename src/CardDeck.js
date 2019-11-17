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
        console.log(this.cards);
    }
    getCard(){
        let index = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(index, 1);
    }
    getCards(howMany){
        let cards = [];
        for(let i = 0; i < howMany; i++){
            let index = Math.floor(Math.random() * this.cards.length);
            cards.push(this.cards.splice(index, 1));
        }
        return cards;
    }
}

export default CardDeck;
class CardDeck {
    cards = [];
    constructor(){
        let suits = ['spades', 'clubs', 'hearts', 'diams'];
        let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'j', 'q', 'k'];
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < ranks.length; j++){
                this.cards.push({suits: suits[i], ranks: ranks[j]})
            }
        }
        console.log(this.cards);
    }
    getCard(){
        const card = this.cards[Math.floor(Math.random() * this.cards.length)];
        console.log(card);
    }
    getCards(howMany){

    }
}

export default CardDeck;
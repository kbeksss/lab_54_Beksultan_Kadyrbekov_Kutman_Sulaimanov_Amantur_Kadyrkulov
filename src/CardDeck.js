class CardDeck {
    cards = [];
    constructor(){
        let suits = ['spades', 'clubs', 'hearts', 'diams'];
        let ranks = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
        for(let i = 0; i < suits.length; i++){
            let suitId = 0;
            switch (suits[i]) {
                case 'spades':
                    suitId = 1;
                    break;
                case 'clubs':
                    suitId = 2;
                    break;
                case 'hearts':
                    suitId = 3;
                    break;
                case 'diams':
                    suitId = 4;
                    break;
                default:
                    console.error("SuitId error");
            }
            for(let j = 0; j < ranks.length; j++){
                let rankNum = 0;
                switch (ranks[j]) {
                    case 'a':
                        rankNum = 1;
                        break;
                    case 'j':
                        rankNum = 11;
                        break;
                    case 'q':
                        rankNum = 12;
                        break;
                    case 'k':
                        rankNum = 13;
                        break;
                    default:
                        rankNum = ranks[j];
                }
                this.cards.push({suit: suits[i], rank: ranks[j], suitId, rankNum})
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
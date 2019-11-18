class PokerHand{
    constructor(cards){
        this.cards = cards;
    }
    getOutcome = () => {
        let hand = '';
        let suits = 0;
        let ranks = 0;
        for(let i = 0; i < this.cards.length; i++){
            for(let j = i + 1; j < this.cards.length; j++){
                if(this.cards[i][0].suitId === this.cards[j][0].suitId){
                    suits++;
                }
                if(this.cards[i][0].rankNum === this.cards[j][0].rankNum){
                    ranks++;
                }
            }
        }
        if(ranks === 1) hand = 'One pair';

        if(ranks === 2) hand = 'Two pairs';

        if(ranks === 3) hand = 'Three of a kind';

        if(suits === 10) hand = 'Flush';

        return hand;
    }

}


export default PokerHand;
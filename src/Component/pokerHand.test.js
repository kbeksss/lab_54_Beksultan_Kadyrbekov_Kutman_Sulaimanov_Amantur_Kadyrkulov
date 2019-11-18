import PokerHand from "../PokerHand";

let Flush = [[{suit : 'spades', rank : 'k', suitId : 1, rankNum : 1}],[{suit : 'spades', rank : 'k', suitId : 1, rankNum : 13}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}], [{suit : 'spades', rank : '5', suitId : 1, rankNum : 5}], [{suit : 'spades', rank : '2', suitId : 1, rankNum : 2}]];

let FourOfAKind = [[{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}],[{suit : 'clubs', rank : 'k', suitId : 2, rankNum : 13}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}]];

let ThreeOfAKind = [[{suit : 'spades', rank : '3', suitId : 1, rankNum : 3}],[{suit : 'clubs', rank : 'k', suitId : 2, rankNum : 13}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}], [{suit : 'spades', rank : '6', suitId : 1, rankNum : 6}]];



it('should determine Flush', function () {
    let ex = new PokerHand(Flush);
    let result = ex.getOutcome();
    expect(result).toEqual('Flush');
});

it('should determine Three of a kind', function () {
   let ex = new PokerHand(ThreeOfAKind);
   let result = ex.getOutcome();
   expect(result).toEqual('Three of a kind');
});

it('should determine Four of a kind', function () {
    let ex = new PokerHand(FourOfAKind);
    let result = ex.getOutcome();
    expect(result).toEqual('Four of a kind');
});
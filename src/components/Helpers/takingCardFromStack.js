
let takingCardFromStack=(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards)=>{
    let stackOfCards_copy=[...stackOfCards];
    let addedCard=stackOfCards_copy.pop();
    let cardsOfPlayers_copy=[...cardsOfPlayers];
    let cardsOfCurrentPlayer=cardsOfPlayers_copy[numberOfCurrentPlayer];
    cardsOfCurrentPlayer.push(addedCard);
    cardsOfPlayers_copy[numberOfCurrentPlayer]=cardsOfCurrentPlayer;
    setCardsOfPlayers(cardsOfPlayers_copy);
    setStackOfCards(stackOfCards_copy);
}
export default takingCardFromStack;
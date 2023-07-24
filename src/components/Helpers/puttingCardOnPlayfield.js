import determineNumberOfCurrentPlayer from "./determineNumberOfCurrentPlayer";

let puttingCardOnPlayfield=(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer)=>{
    let cardsOfPlayers_copy=[...cardsOfPlayers];
    let cardsOfCurrentPlayer=cardsOfPlayers[numberOfCurrentPlayer];
    for(let i=0;i<cardsOfCurrentPlayer.length;i++){
        if(cardsOfCurrentPlayer[i].src ==pickedCard.src){
            cardsOfCurrentPlayer.splice(i,1);
            break;
        }
    }
    cardsOfPlayers_copy[numberOfCurrentPlayer]=cardsOfCurrentPlayer; 
    setCardsOfPlayers([...cardsOfPlayers_copy])
    setUsedCards([...usedCards,pickedCard]);
    setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers));
}
export default puttingCardOnPlayfield;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
let destributionOfCards=(generatedStack,quantityOfPlayers)=>{
    let generatedStack_copy =[...generatedStack];
    let playersCardsArray=[];
    for(let i=0;i<quantityOfPlayers;i++){
        playersCardsArray[i]=[];
        for(let ii=0; ii<7;ii++){
            let removed= generatedStack_copy.pop();
            playersCardsArray[i].push(removed);
        }
    }
    return [generatedStack_copy,playersCardsArray]
}
let pickFirstCardToStartTheGame=(generatedStack)=>{
    let generatedStack_copy=[...generatedStack];
    let card=generatedStack.pop();
    return [card,generatedStack]
}
let GenerateStack=(CardsArray,quantityOfPlayers)=>{
    let generatedStack=[];
    for(let i=0;i<CardsArray.length;i++){
        if(CardsArray[i].color === "black" ){
            for(let ii=0;ii<4;ii++){
                generatedStack.push(CardsArray[i]);
            }
        }else{
            if(CardsArray[i].value==0){
                generatedStack.push(CardsArray[i]);
            }else{
                for(let ii=0;ii<2;ii++){
                    generatedStack.push(CardsArray[i]);
                }
            }
        }
    }

    return generatedStack;
}
let preparationToTheGame=(CardsArray,quantityOfPlayers)=>{
    let generatedStack=GenerateStack(CardsArray,quantityOfPlayers);
    generatedStack=shuffle(generatedStack);
    let [remainingStack, playersCardsArray]= destributionOfCards(generatedStack,quantityOfPlayers);
    let [FirstCardToStartTheGame,remainingStack_2]=pickFirstCardToStartTheGame(remainingStack);
    return [remainingStack_2, playersCardsArray,FirstCardToStartTheGame];

}

export default preparationToTheGame;

let determineNumberOfCurrentPlayer=(isReverse,pickedCard,numberOfCurrentPlayer,quantityOfPlayers)=>{
    let numberOfCurrentPlayer_copy=numberOfCurrentPlayer;
    if(pickedCard){
        if(pickedCard.type="number"){
            if(isReverse){
                if(numberOfCurrentPlayer-1 <0){
                    numberOfCurrentPlayer_copy=quantityOfPlayers-1;
                }else{
                    numberOfCurrentPlayer_copy=numberOfCurrentPlayer-1;
                }
              }else{
                if(numberOfCurrentPlayer+1==quantityOfPlayers){
                    numberOfCurrentPlayer_copy=0
                }else{
                    numberOfCurrentPlayer_copy=numberOfCurrentPlayer+1;
                }
              }
    
        }
    }else{
        if(isReverse){
            if(numberOfCurrentPlayer-1 <0){
                numberOfCurrentPlayer_copy=quantityOfPlayers-1;
            }else{
                numberOfCurrentPlayer_copy=numberOfCurrentPlayer-1;
            }
          }else{
            if(numberOfCurrentPlayer+1==quantityOfPlayers){
                numberOfCurrentPlayer_copy=0
            }else{
                numberOfCurrentPlayer_copy=numberOfCurrentPlayer+1;
            }
          }
    }
    return numberOfCurrentPlayer_copy;
}
export default determineNumberOfCurrentPlayer;
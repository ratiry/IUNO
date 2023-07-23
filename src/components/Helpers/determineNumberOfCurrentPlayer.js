
let determineNumberOfCurrentPlayer=(isReverse,numberOfCurrentPlayer,quantityOfPlayers)=>{
    debugger;
    let numberOfCurrentPlayer_copy=numberOfCurrentPlayer;
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
    debugger;
    return numberOfCurrentPlayer_copy;
}
export default determineNumberOfCurrentPlayer;
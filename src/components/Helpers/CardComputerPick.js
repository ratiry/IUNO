import ConditionsOnNewCard from "./ConditionsOnNewCard";

let CardComputerPick=(myCards,lastCard,needToTransferSkip)=>{
    let index=-1;
    let IsProper=false;
    for(let i=0;i<myCards.length;i++){
        IsProper = ConditionsOnNewCard(myCards[i],lastCard,needToTransferSkip);
        if(IsProper & myCards[i].color!="black"){
            return myCards[i]
        }
    }
    for(let i=0;i<myCards.length;i++){
        if(myCards[i].color =="black"){
            return myCards[i]
        }
    }
    return IsProper
}
export default CardComputerPick;
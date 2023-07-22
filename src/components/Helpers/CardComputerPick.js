import ConditionsOnNewCard from "./ConditionsOnNewCard";

let CardComputerPick=(myCards,lastCard)=>{
    let index=-1;
    for(let i=0;i<myCards.length;i++){
        let IsProper = ConditionsOnNewCard(myCards[i],lastCard);
        if(IsProper){
            return myCards[i]
        }
    }
    return false
}
export default CardComputerPick;
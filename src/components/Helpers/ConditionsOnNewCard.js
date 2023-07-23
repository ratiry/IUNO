
let ConditionsOnNewCard=(candidatCard,lastCard)=>{
    if((candidatCard.type!="number" & lastCard.type=="number") || (candidatCard.type=="number" & lastCard.type!="number")){
        if(candidatCard.color ==lastCard.color){
            return true;
        }
    }else if(candidatCard.type =="number" & lastCard.type =="number"){
        if( candidatCard.color ==lastCard.color || candidatCard.value ==lastCard.value){
            return true;
        }
    }else if( candidatCard.type !="number" & lastCard.type !="number"){
        if(candidatCard.color==lastCard.color || candidatCard.type == lastCard.type){
            return true;
        }
    }
    return false;
}
export default ConditionsOnNewCard;
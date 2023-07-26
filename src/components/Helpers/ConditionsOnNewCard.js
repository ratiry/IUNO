
let ConditionsOnNewCard=(candidatCard,lastCard,needToTransferSkip)=>{
    let IsProper=false;
    if(needToTransferSkip){
        if(candidatCard.type ==lastCard.type){
            IsProper=true;
        }else if(lastCard.type=="addfour" &  candidatCard.type=="addtwo" & candidatCard.color ==lastCard.color){
            IsProper=true;
        }
    }else{
        if((candidatCard.type!="number" & lastCard.type=="number") || (candidatCard.type=="number" & lastCard.type!="number")){
            if(candidatCard.color ==lastCard.color){
                IsProper= true;
            }
        }else if(candidatCard.type =="number" & lastCard.type =="number"){
            if( candidatCard.color ==lastCard.color || candidatCard.value ==lastCard.value){
                IsProper= true;
            }
        }else if( candidatCard.type !="number" & lastCard.type !="number"){
            if(candidatCard.color==lastCard.color || candidatCard.type == lastCard.type){
                IsProper= true;
            }
        }
        if(candidatCard.type=="ordercolor"){
            IsProper=true;
        }
    }   
    if(candidatCard.type=="addfour"){
        IsProper=false;
    }
    return IsProper;
}
export default ConditionsOnNewCard;
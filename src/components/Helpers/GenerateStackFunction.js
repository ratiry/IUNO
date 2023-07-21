

let GenerateStack=(CardsArray)=>{
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
export default GenerateStack;
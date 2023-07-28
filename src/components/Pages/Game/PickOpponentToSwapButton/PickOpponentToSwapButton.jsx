import classes from "./PickOpponentToSwapButton.module.scss";
let PickOpponentToSwapButton=(props)=>{
    let players=[];
    for(let i=0;i<props.quantityOfPlayers;i++){
        players.push(i);
    }
    let onClick=(id)=>{
        if(id !=0){
            props.onClick(id);
        }
    }
    let buttons=players.map((p)=><button onClick={()=>{onClick(p)}}>{p+1}</button>)
    return(
        <div className={classes.pickOpponentToSwapButton}>
            {buttons}
        </div>
    )
}
export default PickOpponentToSwapButton;
import classes from "./Player.module.scss";
import Card from "../Card/Card";
import card from "./../../../../images/cards/non active/2/red 2.png";
let Player=(props)=>{
    if(props.id<=props.quantityOfPlayers){
        if(props.isRealPlayear){
            
            return(
            <div className={classes.Player}>
                {props.cards.map((card)=><Card position={"realPlayers"} src={card.src} color={card.color} value={card.value} type={card.type}/>)}
            </div>
            )
        }
        return(
            <div className={classes.Player}>
                {/* {props.cards.map((card)=><Card src={card.src} color={card.color} value={card.value} type={card.type}/>)} */}
            </div>
        )
    }else{
        return <div></div>
    }
}
export default Player;
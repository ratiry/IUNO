import classes from "./Player.module.scss";
import Card from "../Card/Card";
import P from "../../../Common/Typography/P/P";
let Player=(props)=>{
    if(props.id<=props.quantityOfPlayers){
        if(props.isRealPlayear){
            
            return(
            <div className={classes.Player}>
                {props.cards && props.cards.map((card)=><Card moveOfRealPlayer={props.moveOfRealPlayer} position={"realPlayers"} src={card.src} color={card.color} value={card.value} type={card.type}/>)}
                {props.numberOfCurrentPlayer ==props.id-1 && <div className={classes.alertOfMove}><P>  it's your move now </P></div>}
                {props.winner ==props.id-1 && <div className={classes.alertOfMove}><P>you win</P></div>}
            </div>
            )
        }
        return(
            <div className={classes.Player}>
                {props.cards && props.cards.map((card)=><Card  src={card.src} color={card.color} value={card.value} type={card.type}/>)}
                {props.numberOfCurrentPlayer ==props.id-1 && <div className={classes.alertOfMove}><P>moves</P></div>}
                {props.winner ==props.id-1 && <div className={classes.alertOfMove}><P>won</P></div>}
            </div>
        )
    }else{
        return <div></div>
    }
}
export default Player;
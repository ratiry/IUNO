import classes from "./Card.module.scss";
import { cardsBackSrc } from "../../../Helpers/Cards";
let Card=(props)=>{
    let onClick=()=>{
        props.moveOfRealPlayer({
            color:props.color,
            type:props.type,
            src:props.src,
            value:props.value,
 
        });
    }
    switch(props.position){
        case "realPlayers":
            return <img onClick={onClick} className={classes.Card + " " + classes.realPlayer} src={props.src} alt={props.color + " " + props.value} />
        case "dock":
            return <img className={classes.Card + " " + classes.backCard} src={cardsBackSrc} alt={"dock card"} />
        case "playfield":
            return <img className={classes.Card + " " + classes.playfieldCard} src={props.src} alt={props.color + " " + props.value} />
        default:
            return <img className={classes.Card} src={props.src} alt={props.color + " " + props.value} />
    }
}
export default Card;
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
            return <div className={classes.playfieldCardCardContainer}><img onClick={onClick} className={classes.Card + " " + classes.realPlayer} src={props.src} alt={props.color + " " + props.value} /></div> 
        case "dock":
            return <div className={classes.playfieldCardCardContainer}><img className={classes.Card + " " + classes.backCard} src={cardsBackSrc} alt={"dock card"} /></div> 
        case "playfield":
            return <div className={classes.playfieldCardCardContainer}><img className={classes.Card + " " + classes.playfieldCard} src={props.src} alt={props.color + " " + props.value}  />{(props.type =="addfour" || props.type=="ordercolor") && <div style={{background:props.color}} className={classes.colorShadow}></div>} </div>
        default:
            return <div className={classes.playfieldCardCardContainer}><img className={classes.Card} src={props.src} alt={props.color + " " + props.value} /></div> 
    }
}
export default Card;
import classes from "./Card.module.scss";
let Card=(props)=>{
    return(
        props.isRealPlayear ? <img className={classes.Card + " " + classes.realPlayer} src={props.src} alt={props.color + " " + props.name} /> : <img className={classes.Card} src={props.src} alt={props.color + " " + props.name} />
    )
}
export default Card;
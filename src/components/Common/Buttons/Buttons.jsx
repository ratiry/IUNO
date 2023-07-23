import P from "../Typography/P/P";
import classes from "./Buttons.module.scss";
export let ButtonWithText=(props)=>{
    return(
        <button className={classes.ButtonWithText}onClick={props.onClick} ><p>{props.children}</p></button>
    )
}
export let ButtonWithIcon=(props)=>{
    return(
        <button className={classes.ButtonWithText}>{props.children}</button>
    )
}
import classes from "./ButtonContainer.module.scss";
let ButtonContainer=(props)=>{
    return(
        <div className={classes.ButtonContainer}>{props.children}</div>
    )
}
export default ButtonContainer;
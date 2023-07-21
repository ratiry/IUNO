import Card from "../Card/Card";
import classes from "./Dock.module.scss";
let Dock=(props)=>{
    
    return(
        <div className={classes.dock}>
            {props.cards.map((card)=><Card position={"dock"}/>)}

        </div>
    )
}
export default Dock;
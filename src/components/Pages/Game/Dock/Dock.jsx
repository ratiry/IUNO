import Card from "../Card/Card";
import classes from "./Dock.module.scss";
import P from "../../../Common/Typography/P/P";
let Dock=(props)=>{
    
    return(
        <div className={classes.dock}>
            {/* {props.cards.map((card)=><Card position={"dock"}/>)} */}
            {props.cards.length>0 && <Card position={"dock"}/>}
            <div className={classes.ammountOfDockCards}>
            <P>{props.cards.length} left</P>
            </div> 
        </div>
    )
}
export default Dock;
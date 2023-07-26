import { colorsArray } from "../../../Helpers/Cards";
import classes from "./PickButton.module.scss";
let PickColorButton=(props)=>{
    return(
        <div className={classes.PickColorButton}>
            <button onClick={()=>{props.onClick(colorsArray[0])}} style={{background:colorsArray[0]}}></button>
            <button onClick={()=>{props.onClick(colorsArray[1])}} style={{background:colorsArray[1]}}></button>
            <button onClick={()=>{props.onClick(colorsArray[2])}} style={{background:colorsArray[2]}}></button>
            <button onClick={()=>{props.onClick(colorsArray[3])}} style={{background:colorsArray[3]}}></button>
        </div>
    )
}
export default PickColorButton;
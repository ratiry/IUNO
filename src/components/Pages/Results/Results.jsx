import { useLocation } from "react-router-dom"
import classes from "./Results.module.scss";
import { defeatSrc, victorySrc } from "../../Helpers/Cards";
let Results=(props)=>{
    let location=useLocation();
    let results=location.state.results;
    let min=Math.min(...results);
    let indexOfMin=results.findIndex(elem => elem === min);
    debugger;
    if(indexOfMin==0){
        return(
            <div className={classes.results}>
                <img className={classes.resultsImg} src={victorySrc} alt="You won" />
                <div></div>
                <div></div>
            </div>
        )
    }else{
        return(
            <div className={classes.results}>
                <img className={classes.defeatImg} src={defeatSrc} alt="You won" />
                <div></div>
                <div></div>
            </div>
        )
    }
}
export default Results;
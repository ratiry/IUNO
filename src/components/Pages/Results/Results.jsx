import { useLocation } from "react-router-dom"
import classes from "./Results.module.scss";
import bubbleSort from "../../Helpers/bubbleSort";
import { firstPlaceSrc, fourthPlaceSrc, secondPlaceSrc, thirdPlaceSrc } from "../../Helpers/Cards";
let Results=(props)=>{
    let location=useLocation();
    let results=location.state.results;
    let playersScore=results[0];
    let resultsOrgranized=bubbleSort(results);
    let placeOfPlayer = resultsOrgranized.indexOf(playersScore);
    let places=[firstPlaceSrc,secondPlaceSrc,thirdPlaceSrc,fourthPlaceSrc];
    return(
        <div className={classes.results}>
            <img className={classes.resultsImg} src={places[placeOfPlayer]} alt="" />
            
        </div>
    )
}
export default Results;
import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import { useEffect ,useState} from "react";
import GenerateStack from "../../Helpers/GenerateStackFunction";
import CardsData from "../../Helpers/Cards";
let Game=()=>{
    let location=useLocation();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    let [stackOfCards,SetStackOfCards]=useState([]);
    useEffect(()=>{
        SetStackOfCards(GenerateStack(CardsData));
    },[])

    return(
        <div className={classes.Game}> 
            <div className={classes.Dock}></div>
            <Player id={2} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player id={3} quantityOfPlayers={quantityOfPlayers}/>
            <div className={classes.PlayField}></div>
            <Player id={4} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={stackOfCards} isRealPlayear={true} id={1} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
        </div>
    )
}
export default Game;
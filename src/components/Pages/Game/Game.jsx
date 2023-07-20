import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
let Game=()=>{
    let location=useLocation();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    return(
        <div className={classes.Game}> 
            <div className={classes.Dock}></div>
            <Player id={2} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player id={3} quantityOfPlayers={quantityOfPlayers}/>
            <div className={classes.PlayField}></div>
            <Player id={4} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player id={1} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
        </div>
    )
}
export default Game;
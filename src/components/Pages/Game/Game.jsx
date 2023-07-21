import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import { useEffect ,useState} from "react";
import preparationToTheGame from "../../Helpers/preparationToTheGame";
import CardsData from "../../Helpers/Cards";
import Dock from "./Dock/Dock";
import getRandomInt from "../../Helpers/Random";
import PlayField from "./Playfield/PlayField";
let Game=()=>{
    let location=useLocation();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    let [stackOfCards,setStackOfCards]=useState([]);
    let [cardsOfPlayers,setCardsOfPlayers] = useState([]);
    let [numberOfCurrentPlayer,setNumberOfCurrentPlayer] = useState(0);
    let [usedCards,setUsedCards] = useState([])
    useEffect(()=>{    
       let [remainingStack,firstPlayersCards,firstCardToStartTheGame] =preparationToTheGame(CardsData,quantityOfPlayers);
       setCardsOfPlayers(firstPlayersCards);
       setStackOfCards(remainingStack);
       setNumberOfCurrentPlayer(getRandomInt(quantityOfPlayers));
       setUsedCards([...usedCards,firstCardToStartTheGame]);
    },[])

    return(
        <div className={classes.Game}> 
            <Dock cards={stackOfCards}/>
            <Player cards={cardsOfPlayers[1]} id={2} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={cardsOfPlayers[2]} id={3} quantityOfPlayers={quantityOfPlayers}/>
            <PlayField cards={usedCards}/>
            <Player cards={cardsOfPlayers[3]} id={4} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={cardsOfPlayers[0]} isRealPlayear={true} id={1} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
        </div>
    )
}
export default Game;
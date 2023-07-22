import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import { useEffect ,useState} from "react";
import preparationToTheGame from "../../Helpers/preparationToTheGame";
import CardsData from "../../Helpers/Cards";
import Dock from "./Dock/Dock";
import getRandomInt from "../../Helpers/Random";
import PlayField from "./Playfield/PlayField";
import CardComputerPick from "../../Helpers/CardComputerPick";
let Game=()=>{
    let location=useLocation();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    let [stackOfCards,setStackOfCards]=useState([]);
    let [cardsOfPlayers,setCardsOfPlayers] = useState([]);
    let [numberOfCurrentPlayer,setNumberOfCurrentPlayer] = useState(-1);
    let [usedCards,setUsedCards] = useState([]);
    let [isReverse,setIsReverse] = useState(false);
    window.cardsOfPlayers=cardsOfPlayers;
    useEffect(()=>{    
       let [remainingStack,firstPlayersCards,firstCardToStartTheGame] =preparationToTheGame(CardsData,quantityOfPlayers);
       setCardsOfPlayers(firstPlayersCards);
       setStackOfCards(remainingStack);
       setNumberOfCurrentPlayer(getRandomInt(quantityOfPlayers));
       setUsedCards([...usedCards,firstCardToStartTheGame]);
    },[])
    useEffect(()=>{
        if(numberOfCurrentPlayer !=-1 & numberOfCurrentPlayer !=0){
            let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1]);
                setTimeout(function() {
                    console.log(pickedCard);
                    if(pickedCard !=false){
                        let cardsOfPlayers_copy=[...cardsOfPlayers];
                        let cardsOfCurrentPlayer=cardsOfPlayers[numberOfCurrentPlayer].filter( Card=> Card.src !==pickedCard.src);//bug - deletes doubles like 2 and 2 with the same src
                        cardsOfPlayers_copy[numberOfCurrentPlayer]=cardsOfCurrentPlayer; 
                        setCardsOfPlayers([...cardsOfPlayers_copy])
                        setUsedCards([...usedCards,pickedCard]);
                    }
                    if(isReverse){
                        if(numberOfCurrentPlayer-1 <0){
                            setNumberOfCurrentPlayer(quantityOfPlayers-1);
                        }else{
                            setNumberOfCurrentPlayer(numberOfCurrentPlayer-1);
                        }
                      }else{
                        if(numberOfCurrentPlayer+1==quantityOfPlayers){
                            setNumberOfCurrentPlayer(0)
                        }else{
                            setNumberOfCurrentPlayer(numberOfCurrentPlayer+1)
                        }
                      }
                  }, 3*1000);

            
        }
    },[numberOfCurrentPlayer])
    return(
        <div className={classes.Game}> 
            <Dock cards={stackOfCards}/>
            <Player cards={cardsOfPlayers[2]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={3} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={cardsOfPlayers[1]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={2} quantityOfPlayers={quantityOfPlayers}/>
            <PlayField cards={usedCards}/>
            <Player cards={cardsOfPlayers[3]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={4} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={cardsOfPlayers[0]} numberOfCurrentPlayer={numberOfCurrentPlayer} isRealPlayear={true} id={1} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
        </div>
    )
}
export default Game;
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
import determineNumberOfCurrentPlayer from "../../Helpers/determineNumberOfCurrentPlayer";
import ConditionsOnNewCard from "../../Helpers/ConditionsOnNewCard";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { ButtonWithText } from "../../Common/Buttons/Buttons";
import puttingCardOnPlayfield from "../../Helpers/puttingCardOnPlayfield";
import takingCardFromStack from "../../Helpers/takingCardFromStack";
import shuffle from "../../Helpers/shuffle";
let Game=()=>{
    let location=useLocation();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    let [stackOfCards,setStackOfCards]=useState([]);
    let [cardsOfPlayers,setCardsOfPlayers] = useState([]);
    let [numberOfCurrentPlayer,setNumberOfCurrentPlayer] = useState(-1);
    let [usedCards,setUsedCards] = useState([]);
    let [isReverse,setIsReverse] = useState(false);
    let [secondAttemptToMoveComputer,setSecondAttemptToMoveComputer]= useState(false);
    let [shouldShowTakeCardButton,setShouldShowTakeCardButton] = useState(false);
    let [shouldShowPassButton,setShouldShowPassButton]=useState(false);
    let [playersOutOfGame,setPlayersOutOfGame] = useState([]);
    window.playersOutOfGame=playersOutOfGame;
    window.cardsOfPlayers=cardsOfPlayers;
    window.stackOfCards= stackOfCards;
    window.usedCards=usedCards;
    let moveOfRealPlayer=(pickedCard)=>{
        if(numberOfCurrentPlayer ==0){
            if(ConditionsOnNewCard(pickedCard,usedCards[usedCards.length-1])){
                puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer);
                setShouldShowTakeCardButton(false);
                setShouldShowPassButton(false);
            }else{
                let BlackCard = cardsOfPlayers[numberOfCurrentPlayer].find(obj =>  obj.color === "black");
                // code about using blackCard, if others cards are not right
            }
        }
    }
    let takeCardButtonOnClick=()=>{
        setShouldShowTakeCardButton(false);
        setShouldShowPassButton(true);
        takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards);
    }
    let passButtonOnClick=()=>{
        setShouldShowPassButton(false);
        setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers));
    }
    useEffect(()=>{    
       let [remainingStack,firstPlayersCards,firstCardToStartTheGame] =preparationToTheGame(CardsData,quantityOfPlayers);
       setCardsOfPlayers(firstPlayersCards);
       setStackOfCards(remainingStack);
       setNumberOfCurrentPlayer(getRandomInt(quantityOfPlayers));
       setUsedCards([...usedCards,firstCardToStartTheGame]);
    },[])
    useEffect(()=>{
        if(numberOfCurrentPlayer !=-1 & numberOfCurrentPlayer !=0){
            //if card isn't cancel of move or add towo or four
            let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1]);
            setSecondAttemptToMoveComputer(false);
                setTimeout(function() {
                    if(pickedCard !=false){
                        puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer);
                        if(cardsOfPlayers[numberOfCurrentPlayer].length===0){
                        }
                    }else{
                        takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards);
                        setSecondAttemptToMoveComputer(true);
                    }
                  }, 1.5);

            
        }else if(numberOfCurrentPlayer==0){
            setShouldShowTakeCardButton(true);
        }
    },[numberOfCurrentPlayer])
    useEffect(()=>{
        if(secondAttemptToMoveComputer){
            let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1]);
            setTimeout(function(){
                if(pickedCard !=false){
                    puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer);
                }else{
                    setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers))
                }
            },1.5)
        }
    },[secondAttemptToMoveComputer])
    useEffect(()=>{
        if(stackOfCards.length==3){
            console.log(usedCards);
            // let usedCardsToBeInStack = [...usedCards];
            // let lastUsedCard=usedCardsToBeInStack[usedCardsToBeInStack.length-1];
            // usedCardsToBeInStack.splice(usedCardsToBeInStack.length-1,1);
            // let stackOfCards_copy=[...stackOfCards];
            // let newStackOfCard = shuffle(stackOfCards_copy.concat(usedCardsToBeInStack));
            // setStackOfCards(newStackOfCard);
            // setUsedCards([lastUsedCard]);
        }
    },[stackOfCards])
    return(
        <div className={classes.Game}> 
            <Dock cards={stackOfCards}/>
            <Player cards={cardsOfPlayers[2]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={3} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player cards={cardsOfPlayers[1]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={2} quantityOfPlayers={quantityOfPlayers}/>
            <PlayField cards={usedCards}/>
            <Player cards={cardsOfPlayers[3]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={4} quantityOfPlayers={quantityOfPlayers}/>
            <ButtonContainer>{shouldShowTakeCardButton? <ButtonWithText onClick={takeCardButtonOnClick}>Take card</ButtonWithText>: shouldShowPassButton ? <ButtonWithText onClick={passButtonOnClick}>Pass</ButtonWithText> : <></>}</ButtonContainer>
            <Player moveOfRealPlayer={moveOfRealPlayer} cards={cardsOfPlayers[0]} numberOfCurrentPlayer={numberOfCurrentPlayer} isRealPlayear={true} id={1} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
        </div>
    )
}
export default Game;
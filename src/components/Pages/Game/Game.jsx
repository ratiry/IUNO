import {  useLocation, useNavigate } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import { useEffect ,useState} from "react";
import preparationToTheGame from "../../Helpers/preparationToTheGame";
import CardsData, { colorsArray } from "../../Helpers/Cards";
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
import { URLs } from "../../../App";
import PickColorButton from "./PickColorButton/PickColorButton";
import PickOpponentToSwapButton from "./PickOpponentToSwapButton/PickOpponentToSwapButton";
import puttingCardOnPlayfieldWithSwap from "../../Helpers/puttingCardOnPlayfieldWithSwap";
let Game=()=>{
    let location=useLocation();
    let navigate=useNavigate();
    let quantityOfPlayers=Number(location.state.ammountOfPlayers);
    let [stackOfCards,setStackOfCards]=useState([]);
    let [cardsOfPlayers,setCardsOfPlayers] = useState([]);
    let [numberOfCurrentPlayer,setNumberOfCurrentPlayer] = useState(-1);
    let [usedCards,setUsedCards] = useState([]);
    let [isReverse,setIsReverse] = useState(false);
    let [secondAttemptToMoveComputer,setSecondAttemptToMoveComputer]= useState(false);
    let [shouldShowTakeCardButton,setShouldShowTakeCardButton] = useState(false);
    let [shouldShowPassButton,setShouldShowPassButton]=useState(false);
    let [isTheEnd,setIsTheEnd] =useState(false); 
    let [results,setResults]=useState([]);
    let [winner,setWinner] = useState(-1);
    let [needToTransferSkip,setNeedToTransferSkip]=useState(false);
    let [shouldShowSkipButton,SetShouldShowSkipButton]=useState(false);
    let [shouldShowPickColorButton,setShouldShowPickColorButton]=useState(false);
    let [shouldShowPickOpponentToSwapButton,setShouldShowPickOpponentToSwapButton]=useState(false);
    let [pickedBlackCard,setPickedBlackCard] = useState({});
    window.results=results;
    window.cardsOfPlayers=cardsOfPlayers;
    window.stackOfCards= stackOfCards;
    window.usedCards=usedCards;
    window.setIsTheEnd=setIsTheEnd;
    window.setCardsOfPlayers=setCardsOfPlayers;
    let resultsButtonOnClick=()=>{
        navigate( URLs.results,{
            state:{
                results:results,
            }
        })
    }
    let moveOfRealPlayer=(pickedCard)=>{
        if(numberOfCurrentPlayer ==0 & !isTheEnd){
            if(ConditionsOnNewCard(pickedCard,usedCards[usedCards.length-1],needToTransferSkip)){
                setShouldShowTakeCardButton(false);
                setShouldShowPassButton(false);
                if(pickedCard.color=="black"){
                    setShouldShowPickColorButton(true);
                    setPickedBlackCard(pickedCard);

                }else{
                    setShouldShowPickColorButton(false);
                    puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse);
                    if(pickedCard.type=="addtwo" ||  pickedCard.type=="skip"){
                        setNeedToTransferSkip(true);
                    }
                    if(cardsOfPlayers[numberOfCurrentPlayer].length===0){
                        setIsTheEnd(true);
                        setNumberOfCurrentPlayer(-1);
                    }
                }
            }
        }
    }
    let pickColorButtonOnClick=(color)=>{
        setShouldShowPickOpponentToSwapButton(false);
        let pickedBlackCard_copy=pickedBlackCard;
        pickedBlackCard_copy.color=color;
        if(pickedBlackCard_copy.type=="addfour"){
            setNeedToTransferSkip(true);
        }
        if(pickedBlackCard_copy.type=="swap"){
            setShouldShowPickOpponentToSwapButton(true);
            setPickedBlackCard(pickedBlackCard_copy);
        }else{
            setPickedBlackCard({});
            puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedBlackCard_copy,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse);
            if(cardsOfPlayers[numberOfCurrentPlayer].length==0){
                setIsTheEnd(true);
            }
        }
        setShouldShowPickColorButton(false);
    }
    let PickOpponentToSwapButtonOnClick=(id)=>{
        setShouldShowPickColorButton(false);
        puttingCardOnPlayfieldWithSwap(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedBlackCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse,id,setIsTheEnd);
        setPickedBlackCard({});
        if(cardsOfPlayers[numberOfCurrentPlayer].length==0){
            setIsTheEnd(true);
        }
        setShouldShowPickOpponentToSwapButton(false);
    }
    let skipButtonOnClick=()=>{
        setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers));
        SetShouldShowSkipButton(false);
        setNeedToTransferSkip(false);
        if(usedCards[usedCards.length-1].type=="addtwo"){
            takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,2);
        }
        if(usedCards[usedCards.length-1].type=="addfour"){
            takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,4);
        }
    }
    let takeCardButtonOnClick=()=>{
        setShouldShowTakeCardButton(false);
        setShouldShowPassButton(true);
        takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,1);
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
        if(numberOfCurrentPlayer !=-1 & numberOfCurrentPlayer !=0 & !isTheEnd){
            setShouldShowPassButton(false);
            setShouldShowTakeCardButton(false);
            SetShouldShowSkipButton(false);
            setShouldShowPickColorButton(false);
            if(needToTransferSkip){
                setTimeout(function(){
                    let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1],needToTransferSkip);
                    if(pickedCard !=false){
                        if(pickedCard.type =="addfour" ){
                            let color=colorsArray[getRandomInt(colorsArray.length)];
                            pickedCard.color=color;
                        }
                        puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse);
                        if(cardsOfPlayers[numberOfCurrentPlayer].length==0){
                            setIsTheEnd(true);
                        }
                    }else{
                        setNeedToTransferSkip(false);
                        if(usedCards[usedCards.length-1].type=="addtwo"){
                            takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,2);
                        }
                        if(usedCards[usedCards.length-1].type=="addfour"){
                            takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,4);
                        }
                        if(cardsOfPlayers[numberOfCurrentPlayer].length===0){
                            setIsTheEnd(true);
                        }
                    }
                    setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers));
                },1.5*1000)
            }else{
                let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1]);
                setSecondAttemptToMoveComputer(false);
                    setTimeout(function() {
                        if(pickedCard !=false){
                            if(pickedCard.color=="black"){
                                let color=colorsArray[getRandomInt(colorsArray.length)];
                                pickedCard.color=color;
                                debugger;
                            }
                            if(pickedCard.type=="addtwo" || pickedCard.type=="addfour" || pickedCard.type=="skip"){
                                setNeedToTransferSkip(true);
                            }
                            if(pickedCard.type=="swap"){
                                let opponents=[];
                                for(let i=0;i<quantityOfPlayers;i++){
                                    if(i != numberOfCurrentPlayer){
                                        opponents.push(i);
                                    }
                                }
                                let idOfOpponent = opponents[Math.floor(Math.random()*opponents.length)];
                                puttingCardOnPlayfieldWithSwap(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse,idOfOpponent,setIsTheEnd);

                            }else{
                                puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse);
                            }
                            if(cardsOfPlayers[numberOfCurrentPlayer].length===0){
                                setIsTheEnd(true);
                            }
                        }else{
                            takingCardFromStack(stackOfCards,cardsOfPlayers,numberOfCurrentPlayer,setCardsOfPlayers,setStackOfCards,1);
                            setSecondAttemptToMoveComputer(true);
                        }
                      }, 1.5*1000);
            }    
        }else if(numberOfCurrentPlayer==0){
            if(needToTransferSkip){
                SetShouldShowSkipButton(true);
            }else{
                setShouldShowTakeCardButton(true);
            }
        }
    },[numberOfCurrentPlayer])
    useEffect(()=>{
        if(secondAttemptToMoveComputer){
            let pickedCard= CardComputerPick(cardsOfPlayers[numberOfCurrentPlayer],usedCards[usedCards.length-1]);
            setTimeout(function(){
                if(pickedCard !=false & !needToTransferSkip){//quastion & !needToTransferSkip
                    if(pickedCard.color=="black"){
                        let color=colorsArray[getRandomInt(colorsArray.length)];
                        pickedCard.color=color;
                    }
                    puttingCardOnPlayfield(usedCards,cardsOfPlayers,numberOfCurrentPlayer,pickedCard,isReverse,quantityOfPlayers,setCardsOfPlayers,setUsedCards,setNumberOfCurrentPlayer,setIsReverse);
                    if(pickedCard.type=="addtwo" || pickedCard.type=="addfour" || pickedCard.type=="skip"){
                        setNeedToTransferSkip(true);
                    }
                }else{
                    setNumberOfCurrentPlayer(determineNumberOfCurrentPlayer(isReverse,numberOfCurrentPlayer,quantityOfPlayers))
                }
            },1.5*1000)
        }
    },[secondAttemptToMoveComputer])
    useEffect(()=>{
        if(isTheEnd){
            let results_=[];
            for(let i=0;i<cardsOfPlayers.length;i++){
                let summ=0;
                if(cardsOfPlayers[i].length>0){
                    console.log(cardsOfPlayers[i].length);
                    let length=cardsOfPlayers[i].length;
                    for(let ii=0;ii<length;ii++){
                        console.log(cardsOfPlayers[i][ii].value);
                        summ=summ+cardsOfPlayers[i][ii].value;
                    }
                }
                results_.push(summ);
            }
            setShouldShowTakeCardButton(false);
            SetShouldShowSkipButton(false);
            setShouldShowPassButton(false);
            setShouldShowPickColorButton(false);
            setNumberOfCurrentPlayer(-1);
            setResults(results_);
            let theMinScore=Math.min(...results_);
            setWinner(results_.findIndex(elem => elem === theMinScore));
        }
    },[isTheEnd])
    // useEffect(()=>{
    //     if(stackOfCards.length==3){
    //         console.log(usedCards);
    //         // let usedCardsToBeInStack = [...usedCards];
    //         // let lastUsedCard=usedCardsToBeInStack[usedCardsToBeInStack.length-1];
    //         // usedCardsToBeInStack.splice(usedCardsToBeInStack.length-1,1);
    //         // let stackOfCards_copy=[...stackOfCards];
    //         // let newStackOfCard = shuffle(stackOfCards_copy.concat(usedCardsToBeInStack));
    //         // setStackOfCards(newStackOfCard);
    //         // setUsedCards([lastUsedCard]);
    //     }
    // },[stackOfCards])
    // useEffect(()=>{
    //     if(stackOfCards.length==0 & numberOfCurrentPlayer!=-1){
    //         debugger;
    //         setIsTheEnd(true);
    //     }
    // },[stackOfCards])

    return(
        <div className={classes.Game}> 
            <Dock cards={stackOfCards}/>
            <Player winner={winner} cards={cardsOfPlayers[2]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={3} quantityOfPlayers={quantityOfPlayers}/>
            <div></div>
            <Player winner={winner} cards={cardsOfPlayers[1]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={2} quantityOfPlayers={quantityOfPlayers}/>
            <PlayField cards={usedCards}/>
            <Player winner={winner} cards={cardsOfPlayers[3]} numberOfCurrentPlayer={numberOfCurrentPlayer} id={4} quantityOfPlayers={quantityOfPlayers}/>
            <ButtonContainer>{shouldShowTakeCardButton? <ButtonWithText onClick={takeCardButtonOnClick}>Take card</ButtonWithText>: shouldShowPassButton ? <ButtonWithText onClick={passButtonOnClick}>Pass</ButtonWithText> : shouldShowSkipButton ? <ButtonWithText onClick={skipButtonOnClick}>Skip</ButtonWithText>:<></>}</ButtonContainer>
            <Player winner={winner} moveOfRealPlayer={moveOfRealPlayer} cards={cardsOfPlayers[0]} numberOfCurrentPlayer={numberOfCurrentPlayer} isRealPlayear={true} id={1} quantityOfPlayers={quantityOfPlayers}/>
            <ButtonContainer>{winner!=-1  ? <ButtonWithText onClick={resultsButtonOnClick}>Results</ButtonWithText> : shouldShowPickColorButton ? <PickColorButton onClick={pickColorButtonOnClick}/>:shouldShowPickOpponentToSwapButton ? <PickOpponentToSwapButton onClick={PickOpponentToSwapButtonOnClick} quantityOfPlayers={quantityOfPlayers}/>:<></>}</ButtonContainer>
        </div>
    )
}
export default Game;
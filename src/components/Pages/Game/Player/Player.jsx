import classes from "./Player.module.scss";
let Player=(props)=>{
    if(props.id<=props.quantityOfPlayers){
        console.log(props.id)
        return(
            <div className={classes.Player}>
                <h1>ffhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhf</h1>
            </div>
        )
    }else{
        return <div></div>
    }
}
export default Player;
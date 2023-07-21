import classes from './Playfield.module.scss';
import Card from '../Card/Card';
let PlayField=(props)=>{
    return(
        <div className={classes.playfield}>
            {props.cards && props.cards.map((card)=><Card position={"playfield"} src={card.src} color={card.color} value={card.value} type={card.type}/>)}
        </div>
    )
}
export default PlayField;
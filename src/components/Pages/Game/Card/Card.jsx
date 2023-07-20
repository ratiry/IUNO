import clasees from "./Card.module.scss";
let Card=(props)=>{
    return(
        <button>
            <img src={props.src} alt={props.color + " " + props.name} />
        </button>
    )
}
export default Card;
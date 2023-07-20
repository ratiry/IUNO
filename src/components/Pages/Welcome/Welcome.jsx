
import classes from "./Welcome.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { URLs } from "../../../App";
let Welcome=(props)=>{
    let navigate=useNavigate();
    let ComputerPlayers=[];
    let computerPlayersHtml=[];
    let preffiledValues={
      ammountOfPlayers:'2'
    }
    const  {
      register,
      formState:{
        errors
      },
      watch,
      handleSubmit,
    } = useForm({
      defaultValues:preffiledValues
    })
    let watchFields = watch("ammountOfPlayers"); 
    const onSubmit=(data)=>{
      navigate(URLs.game,{
        state:data
      })
    }
  
    return(
        <div className={classes.Welcome}>
            <h1>Uno Game</h1>
            <form  onSubmit={handleSubmit(onSubmit) }>

                <div className={classes.Item}>
                    <p>How many players</p>
                    <select  name="ammountOfPlayers" {...register('ammountOfPlayers')}>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                </select>
                </div>
                <button>Play</button>
            </form>
        </div>
    )
}
export default Welcome;
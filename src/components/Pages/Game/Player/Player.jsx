import classes from "./Player.module.scss";
import Card from "../Card/Card";
import card from "./../../../../images/cards/non active/2/red 2.png";
let Player=(props)=>{
    if(props.id<=props.quantityOfPlayers){
        console.log(props.id)
        return(
            <div className={classes.Player}>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>

                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/><Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>

                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>

                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>

                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>

                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
                <Card src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"/>
            </div>
        )
    }else{
        return <div></div>
    }
}
export default Player;
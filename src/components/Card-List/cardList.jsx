import { Component } from "react";
import "./card-list.css"

class CardList extends Component{
    render(){
        const {monsters} = this.props;
        const {name, id, email} = monsters; // Destructuring 
        return(

            <div className="card-list">{
                monsters.map((monster) =>(
                    <div className="card-container" key = {monster.id}> 

                    <img alt={`monsters ${monster.name}`}src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}></img>
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                    </div>
                ))
            } </div>
        )
    }
}
export default CardList
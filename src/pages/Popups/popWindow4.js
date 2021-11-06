import React, { useState } from "react";
import "./Popup.css";
import axios from "axios";
import image from './ShoppingIcon.png';

function Popup4(props) {
    const [games, setGames] = useState([])
    const gamescontent=() => {
        axios.get('http://localhost:8081/demo_war_exploded/GetGames')
            .then(res => {
                setGames(res.data)
                console.log(res)
            })
    }
    const gameSummary= games.map(a => a.summary);
    const gameDevelopers= games.map(a => a.developers);
    const gamePrice= games.map(a => a.price);
    const gameGenres= games.map(a => a.genres);
    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner">
            <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
                <div>
                <center><img src= {'https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg?width=300'} alt="pic"/></center>
                
                <center><button className="view-btn" onClick={gamescontent}>Click to View Game Details </button></center>
                <h3 className="des-header">Description</h3>
                <h4 className="des-content">Summary: <i> {gameSummary[3]}</i></h4>
                <h4 className="des-content">Developers: {gameDevelopers[3]}</h4>
                <h4 className="des-content">Genres: {gameGenres[3]}</h4>
                <h4 className="des-content" >Price(Monthly):$ {gamePrice[3]}</h4>
                <div>
                <br></br><br></br>
                <input type="image" name="img-btn" className="icon-btn" src={image}  alt="icon"></input>
                </div>
                </div>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup4;
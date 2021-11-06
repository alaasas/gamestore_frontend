import React, { useState } from "react";
import "./Popup.css";
import axios from "axios";
import image from './ShoppingIcon.png';

function Popup3(props) {
    const [games, setGames] = useState([])
    const gamescontent=() => {
        axios.get('http://localhost:8081/demo_war_exploded/GetGames')
            .then(res => {
                setGames(res.data)
                console.log(res)
            })
    }
    const gameId= games.map(a => a.gameId);
    const gameName= games.map(a => a.gameName);
    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner">
            <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
                <div>
                <center><img src= {'https://assets-prd.ignimgs.com/2020/11/14/marvels-spider-man-general-1605330330912.jpg?width=300'} alt="pic"/></center>
                
                <center><button className="view-btn" onClick={gamescontent}>Click to View Game Details </button></center>
                <h3 className="des-header">Description</h3>
                <h4>Summary: {gameId[2]}</h4>
                <h4>Developers: {gameName[2]}</h4>
                <h4>Genres</h4>
                <h4>Price(Monthly):</h4>
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

export default Popup3;
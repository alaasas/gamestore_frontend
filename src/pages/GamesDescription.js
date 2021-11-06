import React, { useState } from "react";
import "./Popup.css";
import axios from "axios";
function GamesDescription() {
    const [games, setGames] = useState([])
    const gamesDescription = () => {
        axios.get('http://localhost:8081/demo_war_exploded/GetGames')
            .then(response => {
                setGames(response.data)
                console.log(games)
            })
        const urls = games.map(a => a.URL);
        console.log(urls)
    };
    return (
        <div className="Store">
            <div className="StoreForm">
                <h1>hi</h1>
            </div>
        </div>
    );
};

export default GamesDescription;
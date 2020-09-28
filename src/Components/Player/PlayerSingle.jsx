import React from 'react'
// import axios from 'axios'
import PlayerList from './PlayerList'

const removePlayer = (e) => {
    if(PlayerList === 'Med'){
        console.log(PlayerList)
    }
}

function PlayerSingle(props) {

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt="soccer" />
                        <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.player.phone} - Email: {props.player.email}.</p>
                        <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}.</p>
                    </div>
                    <div className="card-action">
                        Team: {props.player.team}
                    </div>
                </div>
                <button onClick={removePlayer} className="btn waves-effect waves-light" type="submit" nme="action">Remove Player</button>
            </div>
        </div>

    )
}
 
export default PlayerSingle;
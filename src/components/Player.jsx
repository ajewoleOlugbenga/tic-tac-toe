import React, { useState } from "react";

const Player = (props) => {

    const [playerName,setPlayerName] = useState(props.name)
    const [isEditing, setIsEditing] = useState(false);

    const HandleIsEditing = () => {
        setIsEditing((editing) => !editing);
    }

    const ChangePlayerNameHandler = (event) => {
        setPlayerName(event.target.value)

    }

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        { isEditing ? <input type="text" required value={playerName} onChange={ChangePlayerNameHandler}/> :<span className="player-name">{playerName}</span>}
        <span className="player-x">{props.symbol}</span>
      </span>
      <button onClick={HandleIsEditing}>{isEditing ?"save"  : "Edit"}</button>
    </li>
  );
};

export default Player;

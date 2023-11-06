import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, cellIndex) => {
    setActivePlayer((currentActivePlayer) =>
      (currentActivePlayer === "X" ? "O" : "X")
    );
    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
       
      }
      const updatedTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
};

export default App;

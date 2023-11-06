import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/Winning-combinations";
import GameOver from "./components/GameOver";

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [players,setPlayers] = useState({
    X: "Player 1",
    O : "Player 2"
  })

  let gameBoard = [...initialGame.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, cell } = square;

    gameBoard[row][cell] = player;
  }
  let winner;

  const hasDraw = gameTurns.length === 9 && !winner;

  for (const winning of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[winning[0].row][winning[0].column]
    const secondSquareSymbol  = gameBoard[winning[1].row][winning[1].column]
    const thirdSquareSymbol  = gameBoard[winning[2].row][winning[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
    }
  }


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

  const HandleReset = () =>{
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol,newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }

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
              onChangeName={handlePlayerNameChange}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} reset={HandleReset}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
};

export default App;

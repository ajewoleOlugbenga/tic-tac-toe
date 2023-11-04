import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
           <Player name="Player 1" symbol="X" />
           <Player name="Player 2" symbol="0" />
          </ol>
          GameBoard
        </div>
      </main>
    </>
  );
};

export default App;

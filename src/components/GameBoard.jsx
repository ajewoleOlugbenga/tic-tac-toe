const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGame;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, cell } = square;

    gameBoard[row][cell] = player;
  }

  // const [gameBoard,setGameBoard] = useState(initialGame);

  // const HandleSelectedSquare = (rowIndex,cellIndex) => {
  //     setGameBoard((prevGameBoard => {
  //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex][cellIndex] = props.activeSymbol;

  //         return updatedBoard;
  //     }))

  //     props.onSelectSquare();
  // }

  return (
    <ol id="game-board">
     {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

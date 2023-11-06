
const GameBoard = ({ onSelectSquare, board }) => {
 

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
     {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null} >
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

import React from 'react'

const initialGame = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const GameBoard = () => {
  return (
    <ol className='game-board'>
        {initialGame.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,cellIndex) => <li key={cellIndex}>
                    <button>{playerSymbol}</button>
                </li>)}

            </ol>
        </li>)) 
}
    </ol>
  )
}

export default GameBoard

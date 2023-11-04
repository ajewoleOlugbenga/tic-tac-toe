import React from 'react'
import GameLogo from "../assets/game-logo.png"

const Header = () => {
  return (
    <header>
      <img src={GameLogo} alt='game-logo'/>
      <h1>Tic-Tac-Toe</h1>
    </header>
  )
}

export default Header

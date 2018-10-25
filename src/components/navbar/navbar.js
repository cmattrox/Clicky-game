import React from 'react'
import './navbar.css'
import Counter from '../counter'
import GameState from '../gamestate'

const Navbar = props => (
  <nav className="header">
    <div className="row">
      <div className="col-4">
        <span id="title"><h1>Clicky Game</h1></span>
      </div>
      <div className="col-4">
        <GameState gamestate={props.gamestate}/>
      </div>
      <div className="col-4">
        <Counter count={props.count} highscore={props.highscore}/>
      </div>
    </div>
  </nav>
)

export default Navbar;
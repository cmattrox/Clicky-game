import React from 'react'
import './gamestate.css'

const GameState = props => (
  <span className="gamestate" id="gamestate"><h2>{props.gamestate}</h2></span>
)

export default GameState
import React from 'react'
import './counter.css'

const Counter = props => (
  <span className="counter"><h2>Score: {props.count} | Top Score: {props.highscore}</h2></span>
)

export default Counter
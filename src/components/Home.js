import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home(props) {
  console.log('props', props)
  return (
    <div>
      <h1>Welcome to this Memory Game </h1>
      <button className="difficulty" to="/game" key="easy" onClick={() => props.onClick(4, 'easy')}>
        Easy
      </button>
      <button className="difficulty" to="/game" key="medium" onClick={() => props.onClick(8, 'medium')}>
        Medium
      </button>
      <button className="difficulty" to="/game" key="hard" onClick={() => props.onClick(12, 'hard')}>
        Hard
      </button>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home(props) {
  console.log('props', props)
  return (
    <div>
      <h1>Welcome to this Memory Game </h1>
      <button className="difficulty" to="/game" onClick={() => props.onClick(4)}>
        Easy
      </button>
      <button className="difficulty" to="/game" onClick={() => props.onClick(8)}>
        Medium
      </button>
      <button className="difficulty" to="/game" onClick={() => props.onClick(12)}>
        Hard
      </button>
    </div>
  )
}

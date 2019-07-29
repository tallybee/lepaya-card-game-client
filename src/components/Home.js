import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Home(props) {
  return (
    <div className="home">
      <h1 className="welcome">Hey! Wanna play a memory game? </h1>
      <div className="invitation">Here's your task. We'll show you some buttons with random numbers. Your challenge is to click through from the lowest value to the highest value. Ready?! <br/> Select level:</div>
      <div className="buttons">
      <button className='button' to="/game" key="easy" onClick={() => props.onClick(4)}>
        Easy
      </button>
      <button className='button' to="/game" key="medium" onClick={() => props.onClick(8)}>
        Medium
      </button>
      <button className='button' to="/game" key="hard" onClick={() => props.onClick(12)}>
        Hard
      </button>
      </div>
    </div>
  )
}

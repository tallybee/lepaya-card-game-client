import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core';

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="welcome">Hey! Wanna play a memory game? </h1>
      <div className="invitation">Here's your task. We'll show you some buttons with random numbers. Your challenge is to click through from the lowest value to the highest value. Ready?! <br/> Select level:</div>
      <Button variant='raised' className='button' to="/game" key="easy" onClick={() => props.onClick(4)}>
        Easy
      </Button>
      <Button color="primary" variant='raised' className='button' to="/game" key="medium" onClick={() => props.onClick(8)}>
        Medium
      </Button>
      <Button color="primary" variant='raised' className='button' to="/game" key="hard" onClick={() => props.onClick(12)}>
        Hard
      </Button>
    </div>
  )
}

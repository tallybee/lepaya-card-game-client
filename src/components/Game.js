import React from 'react'

export default function Game(props) {
  return (
    <div>
      <button key="1" onClick={() => props.handleClick(1)}>
        {props.hideCards ? ' ' : ' 1 '}
      </button>
      <button key="2" onClick={() => props.handleClick(2)}>
      {props.hideCards ? ' ' : ' 2 '}
      </button>
      <button key="3" onClick={() => props.handleClick(3)}>
      {props.hideCards ? ' ' : ' 3 '}
      </button>
      <button key="4" onClick={() => props.handleClick(4)}>
      {props.hideCards ? ' ' : ' 4 '}
      </button>
    </div>
  )
}

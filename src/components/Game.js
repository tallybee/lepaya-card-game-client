import React from 'react'

export default function Game(props) {
  // if (!props.cards) return 'Loading game...'
  
  return (
    <div>
      {/* <button key='1'onClick={() => props.handleClick(1)}>'1'</button>
      <button key='2'onClick={() => props.handleClick(2)}>'2'</button>
      <button key='3'onClick={() => props.handleClick(3)}>'3'</button>
      <button key='4'onClick={() => props.handleClick(4)}>'4'</button> */}
    <ul>
      { props.cards && props.cards.map(card => (
        <button className='button' key={card} 
        onClick={() => props.handleClick(card)}
        >{ props.hideCards ? ' ' : card }</button>
      )) }
    </ul>
    <div> { 
             props.winner 
            ? 'YOU WON'
            : props.loser
            ? 'YOU LOST'
            : null}
      </div>
  </div>
  )
}
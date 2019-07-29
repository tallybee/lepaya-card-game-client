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
        <button disabled={!props.isEnabled} className='button' key={card} 
        onClick={() => props.handleClick(card)}
        > 
        { props.hideCards 
        && !props.clickedCards.includes(card)
        ? ' ' : card }</button>
      )) }
    </ul> 
    <div> {
             props.win && !props.hideCards
            ? <div>You won! <button onClick={() => props.levelUp()}>Level up?</button> <button onClick={() => props.playAgain()}>Or play again?</button></div>
            : props.lose && !props.hideCards
            ? <div>You lost! <button onClick={() => props.playAgain()}>Play again?</button></div>
            : null}
      </div>
  </div>
  )
}
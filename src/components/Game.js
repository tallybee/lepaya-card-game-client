import React from 'react'

export default function Game(props) {
  const { isEnabled, cards, handleClick, clickedCards, hideCards, playAgain, levelUp, win, lose } = props;
  if (!cards) return 'Loading game...'
  return (
    <div>
    <ul>
      { cards && cards.map(card => (
        <button disabled={!isEnabled} className='button' key={card} 
        onClick={() => handleClick(card)}
        > 
        { hideCards 
        && !clickedCards.includes(card)
        ? ' ' : card }</button>
      )) }
    </ul> 
    <div> {
             win && !hideCards
            ? <div>You won! <button onClick={() => levelUp()}>Level up?</button> <button onClick={() => playAgain()}>Or play again?</button></div>
            : lose && !hideCards
            ? <div>You lost! <button onClick={() => playAgain()}>Play again?</button></div>
            : null}
      </div>
  </div>
  )
}
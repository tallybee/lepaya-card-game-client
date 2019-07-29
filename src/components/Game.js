import React from 'react'
import { Button } from '@material-ui/core'

export default function Game(props) {
  const { isEnabled, cards, handleClick, clickedCards, hideCards, playAgain, levelUp, win, lose } = props;
  if (!cards) return 'Loading game...'
  return (
    <div className="game">
    <ul className="buttons">
      { cards && cards.map(card => (
        <Button disabled={!isEnabled} className='button' key={card} 
        onClick={() => handleClick(card)}
        > 
        { hideCards 
        && !clickedCards.includes(card)
        ? ' ' : card }</Button>
      )) }
    </ul> 
    <div> {
             win && !hideCards
            ? <div className="end">You won! <Button color="primary" variant='raised' onClick={() => levelUp()}>Level up?</Button> <Button onClick={() => playAgain()}>Or play again?</Button></div>
            : lose && !hideCards
            ? <div className="end">You lost! <Button color="primary" variant='raised' onClick={() => playAgain()}>Play again?</Button></div>
            : null}
      </div>
  </div>
  )
}
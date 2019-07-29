import React from 'react'

export default function Game(props) {
  const {
    isEnabled,
    cards,
    handleClick,
    clickedCards,
    hideCards,
    playAgain,
    levelUp,
    win,
    lose
  } = props
  if (!cards) return 'Loading game...'
  return (
    <div className="game">
      <ul className="buttons">
        {cards &&
          cards.map(card => (
            <button
              disabled={!isEnabled}
              className="button"
              key={card}
              onClick={() => handleClick(card)}
            >
              {hideCards && !clickedCards.includes(card) ? ' ' : card}
            </button>
          ))}
      </ul>
      <div>
        {' '}
        {win && !hideCards ? (
          <div className="end">
            You won! <br />
            <button className="button" onClick={() => levelUp()}>
              Level up?
            </button>{' '}
            <br />
            <button className="button" onClick={() => playAgain()}>Or play again?</button>
          </div>
        ) : lose && !hideCards ? (
          <div className="end">
            You lost! <br />
            <button
              className="button"
              onClick={() => playAgain()}
            >
              Play again?
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

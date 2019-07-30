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
    difficulty,
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
        {win && !hideCards && difficulty < 12 ? (
          <div className="end">
            You won! <br />
            
            <button className="button" onClick={() => playAgain()}>
              Play again?
            </button>{' '}<button className="button" onClick={() => levelUp()}>
              Or level up?
            </button>
            <br />
          </div>
        ) : lose && !hideCards ? (
          <div className="end">
            You lost! <br />
            <button className="button" onClick={() => playAgain()}>
              Play again?
            </button>
          </div>
        ) : win && !hideCards && difficulty === 12 ? (
          <div className="end">
            Wow, that's impressive! What's next? <br />
            <button
              className="button"
              href=""
              onClick={() =>
                (window.location.href =
                  'http://www.worldmemorychampionships.com/')
              }
            >
              Memory championship?
            </button>{' '}
            <br />
            <button className="button" onClick={() => playAgain()}>
              Or play again?
            </button>
        </div>) : null}
      </div>
    </div>
  )
}

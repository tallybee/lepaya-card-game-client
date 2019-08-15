import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'
import { loadCards } from '../actions/loadCards'
import { setDifficulty } from '../actions/setDifficulty'
import '../App.css'

const initialState = {
  hideCards: false,
  win: false,
  lose: false,
  clickedCards: [],
  isEnabled: false
}

class GameContainer extends React.Component {
  state = {
    initialState
  }

  componentDidMount() {
    this.flipCards() //as well as flipping the cards, this timeout function enables the button
  }

  flipCards() {
    setTimeout(() => {
      const cardsInOrder = [...this.props.cards].sort(function(a, b){return a-b})
      this.setState({
        hideCards: true,
        cardsInOrder: cardsInOrder,
        isEnabled: true,
        clickedCards: []
      })
    }, this.props.difficulty / 4 * 3000)
  }

  handleClick = event => { 
    this.setState({ // this updates an array of clicked cards so those become visible
      clickedCards: [...this.state.clickedCards, event]
    })
    const firstCard = this.state.cardsInOrder.shift() // gets first number of cards in order to compare with clicked card
    if (firstCard === event && this.state.cardsInOrder.length > 0) {
      return null // card correct - game continues
    } else if (firstCard === event && this.state.cardsInOrder.length === 0) { // if there's a match and no more cards to click,there's a win
      this.setState({
        hideCards: false,
        win: true,
        lose: false,
        isEnabled: false
      })
    } else {
      this.setState({
        hideCards: false,
        win: false,
        lose: true,
        isEnabled: false
      })
    }
  }

  levelUp = async () => { // waits for API to send back numbers before setting "cards in order"
    const newDifficulty =  this.props.difficulty < 12 ? this.props.difficulty + 4 : this.props.difficulty;
    await this.props.loadCards(newDifficulty)
    await this.props.setDifficulty(newDifficulty)
    return this.flipCards()
  }

  playAgain = async () => {
    await this.props.loadCards(this.props.difficulty)
    return this.flipCards()
  }

  render() {
    return (
      <Game
        cards={this.props.cards}
        hideCards={this.state.hideCards}
        clickedCards={this.state.clickedCards}
        handleClick={this.handleClick}
        lose={this.state.lose}
        win={this.state.win}
        levelUp={this.levelUp}
        playAgain={this.playAgain}
        isEnabled={this.state.isEnabled}
        difficulty={this.props.difficulty}
      />
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  difficulty: state.difficulty
})

export default connect(
  mapStateToProps,
  { loadCards, setDifficulty }
)(GameContainer)

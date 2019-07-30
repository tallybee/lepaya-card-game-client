import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'
import { loadCards } from '../actions/loadCards'
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
    this.flipCards()
  }

  flipCards() {
    setTimeout(() => {
      const cardsInOrder = [...this.props.cards].sort()
      this.setState({
        hideCards: true,
        cardsInOrder: cardsInOrder,
        isEnabled: true,
        clickedCards: []
      })
    }, 3000)
  }

  handleClick = event => {
    this.setState({
      clickedCards: [...this.state.clickedCards, event]
    })
    const firstCard = this.state.cardsInOrder.shift()
    if (firstCard === event && this.state.cardsInOrder.length > 0) {
      return null
    } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
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

  levelUp = async () => {
    await this.props.loadCards( this.props.difficulty > 12 ? this.props.difficulty + 4 : this.props.difficulty)
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
  { loadCards }
)(GameContainer)

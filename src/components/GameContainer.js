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
    this.flipCards()
  }

  flipCards() {
    setTimeout(() => {
      const cardsInOrder = [...this.props.cards].sort()
      console.log('cards in order', cardsInOrder, 'cards props', this.props.cards)
      this.setState({
        hideCards: true,
        cardsInOrder: cardsInOrder,
        isEnabled: true,
        clickedCards: []
      })
    }, this.props.difficulty / 4 * 3000)
  }

  handleClick = event => {
    this.setState({
      clickedCards: [...this.state.clickedCards, event]
    })
    const firstCard = this.state.cardsInOrder.shift()
    if (firstCard === event && this.state.cardsInOrder.length > 0) {
      return null
    } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
      console.log('win', this.state.cardsInOrder, 'clicked', this.state.clickedCards)
      this.setState({
        hideCards: false,
        win: true,
        lose: false,
        isEnabled: false
      })
    } else {
      console.log('lose', this.state.cardsInOrder, 'clicked', this.state.clickedCards)
      this.setState({
        hideCards: false,
        win: false,
        lose: true,
        isEnabled: false
      })
    }
  }

  levelUp = async () => {
    console.log('im here', this.props.difficulty)
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

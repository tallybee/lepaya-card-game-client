import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'
import {loadCards} from '../actions/loadCards'

class GameContainer extends React.Component {
  state = {
    // cardsInOrder: [1,2,3,4],
    hideCards: false,
    winner: false,
    lose: false
  }

  componentDidMount() {
    const cardsInOrder = [...this.props.cards].sort()
    this.flipCards();
    this.setState({
      cardsInOrder: cardsInOrder
    })
  }

  flipCards() {
    setTimeout(() => {
      this.setState({
        hideCards: true
      })
    }, 3000)
  }

  handleClick = event => {
    if (this.state.cardsInOrder.length > 0) {
      const firstCard = this.state.cardsInOrder.shift()
      if (firstCard === event && this.state.cardsInOrder.length > 0) {
        return null
      } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
        this.setState({
          win: true
        })
      } else {
        this.setState({
          lose: true
        })
      }
    } else {
      alert('this shouldnt happen, i dont know whats going on here, im sorry')
    }
  }

  levelUp() {
    console.log('props are', loadCards, 'props truly are', this.props)
    loadCards(4)
  }

  playAgain() {
    console.log('play again')
    // this.props.loadCards(this.difficulty)
  }

  render() {
    return (
      <Game
        cards={this.props.cards}
        hideCards={this.state.hideCards}
        clickedCards={this.state.cardsInOrder}
        handleClick={this.handleClick}
        lose={this.state.lose}
        win={this.state.win}
        levelUp={this.levelUp}
        playAgain={this.playAgain}
      />
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  difficulty: state.difficulty
})

export default connect(
  mapStateToProps
  ,   {loadCards}
)(GameContainer)

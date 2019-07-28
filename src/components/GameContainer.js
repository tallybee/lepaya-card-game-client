import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'

class GameContainer extends React.Component {
  state = {
    // cardsInOrder: [1,2,3,4],
    hideCards: false,
    winner: false
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
        console.log('state', this.state);
      } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
        this.setState({
          winner: true
        })
        console.log('you won!', this.state)
      } else {
        this.setState({
          loser: true
        })
      }
    } else {
      alert('this shouldnt happen, i dont know whats going on here, im sorry')
    }
  }

  render() {
    return (
      <Game
        cards={this.props.cards}
        hideCards={this.state.hideCards}
        handleClick={this.handleClick}
        loser={this.state.loser}
        winner={this.state.winner}
      />
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  active: state.active
})

export default connect(
  mapStateToProps
  // ,   {loadCards}
)(GameContainer)

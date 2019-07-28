import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'

class GameContainer extends React.Component {
  state = {
    cardsInOrder: [1, 2, 3, 4],
    hideCards: false
  }

  componentDidMount() {
    this.flipCards()
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
        console.log('doing well')
      } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
        alert('you won')
      } else {
        alert('you lost')
      }
    } else {
      alert('you lost')
    }
  }

  render() {
    return (
      <Game
        cards={this.props.cards}
        hideCards={this.state.hideCards}
        handleClick={this.handleClick}
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

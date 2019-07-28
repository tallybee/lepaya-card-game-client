import React from 'react'
import { connect } from 'react-redux'
import Game from './Game'

class GameContainer extends React.Component {
  state = {
    hideCards: false,
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
    this.setState({
      clickedButtons: [event]
    })
    if (this.state.cardsInOrder.length > 0) {
      const firstCard = this.state.cardsInOrder.shift()
      if (firstCard === event && this.state.cardsInOrder.length > 0) {
        return null;
      } else if (firstCard === event && this.state.cardsInOrder.length === 0) {
        alert('you won!')
      } else {
        alert('you lost!')
      }
    } else {
      alert('i dont know whats going on here, im sorry')
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

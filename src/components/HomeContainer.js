import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Home from './Home'
import { loadCards } from '../actions/loadCards'
import { setDifficulty } from '../actions/setDifficulty'
import { Redirect } from 'react-router-dom'

class HomeContainer extends React.Component {
  onClick = numberOfCards => {
    // gets random numbers from API, loads to state, and sets difficulty level
    this.props.loadCards(numberOfCards)
    this.props.setDifficulty(numberOfCards)
  }

  render() {
    // once loaded cards, redirects to game
    const shouldRedirect = this.props.cards
    if (shouldRedirect) {
      return <Redirect to="/game" />
    } else {
      return <Home onClick={this.onClick} />
    }
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  difficulty: state.difficulty
})

export default connect(
  mapStateToProps,
  { loadCards, setDifficulty }
)(HomeContainer)

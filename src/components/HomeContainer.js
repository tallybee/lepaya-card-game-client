import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import { loadCards } from '../actions/loadCards'
import { Redirect } from 'react-router-dom'

class GameContainer extends React.Component {
  onClick = event => {
    this.props.loadCards(event)
  }

  render() {
    const shouldRedirect = this.props.cards
    if (shouldRedirect) {
      return <Redirect to="/game" />
    } else {
      return <Home onClick={this.onClick} />
    }
  }
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(
  mapStateToProps,
  { loadCards }
)(GameContainer)

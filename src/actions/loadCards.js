import * as request from "superagent";

export const CARDS_LOADED = 'CARDS_LOADED'

// this calls the backend for a specified number of random numbers
export const loadCards = numberOfCards => dispatch => {
  return request
    .get(`https://lepaya-assignment-api.tallybee.now.sh/api/?max=100&numberRequired=${numberOfCards}`)
    .then(result => {
      dispatch(cardsLoaded(result.body));
    })
    .catch(console.error);
};

const cardsLoaded = cards => ({
  type: CARDS_LOADED,
  payload: cards
});
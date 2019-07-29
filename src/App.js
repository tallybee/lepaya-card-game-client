import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import GameContainer from "./components/GameContainer";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/game" exact component={GameContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;

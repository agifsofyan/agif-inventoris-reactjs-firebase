import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './config/store'

import Home from './contents/Home'
import Login from './contents/Login'
import Register from './contents/Register'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Router>
      </Provider>
    );
  }
}

export default App

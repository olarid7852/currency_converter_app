import React, {Component} from "react";
import "./App.css";
import { Route, Router, Link } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Modal from './Components/Modal'

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Route path="/navigation" component={Navigation} />
          <Route path="/modal" component={Modal} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

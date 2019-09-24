import React from "react";
import "./App.css";
import { Route, Router, Link } from "react-router-dom";
import Navigation from "./Components/Navigation";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Route path="/Navigation" component={Navigation} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

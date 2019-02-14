import React from "react";
import { Link } from "react-router-dom";
import Router from "./Router"

class App extends React.Component {
  componentDidMount() {
    window.prerenderReady = true;
  }

  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/app/">Admin</Link>
          </li>
        </ul>
      </Router>
    )
  }
};

export default App;
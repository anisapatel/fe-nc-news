import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="list">
            <Link className="navi" to="/">
              Home
            </Link>
          </li>
        </ul>
        {this.state.topics.map(topic => {
          return (
            <ul key={topic.slug}>
              <li className="list">
                <Link className="navi" to={`topics/${topic.slug}`}>
                  {topic.slug}
                </Link>
              </li>
            </ul>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;

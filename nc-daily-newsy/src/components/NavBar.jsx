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
      <div>
        <nav>
          <Link to="/">Articles</Link>
          {this.state.topics.map(topic => {
            return <Link to={`topics/${topic.slug}`}> {topic.slug} </Link>;
          })}
        </nav>
      </div>
    );
  }
}

export default NavBar;

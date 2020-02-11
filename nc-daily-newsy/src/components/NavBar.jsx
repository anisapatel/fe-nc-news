import React, { Component } from "react";
import { Router, Link } from "@reach/router";
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
    console.log(this.state.topics);
    return (
      <div>
        <nav>
          <Link to="/">Articles</Link>
          {this.state.topics.map(topic => {
            return <Link to={topic.slug}> {topic.slug} </Link>;
          })}
        </nav>
      </div>
    );
  }
}

export default NavBar;

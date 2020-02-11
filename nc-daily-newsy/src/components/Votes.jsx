import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    usersVotes: 0
  };

  handleClick(votes) {
    api.patchVotesById(this.props.article_id, votes);
    this.setState(currentState => {
      return { usersVotes: currentState.usersVotes + votes };
    });
  }

  render() {
    console.log(this.props.article_id);
    console.log(this.props.votes);
    console.log(this.state.usersVotes);
    console.log(this.state.articles);
    return (
      <div>
        <p>{this.state.usersVotes + this.props.votes}</p>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.usersVotes > 0}
        >
          Like
        </button>
        <button
          onClick={({}) => {
            this.handleClick(-1);
          }}
          disabled={this.state.usersVotes < 0}
        >
          Dislike
        </button>
      </div>
    );
  }
}

export default Votes;

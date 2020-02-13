import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    usersVotes: 0,
    err: null
  };

  handleClick(votes) {
    api.patchVotesById(this.props.id, votes, this.props.type).catch(() => {
      console.log("daghabfj");
      this.setState({ err: true });
    });
    this.setState(currentState => {
      return { usersVotes: currentState.usersVotes + votes };
    });
  }

  render() {
    // if (this.state.err) {
    //   return <p>Unable to vote!</p>;
    // }
    return (
      <div>
        {this.state.err && <p>Unable to vote!</p>}
        {this.state.usersVotes + this.props.votes}
        <button
          className="button"
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.usersVotes > 0}
        >
          Like
        </button>
        <button
          className="button"
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

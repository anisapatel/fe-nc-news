import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "tickle122",
    body: ""
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentById(this.props.article_id, { ...this.state })
      .then(([comment]) => {
        this.props.addComment(comment);
      });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            username:
            <input
              type="text"
              onChange={this.handleChange}
              id="username"
              required
            />
          </label> */}
          <label>
            body:
            <input
              type="text"
              onChange={this.handleChange}
              id="body"
              required
            />
          </label>
          <button>Submit comment</button>
        </form>
      </section>
    );
  }
}

export default CommentAdder;

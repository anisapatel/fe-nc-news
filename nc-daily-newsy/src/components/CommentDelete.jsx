import React, { Component } from "react";
import * as api from "../utils/api";

class CommentDelete extends Component {
  handleDelClick = () => {
    api.deleteCommentById(this.props.comment_id);
  };
  render() {
    return (
      <section>
        <button id="deleteButton" onClick={this.handleDelClick}>
          Delete
        </button>
      </section>
    );
  }
}

export default CommentDelete;

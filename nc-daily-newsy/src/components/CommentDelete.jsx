import React, { Component } from "react";
import * as api from "../utils/api";

class CommentDelete extends Component {
  handleDelClick = () => {
    api.deleteCommentById(this.props.comment_id);
  };
  render() {
    return (
      <div>
        <button
          className="button deleteButton"
          id="deleteButton"
          onClick={this.handleDelClick}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CommentDelete;

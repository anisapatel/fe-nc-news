import React, { Component } from "react";
import * as api from "../utils/api";

class CommentDelete extends Component {
  handleDelClick = () => {
    api.deleteCommentById(this.props.comment_id).then(() => {
      this.props.deleteComment();
    });
  };
  render() {
    console.log(this.props.deleteComment);
    return (
      <div>
        <button className="button" onClick={this.handleDelClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default CommentDelete;

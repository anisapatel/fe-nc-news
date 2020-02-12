import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import Votes from "./Votes";
import CommentAdder from "./CommentAdder";
import CommentDelete from "./CommentDelete";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <CommentAdder
          addComment={this.addComment}
          article_id={this.props.article_id}
        />
        <section>
          {this.state.comments.map(comment => {
            return (
              <main key={comment.comment_id}>
                <h4> author: {comment.author}</h4>
                <ul>
                  <li>votes: {comment.votes}</li>
                  <li>created_at: {comment.created_at}</li>
                  <li>body: {comment.body}</li>
                </ul>
                <Votes
                  votes={comment.votes}
                  id={comment.comment_id}
                  type={"comments"}
                />
                <CommentDelete comment_id={comment.comment_id} />
              </main>
            );
          })}
        </section>
      </div>
    );
  }
}

export default ArticleComments;

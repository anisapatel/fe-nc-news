import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import Votes from "./Votes";
import CommentAdder from "./CommentAdder";
import CommentDelete from "./CommentDelete";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    isCommentDeleted: false,
    userInfo: this.props.userInfo,
    commentCount: 0,
    err: null
  };

  componentDidMount() {
    api
      .getCommentsByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          commentCount: 0,
          err: Response.data,
          isLoading: false
        });
      });
  }

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  deleteComment = () => {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments, isCommentDeleted: true });
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <p>No comments available!</p>;

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
                <h4> {comment.author}</h4>
                <ul>
                  <li>votes: {comment.votes}</li>
                  <li>date: {comment.created_at}</li>
                  <li>comment: {comment.body}</li>
                </ul>
                <div className="commentInfo">
                  <Votes
                    votes={comment.votes}
                    id={comment.comment_id}
                    type={"comments"}
                  />
                  <CommentDelete
                    deleteComment={this.deleteComment}
                    comment_id={comment.comment_id}
                    userInfo={this.state.userInfo}
                    author={comment.author}
                  />
                </div>
              </main>
            );
          })}
        </section>
      </div>
    );
  }
}

export default ArticleComments;

import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import Votes from "./Votes";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      console.log(comments);
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    console.log(this.state.comments);
    console.log(this.props.article_id);
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <section>
          {this.state.comments.map(comment => {
            return (
              <main>
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
              </main>
            );
          })}
        </section>
      </div>
    );
  }
}

export default ArticleComments;

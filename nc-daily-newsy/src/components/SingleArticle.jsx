import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    areCommentsVisible: false
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      api.getArticleById(this.props.article_id).then(article => {
        this.setState({ article, isLoading: false });
      });
    }
  }

  handleClick = () => {
    this.setState({ areCommentsVisible: true });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <h3>Title: {this.state.article.title}</h3>
        <p>body: {this.state.article.body}</p>
        <ul>
          <li>votes: {this.state.article.votes}</li>
          <li>topic: {this.state.article.topic} </li>
          <li>author: {this.state.article.author}</li>
          <li>created_at: {this.state.article.created_at}</li>
          <li>comment_count: {this.state.article.comment_count}</li>
        </ul>
        <button onClick={this.handleClick}>View comments</button>
        {this.state.areCommentsVisible && (
          <ArticleComments article_id={this.props.article_id} />
        )}
      </div>
    );
  }
}

export default SingleArticle;
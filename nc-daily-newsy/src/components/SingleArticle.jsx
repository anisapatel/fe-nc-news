import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";
import ErrHandler from "./ErrHandler";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    areCommentsVisible: false,
    err: null
  };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        console.dir(err);
        this.setState({ isLoading: false, err: err.response.data.msg });
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
    if (this.state.err) return <img src="https://http.cat/400" alt="400" />;
    // <ErrHandler err={this.state.err}  />
    return (
      <div className="single">
        <h3>{this.state.article.title}</h3>
        <div className="articleBody">
          <p>Article: {this.state.article.body}</p>
        </div>
        <ul>
          <li>votes: {this.state.article.votes}</li>
          <li>topic: {this.state.article.topic} </li>
          <li>author: {this.state.article.author}</li>
          <li>date: {this.state.article.created_at}</li>
          <li>comments: {this.state.article.comment_count}</li>
        </ul>
        <button className="button" onClick={this.handleClick}>
          View comments
        </button>
        {this.state.areCommentsVisible && (
          <ArticleComments article_id={this.props.article_id} />
        )}
      </div>
    );
  }
}

export default SingleArticle;

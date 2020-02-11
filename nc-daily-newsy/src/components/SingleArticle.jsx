import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import { Router, Link } from "@reach/router";
import ArticleComments from "./ArticleComments";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.article_id !== this.props.article_id) {
  //       api.getArticleById(this.props.article_id).then(article => {
  //         this.setState({ article, isLoading: false });
  //       });
  //     }
  //   }

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
          <Link to={`/articles/${this.props.article_id}/comments`}>
            <p>View comments</p>
          </Link>
        </ul>
      </div>
    );
  }
}

export default SingleArticle;

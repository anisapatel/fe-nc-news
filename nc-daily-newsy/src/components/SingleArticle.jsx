import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import { Router, Link } from "@reach/router";

class SingleArticle extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    console.log(this.state.articles);
    if (this.state.isLoading) return <Loader />;
    return <div>{this.state.articles}</div>;
  }
}

export default SingleArticle;

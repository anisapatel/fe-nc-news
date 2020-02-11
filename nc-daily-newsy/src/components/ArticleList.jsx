import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topicFilter: undefined,
    sortFilter: undefined
  };

  componentDidMount() {
    api.getAllArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.articles.topic !== this.state.articles.topic ||
      prevState.articles.sortFilter !== this.state.articles.sortFilter
    ) {
      api.getAllArticles().then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  handleChange = ({ target: { value, id } }) => {
    console.log(id);

    this.setState(currentState => {
      return { ...currentState, [id]: value };
    });
  };

  handleSubmit = submitEvent => {
    console.log(this.state.sortFilter);
    submitEvent.preventDefault();
    api
      .getAllArticles(this.state.topicFilter, this.state.sortFilter)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit} defaultValue="">
            Sort by:
            <select id="sortFilter" onChange={this.handleChange}>
              <option value="undefined">Select</option>
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
            <button>Submit</button>
          </form>
        </section>
        <section>
          <form onSubmit={this.handleSubmit} defaultValue="">
            Topic:
            <select
              id="topicFilter"
              onChange={this.handleChange}
              placeholder="Select"
            >
              <option value="undefined">Select</option>
              <option value="coding">coding</option>
              <option value="football">football</option>
              <option value="cooking">cooking</option>
            </select>
            <button>Submit</button>
          </form>
        </section>
        <main>
          {this.state.articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </main>
      </div>
    );
  }
}

export default ArticleList;

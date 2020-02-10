import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topicFilter: undefined
  };

  componentDidMount() {
    api.getAllArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles.topic !== this.state.articles.topic)
      api.getAllArticles().then(articles => {
        this.setState({ articles, isLoading: false });
      });
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState(currentState => {
      return { ...currentState, [id]: value };
    });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    api.getAllArticles(this.state.topicFilter).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    // console.log(this.state.articles);
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit} defaultValue="">
            Topic:
            <select id="topicFilter" onChange={this.handleChange}>
              <option value="coding">coding</option>
              <option value="football">football</option>
              <option value="cooking">cooking</option>
            </select>
            <button>Submit</button>
          </form>
        </section>
        <main>
          {this.state.articles.map(article => {
            return <ArticleCard {...article} />;
          })}
        </main>
      </div>
    );
  }
}

export default ArticleList;

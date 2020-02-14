import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrHandler from "./ErrHandler";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topicFilter: undefined,
    sortFilter: undefined,
    err: null
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic_slug !== this.props.topic_slug ||
      prevState.articles.sortFilter !== this.state.articles.sortFilter
    ) {
      this.getArticles();
    }
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState(currentState => {
      return { ...currentState, [id]: value };
    });
  };
  getArticles = () => {
    api
      .getAllArticles(this.props.topic_slug, this.state.sortFilter)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    this.getArticles();
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <img src="https://http.cat/404" alt="404" />;
    // <ErrHandler err={this.state.err} />;
    return (
      <div className="grid">
        <section>
          <form className="form" onSubmit={this.handleSubmit} defaultValue="">
            Sort Articles By:
            <select
              className="dropdown"
              id="sortFilter"
              onChange={this.handleChange}
            >
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
            <button className="button">Submit</button>
          </form>
        </section>
        {/* <section>
          <form onSubmit={this.handleSubmit} defaultValue="">
            Topic:
            <select
              id="topicFilter"
              onChange={this.handleChange}
              placeholder="Select"
            >
              <option value="undefined">all</option>
              <option value="coding">coding</option>
              <option value="football">football</option>
              <option value="cooking">cooking</option>
            </select>
            <button>Submit</button>
          </form>
        </section> */}
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

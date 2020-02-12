import React, { Component } from "react";
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
      });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    this.getArticles();
  };

  render() {
    console.log(this.props);
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit} defaultValue="">
            Sort by:
            <select id="sortFilter" onChange={this.handleChange}>
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
            <button>Submit</button>
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
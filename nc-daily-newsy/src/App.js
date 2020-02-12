import "./App.css";
import React, { Component } from "react";
import Title from "./components/Title";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";

class App extends Component {
  state = {
    userInfo: {
      user: "tickle122",
      avatar: "https://image.flaticon.com/icons/png/512/17/17004.png"
    }
  };

  render() {
    return (
      <div>
        <Title userInfo={this.state.userInfo} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic_slug" />
          <SingleArticle path="/articles/:article_id" />
          <ArticleComments path="/articles/:article_id/comments" />
        </Router>
      </div>
    );
  }
}

export default App;

import "./App.css";
import React, { Component } from "react";
import Title from "./components/Title";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";
import Footer from "./components/Footer";
import ErrHandler from "./components/ErrHandler";

class App extends Component {
  state = {
    userInfo: {
      user: "tickle122",
      avatar: "https://image.flaticon.com/icons/png/512/17/17004.png"
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Title userInfo={this.state.userInfo} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic_slug" />
          <SingleArticle
            path="/articles/:article_id"
            userInfo={this.state.userInfo}
          />
          <ArticleComments path="/articles/:article_id/comments" />
          <ErrHandler default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

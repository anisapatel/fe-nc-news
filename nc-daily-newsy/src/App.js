import "./App.css";
import React, { Component } from "react";
import Loader from "./components/Loader";
import Title from "./components/Title";
import { Router, Link } from "@reach/router";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import * as api from "./utils/api";

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
          <ArticleList path="/articles" />
          <ArticleList path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;

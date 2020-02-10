import React from "react";
import { Router, Link } from "@reach/router";

const ArticleCard = props => {
  console.log(props.article_id);
  return (
    <main>
      <h3>Title: {props.title}</h3>
      <Link to={`/articles/${props.article_id}`}>Read Article</Link>
      <ul>
        <li>Topic: {props.topic} </li>
        <li>created_at: {props.created_at}</li>
        <li>author: {props.author}</li>
        <li>votes: {props.votes}</li>
        <li>comment_count: {props.comment_count}</li>
      </ul>
    </main>
  );
};

export default ArticleCard;

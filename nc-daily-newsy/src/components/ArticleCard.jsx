import React from "react";
import { Router, Link } from "@reach/router";
import SingleArticle from "./SingleArticle";

const ArticleCard = ({
  article_id,
  title,
  topic,
  created_at,
  author,
  votes,
  comment_count
}) => {
  return (
    <main>
      <Link to={`/articles/${article_id}`}>
        <h3>Title: {title}</h3>
      </Link>
      <ul>
        <li>Topic: {topic} </li>
        <li>created_at: {created_at}</li>
        <li>author: {author}</li>
        <li>votes: {votes}</li>
        <li>comment_count: {comment_count}</li>
      </ul>
    </main>
  );
};

export default ArticleCard;

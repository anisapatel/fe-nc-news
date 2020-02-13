import React from "react";
import { Link } from "@reach/router";
import Votes from "./Votes";

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
    <main className="content">
      <Link className="Link" to={`/articles/${article_id}`}>
        <h4>{title}</h4>
      </Link>
      <ul>
        <li>topic: {topic} </li>
        <li>created: {created_at}</li>
        <li>author: {author}</li>
        <li>votes: {votes}</li>
        <li>comments: {comment_count}</li>
      </ul>
      <Votes votes={votes} id={article_id} type={"articles"} />
    </main>
  );
};

export default ArticleCard;

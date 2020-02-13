const axios = require("axios");

exports.getAllArticles = (topic, sort_by) => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/articles", {
      params: { topic, sort_by }
    })
    .then(({ data }) => {
      return data.article;
    });
};

exports.getArticleById = article_id => {
  return axios
    .get(`https://daily-newsy.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article[0];
    });
};

exports.getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://daily-newsy.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comment;
    });
};

exports.patchVotesById = (id, votes, type) => {
  return axios
    .patch(`https://daily-newsy.herokuapp.com/api/${type}/${id}`, {
      inc_votes: votes
    })
    .then(({ data }) => {
      console.dir(data);
    });
};

exports.getTopics = () => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

exports.postCommentById = (article_id, commentToAdd) => {
  return axios
    .post(
      `https://daily-newsy.herokuapp.com/api/articles/${article_id}/comments`,
      commentToAdd
    )
    .then(({ data }) => {
      console.log(data.comments);
      return data.comment;
    });
};

exports.deleteCommentById = comment_id => {
  return axios.delete(
    `https://daily-newsy.herokuapp.com/api/comments/${comment_id}`
  );
};

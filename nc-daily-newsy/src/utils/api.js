const axios = require("axios");

exports.getAllArticles = topic => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/articles", {
      params: { topic }
    })
    .then(({ data }) => {
      return data.article;
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getArticleById = article_id => {
  return axios
    .get(`https://daily-newsy.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article[0];
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://daily-newsy.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comment;
    })
    .catch(err => {
      console.log(err);
    });
};

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
      return data.article;
    })
    .catch(err => {
      console.log(err);
    });
};

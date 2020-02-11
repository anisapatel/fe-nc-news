const axios = require("axios");

exports.getAllArticles = (topic, sort_by) => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/articles", {
      params: { topic, sort_by }
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

exports.patchVotesById = (article_id, votes) => {
  return axios.patch(
    `https://daily-newsy.herokuapp.com/api/articles/${article_id}`,

    { inc_votes: votes }
  );
};

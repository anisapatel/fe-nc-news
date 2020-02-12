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

exports.patchVotesById = (id, votes, type) => {
  return axios.patch(`https://daily-newsy.herokuapp.com/api/${type}/${id}`, {
    inc_votes: votes
  });
};

exports.getTopics = () => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch(err => {
      console.log(err);
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
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteCommentById = comment_id => {
  return axios.delete(
    `https://daily-newsy.herokuapp.com/api/comments/${comment_id}`
  );
};

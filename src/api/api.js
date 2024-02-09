import axios from "axios";

const myApi = axios.create({
  baseURL: `https://anna-nc-news-project.onrender.com/api`,
});

export function getArticles() {
  return myApi
    .get(`/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getTopics() {
  return myApi
    .get(`/topics`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getArticleByID(article_id) {
  return myApi
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getCommentsByArticleId(article_id) {
  return myApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function patchVotesByArticleId(article_id) {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export function postCommentByArticleId(article_id, inputCommentObject) {
  return myApi
    .post(`/articles/${article_id}/comments`, inputCommentObject)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export function getUsers() {
  return myApi
    .get(`/users`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteCommentByCommentId(comment_id){
  return myApi.delete(`/comments/${comment_id}`).then((response)=>{
    return response
  }).catch((err)=>{
    return err
  })

}
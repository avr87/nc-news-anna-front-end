import axios from "axios";

const myApi = axios.create({
  baseURL: `https://anna-nc-news-project.onrender.com/api`,
});

export function getArticles() {
  return myApi.get(`/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getTopics() {
  return myApi.get(`/topics`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getArticleByID(article_id) {
  return myApi.get(`/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

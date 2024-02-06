import axios from "axios";

export function getArticles() {
  return axios
    .get(`https://anna-nc-news-project.onrender.com/api/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function getTopics() {
  return axios
    .get(`https://anna-nc-news-project.onrender.com/api/topics`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

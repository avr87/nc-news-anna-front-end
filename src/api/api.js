import axios from "axios";

export default function getArticles() {
  return axios
    .get(`https://anna-nc-news-project.onrender.com/api/articles`)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err;
    });
}

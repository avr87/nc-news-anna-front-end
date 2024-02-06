import getArticles from "../api/api";
import { useEffect } from "react";

export default function ArticleList() {
  useEffect(() => {
    getArticles().then((response) => {
      console.log(response);
    });
  }),
    [];
}

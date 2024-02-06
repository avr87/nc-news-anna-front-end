import { getArticles } from "../api/api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles, setArticles }) {
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);
  return (
    <section>
      <div className="container text-center preview-articles">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          {articles.map((article) => {
            if (article.article_id > articles.length - 6) {
              return (
                <div className="col" key={article.article_id}>
                  <ArticleCard article={article} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

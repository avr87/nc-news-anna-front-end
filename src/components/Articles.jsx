import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";

export default function Articles({
  articles,
  setArticles,
  isLoading,
  setIsLoading,
}) {
  const [articleID, setArticleID] = useState("");

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  return (
    <>
      <section>
        <div className="container text-center preview-articles">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
            {articles.map((article) => {
              return (
                <div className="col" key={article.article_id}>
                  <ArticleCard article={article} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

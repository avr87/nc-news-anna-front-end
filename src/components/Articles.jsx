import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import { useParams } from "react-router-dom";

export default function Articles({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles()
      .then((data) => {
        if (!topic) {
          setArticles(data.articles);
        } else {
          articlesByTopic(topic);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const articlesByTopic = () => {
    setArticles((currentArticles) => {
      return currentArticles.filter((article) => {
        return article.topic === topic;
      });
    });
  };

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  return (
    <>
      <Topics articlesByTopic={articlesByTopic} />
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

import { useEffect, useState, useParams } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";

export default function Articles({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles().then((data) => {
      if (topic) {
        setArticles((currentArticles) => {
          return currentArticles.filter((article) => {
            return article.topic === selectedTopic;
          });
        });
      } else {
        setArticles(data.articles);
      }
      setIsLoading(false);
    });
  }, []);

  const articlesByTopic = (selectedTopic) => {
    setArticles((currentArticles) => {
      return currentArticles.filter((article) => {
        return article.topic === selectedTopic;
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

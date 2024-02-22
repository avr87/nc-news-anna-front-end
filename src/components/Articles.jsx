import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import { useParams } from "react-router-dom";

export default function Articles({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  console.log(topic, "<<<<<<topic");
  useEffect(() => {
    getArticles()
      .then((data) => {
        console.log(data);
        if (!topic) {
          setArticles(data.articles);
        } else {
          articlesByTopic(topic);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, [topic]);
  console.log(articles);

  const articlesByTopic = (topic) => {
    setArticles((currentArticles) => {
      return currentArticles.filter((article) => article.topic === topic);
    });
  };

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  return (
    <>
      <Topics />
      <section>
        <div className="container text-center preview-articles">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
            {articles.map((article) => {
              console.log(article.article_img_url, "<<<<<<<<<");
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

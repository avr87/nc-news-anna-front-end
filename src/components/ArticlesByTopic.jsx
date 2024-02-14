import { useState } from "react";
import ArticleCard from "./ArticleCard";


export default function setArticles({ articles, setArticles }) {



if(isLoading){
    return <p>Loading article....</p>;
}
  return (
    <section>
      <div className="container text-center preview-articles">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          {articles.map((article) => {
            return article.topic === topic ? (
              <div className="col" key={article.article_id}>
                <ArticleCard article={article} />
              </div>
            ) : (
              <div>No articles available under this topic</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

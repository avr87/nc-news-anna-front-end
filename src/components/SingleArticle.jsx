import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../api/api";

export default function SingleArticle({isLoading, setIsLoading}) {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id).then((articleObject) => {
      setArticle(articleObject.article);
      setIsLoading(false)
    });
  }, [article_id]);

  if(isLoading){
    return <p>Loading article....</p>
  }
  
  return (
    <>
      <article>
        <div className="card mb-3 single-article" style={{ width: 600 + "px" }}>
          <h5 className="card-title">{article.title}</h5>
          <img
            src={article.article_img_url}
            className="card-img-top single-article-img"
            alt={article.topic}
            style={{ width: 400 + "px" }}
          />
          <ul className="list-group list-group-horizontal list-single-article">
            <li className="list-group-item">
              <small className="text-body-secondary">{article.topic}</small>
            </li>
            <li className="list-group-item">
              <small className="text-body-secondary">
                By: {article.author}
              </small>
            </li>
            <li className="list-group-item">
              <small className="text-body-secondary">
                Comments: {article.comment_count}
              </small>
            </li>
            <li className="list-group-item">
              <small className="text-body-secondary">
                Votes: {article.votes}
              </small>
            </li>
           
          </ul>
          <div className="card-body body-single-article">
            <p className="card-text">{article.body}</p>
          </div>
        </div>
      </article>
      ;
    </>
  );
}

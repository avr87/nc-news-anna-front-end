import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, patchVotesByArticleId } from "../api/api";
import CommentsByArticle from "./CommentsByArticle";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id).then((articleObject) => {
      setArticle(articleObject.article);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleClick = (event) => {
    event.preventDefault();
    patchVotesByArticleId(article_id);
    if (clickCount === 0) {
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes + 1 };
      });
      setClickCount(1);
    } else if (clickCount === 1) {
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes - 1 };
      });
      setClickCount(0);
    }
  };

  if (isLoading) {
    return <p>Loading article....</p>;
  }

  return (
    <>
      <article>
        <div
          className="card mb-3 single-article "
          style={{ width: 600 + "px" }}
        >
          <img
            src={article.article_img_url}
            className="card-img-top single-article-img"
            alt={article.topic}
            style={{ width: 400 + "px" }}
          />
          <h5 className="card-title single-article-title">{article.title}</h5>
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
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-primary vote-button"
                onClick={handleClick}
              >
                Vote
              </button>
            </li>
          </ul>
          <div className="card-body body-single-article">
            <p className="card-text">{article.body}</p>
            <div>
              <a href="#add-comment" className="link-to-add-comment">
                Add comment
              </a>
            </div>
          </div>
        </div>
      </article>
      <CommentsByArticle article_id={article_id} />
    </>
  );
}

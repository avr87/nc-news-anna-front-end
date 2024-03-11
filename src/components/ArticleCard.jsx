import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={article.article_img_url}
            className="img-fluid article-card-pic"
            alt="picture of article"
          />
          <p className="card-topic">{article.topic}</p>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/articles/${article.article_id}`}>
              <h5 className="card-title">{article.title}</h5>
            </Link>
            <p className="card-comment_count">
              Comment count:{article.comment_count}
            </p>
            <p className="card-votes">Votes: {article.votes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

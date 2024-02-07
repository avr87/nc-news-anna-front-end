import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api/api";
import CommentCard from "./CommentCard";

export default function CommentsByArticle({ article_id, isLoading, setIsLoading }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false)
    });
  }, [article_id]);
if (isLoading) {
  return <p>Loading comments....</p>;
}
  return (
    <>
      <section>
        <div className="container comment-container">
          <div className="row row-cols-0.5 row-spacing">
            {comments.map((comment) => {
              return (
                <div className="col" key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

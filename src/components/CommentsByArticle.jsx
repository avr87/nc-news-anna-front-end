import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api/api";
import CommentCard from "./CommentCard";
import AddCommentCard from "./AddCommentCard";
import ErrorMessage from "./ErrorMessage";

export default function CommentsByArticle({
  article_id,
  isLoading,
  setIsLoading,
  comments,
  setComments,
}) {
  const [error, setError] = useState();
  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
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
            {comments ? (
              comments.map((comment) => {
                return (
                  <div className="col" key={comment.comment_id}>
                    <CommentCard comment={comment} />
                  </div>
                );
              })
            ) : (
              <div className="add-comment-card">
                <ErrorMessage />
                <AddCommentCard />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import {
  getCommentsByArticleId,
  postCommentByArticleId,
  deleteCommentByCommentId,
} from "../api/api";
import CommentCard from "./CommentCard";
import ErrorMessage from "./ErrorMessage";
import AddCommentCard from "./AddCommentCard";

export default function CommentsByArticle({ article_id }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  const addNewComment = (userInput) => {
    postCommentByArticleId(article_id, userInput).then((data) => {
      const newComment = data.data.comment;
      setComments((currentComments) => {
        return [newComment, ...currentComments];
      });
    });
  };

  const deleteComment = (comment_id) => {
    deleteCommentByCommentId(comment_id).then(
      setComments((currentComments) => {
        return currentComments.filter(
          (comment) => comment.comment_id !== comment_id
        );
      })
    );
  };
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
                    <CommentCard
                      comment={comment}
                      comments={comments}
                      setComments={setComments}
                      deleteComment={deleteComment}
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <ErrorMessage />
              </div>
            )}
          </div>
        </div>
        <div className="add-comment-card" id="add-comment">
          <AddCommentCard addNewComment={addNewComment} />
        </div>
      </section>
    </>
  );
}

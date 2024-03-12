import { useContext } from "react";
import { UserContext } from "../context/User";

export default function CommentCard({ comment, deleteComment }) {
  const loggedInUser = useContext(UserContext);
  const handleClick = (event) => {
    event.preventDefault();
    deleteComment(comment.comment_id);
  };

  return (
    <>
      <div className="card border-light mb-3">
        <div className="row g-0 h-100">
          <div className="card-body comment-body">
            <div className="card-header comment-card-header">
              <h5 className="card-title">Author: {comment.author}</h5>
              <p className="card-votes">Votes: {comment.votes} </p>
            </div>
            <p className="card-comment-body">{comment.body}</p>
            {loggedInUser.loggedInUser.username === comment.author ? (
              <button
                type="button"
                className="btn btn-outline-danger delete-button"
                onClick={handleClick}
              >
                Delete Comment
              </button>
            ) : (
              <button className="btn btn-outline-primary vote-button">
                <a href="#">Vote</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

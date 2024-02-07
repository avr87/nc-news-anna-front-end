export default function CommentCard({ comment }) {
  return (
    <>
      <div className="card border-light" style={{ width: 440 + "px" }}>
        <div className="row g-0 h-100">
          <div className="card-body comment-body">
            <div className="card-header comment-card-header">
              <h5 className="card-title">Author: {comment.author}</h5>
              <p className="card-votes">Votes: {comment.votes} </p>
            </div>
            <p className="card-comment-body">{comment.body}</p>

            <button className="btn btn-outline-primary">
              <a href="#">Add Vote</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

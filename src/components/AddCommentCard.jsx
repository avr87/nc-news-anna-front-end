export default function AddCommentCard() {
  return (
    <>
      <div className="container add-comment-container">
        <div className="card border-light" style={{ width: 440 + "px" }}>
          <div className="row g-0 h-100">
            <div className="card-body comment-body">
              <div className="card-header comment-card-header">
                <h5 className="card-title">Add Comment</h5>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Username:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Comment:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button className="btn btn-outline-primary">
                <a href="#">Add Vote</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

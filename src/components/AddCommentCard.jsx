import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

export default function AddCommentCard({ addNewComment }) {
  const [userCommentInput, setUserCommentInput] = useState({
    username: "",
    body: "",
  });
  const [users, setUsers] = useState([]);
  const handleChange = (event) => {
    const newUserInput = event.target.value;
    setUserCommentInput({
      ...userCommentInput,
      [event.target.id]: newUserInput,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = {
      username: userCommentInput.username,
      body: userCommentInput.body,
    };
    addNewComment(userInput);
    setUserCommentInput({ username: "", body: "" });
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.data.users);
    });
  }, []);
  return (
    <>
      <div className="container add-comment-container">
        <div className="card border-light" style={{ width: 440 + "px" }}>
          <div className="row g-0 h-100">
            <div className="card-body comment-body">
              <div className="card-header comment-card-header">
                <h5 className="card-title">Add Comment</h5>
              </div>
              <form action="submit" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="username"
                    placeholder="Enter your username"
                    required
                    onChange={handleChange}
                    onBlur={(event) => {
                      const error =
                        document.getElementById("username_error_msg");
                      if (event.target.value.length < 3) {
                        error.innerText = "Please enter a username";
                      } else {
                        error.innerText = "";
                      }
                    }}
                  >
                    <option value="">--Please choose a username--</option>
                    {users.map((user) => {
                      return (
                        <option value={user.username} key={user.username}>
                          {user.username}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <p id="username_error_msg"></p>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Comment:
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows="3"
                    placeholder="Enter your comment"
                    required
                    onChange={handleChange}
                    onBlur={(event) => {
                      const error =
                        document.getElementById("comment_error_msg");
                      if (event.target.value.length < 3) {
                        error.innerText = "Please enter a comment";
                      } else {
                        error.innerText = "";
                      }
                    }}
                  ></textarea>
                  <p id="comment_error_msg"></p>
                </div>

                <button type="submit" className="btn btn-outline-primary">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

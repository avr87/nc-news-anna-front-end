import { useEffect, useState, useContext } from "react";
import { getTopics } from "../api/api";
import { UserContext } from "../context/User";

export default function Header({ selectedTopic, setSelectedTopic }) {
  const [topic, setTopic] = useState([]);
  const loggedInUser = useContext(UserContext);
  useEffect(() => {
    getTopics().then((data) => {
      setTopic(data.topics);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setSelectedTopic(event.target.text);
  };

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NC News
          </a>
          <a className="navbar-brand d-flex" href="#">
            <img
              src={loggedInUser.loggedInUser.avatar_url}
              alt={loggedInUser.loggedInUser.username}
              width="40"
              height="30"
            />
          </a>
        </div>
      </nav>
      <h1>NC News</h1>
      <ul className="nav nav-underline dark justify-content-center">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Topics
          </a>
          <ul className="dropdown-menu">
            {topic.map((singleTopic) => {
              return (
                <li key={singleTopic.slug}>
                  <a
                    className="dropdown-item"
                    href=""
                    value={singleTopic.slug}
                    onClick={handleClick}
                  >
                    {singleTopic.slug}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/articles">
            Articles
          </a>
        </li>
      </ul>
    </header>
  );
}

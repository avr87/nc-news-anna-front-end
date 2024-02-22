import { useState, useEffect } from "react";
import { getTopics } from "../api/api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  return (
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
          {topics.map((singleTopic) => {
            return (
              <li key={singleTopic.slug}>
                <Link
                  to={`/articles/${singleTopic.slug}`}
                  className="dropdown-item"
                  value={singleTopic.slug}
                >
                  {singleTopic.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

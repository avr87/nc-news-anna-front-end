import { useContext } from "react";
import { UserContext } from "../context/User";

export default function Header() {
  const loggedInUser = useContext(UserContext);

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
        <li className="nav-item">
          <a className="nav-link" href="/articles">
            Articles
          </a>
        </li>
      </ul>
    </header>
  );
}

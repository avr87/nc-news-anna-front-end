export default function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NC News
          </a>
          <a className="navbar-brand d-flex" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
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
            <li>
              <a className="dropdown-item" href="#">
                Clothing
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Food
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Coding
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Articles
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Comments
          </a>
        </li>
      </ul>
    </header>
  );
}

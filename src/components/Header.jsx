export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ zIndex: 10 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Jorgensen Dog Walking
          </a>
          <div>
            <button
              className="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-list fs-1"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  About Me
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reviews
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rates
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

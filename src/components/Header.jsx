
export default function Header({ onSectionSelect }) {

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
        </div>
      </nav>
      <div>
            <button
              className="btn menuButton"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-list fs-1"></i>
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => onSectionSelect('about')}>
                <span className="dropdown-item">
                  About Me
                </span>
              </li>
              <li onClick={() => onSectionSelect('reviews')}>
                <a className="dropdown-item">
                  Reviews
                </a>
              </li>
              <li onClick={() => onSectionSelect('rates')}>
                <span className="dropdown-item">
                  Rates
                </span>
              </li>
              <li onClick={() => onSectionSelect('contact')}>
                <span className="dropdown-item">
                  Contact
                </span>
              </li>
            </ul>
          </div>
    </>
  );
}

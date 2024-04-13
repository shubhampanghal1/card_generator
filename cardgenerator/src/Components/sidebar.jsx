function Sidebar({ Select, value }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
        style={{ width: "16vw" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Card Generator</span>
        </a>
        <br />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link link-body-emphasis ${
                value == "allposts" ? "active" : null
              }`}
              aria-current="page"
              onClick={() => Select("allposts")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              All Post
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link link-body-emphasis ${
                value == "createpost" ? "active" : null
              }`}
              onClick={() => Select("createpost")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

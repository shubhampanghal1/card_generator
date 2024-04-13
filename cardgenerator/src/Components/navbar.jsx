function Navbar() {
  return (
    <>
      <nav classname="navbar navbar-expand-lg bg-body-tertiary">
        <div classname="container-fluid">
          <a classname="navbar-brand" href="#">
            Navbar
          </a>
          <button
            classname="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div classname="navbar-nav">
              <a classname="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a classname="nav-link" href="#">
                About Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

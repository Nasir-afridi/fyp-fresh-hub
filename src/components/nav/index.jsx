const TopNav = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a class="navbar-brand" href="#">
          Text
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <div class="navbar-text">
            <button type="button" class="btn btn-danger me-2">
              Login
            </button>
            <button type="button" class="btn btn-warning">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

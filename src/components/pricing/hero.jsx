const Hero = () => {
  return (
    <>
      <div class="container mt-4">
        <nav
          aria-label="breadcrumb"
          class="d-flex justify-content-start flex-wrap"
        >
          <ul class="breadcrumb d-flex flex-wrap list-unstyled gap-3 m-0 list-anchor">
            <li>
              <a href="#" class="text-decoration-none text-dark ">
                Home Page <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                Categories <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                Drinks <span className="greater-than-symbol">&gt;</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-dark">
                1.5 ltr Coke <span className="greater-than-symbol"> &gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;

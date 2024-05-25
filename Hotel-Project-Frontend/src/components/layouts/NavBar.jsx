import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">
      <div className="container-fluid">
        <Link>
          <span className="hotel-color"> FarHouse hotel</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScoll"
          aria-controls="#navbarScroll"
          aria-expanded="false"
          aria-label="Toggle naviagtion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-scroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-curret="page"
                to={"/browse-all-rooms"}
              >
                Browse all rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-curret="page" to={"/admin"}>
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

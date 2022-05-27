/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="navbar-brand"></div>
        <button
          className="btn navbar-toggler border-3 px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start-lg"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header d-flex d-lg-none">
            <h5
              className="offcanvas-title text-dark"
              id="offcanvasExampleLabel"
            >
              BCR
            </h5>
            <a
              // href="javascript:void(0) "
              className="text-reset p-0"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
              <i className="me-3" data-feather="x"></i>
            </a>
          </div>
          <div className="offcanvas-body p-lg-0">
            <ul
              className="navbar-nav ms-auto"
              // style="visibility: visible"
            >
              <li className="nav-item">
                <a className="nav-link" href="/#services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#testi">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-light-green me-2" type="button">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            RateEx
          </a>
          
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/converter">
                  Converter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-5" aria-current="page" href="/charts">
                 Charts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

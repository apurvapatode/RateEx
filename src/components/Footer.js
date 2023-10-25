import React from "react";

function Footer() {
  return (
    <div className=" bg-light p-2">
      <ul className="nav ">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="https://portfolio-website01.carrd.co/"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/apurvapatode">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/apurva-patode/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

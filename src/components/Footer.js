import React from "react";

function Footer() {
  return (
    <div className="fixed-bottom bg-light p-2">
      <ul className="nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

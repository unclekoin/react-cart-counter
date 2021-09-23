import React from 'react';

const NavBar = ({ totalItems }) => {
  return (
    <ul className="nav bg-dark mb-3 mt-3 d-flex align-items-center">
      <li className="nav-item">
        <a className="nav-link link-light" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-light" href="/">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-light" href="/">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link position-relative link-light" href="/">
        <i className="bi bi-cart3 fs-3"></i>
          <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavBar;

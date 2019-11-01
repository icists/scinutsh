import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../pages/routes';

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href={ROUTES.HOME}>Science in a Nutshell</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link active" to={ROUTES.HOME}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.ADMIN}>
            Admin
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
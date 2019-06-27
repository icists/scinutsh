import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../pages/routes';

const NavBar: React.FC = () => (
  <div className="nav-bar">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>
          Admin
        </Link>
      </li>
    </ul>
  </div>
)

export default NavBar;
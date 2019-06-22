import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../pages/routes';

const Navigation = [
  'Home',
  'Team Project',
  'Schedule',
]

const NavBar: React.FC = () => (
  <div className="nav-bar">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>
          Home
        </Link>
      </li>
    </ul>
  </div>
)

export default NavBar;
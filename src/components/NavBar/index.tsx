import React from 'react';

const Navigation = [
  'Home',
  'Team Project',
  'Schedule',
]

const NavBar: React.FC = () => (
  <div className="nav-bar">
    <ul>
    {Navigation.map(navElement => (
      <li>{navElement}</li>
    ))}
    </ul>
  </div>
)

export default NavBar;
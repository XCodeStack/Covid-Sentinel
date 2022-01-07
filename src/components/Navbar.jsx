import React from 'react';

import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div>COVID SENTINEL</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;

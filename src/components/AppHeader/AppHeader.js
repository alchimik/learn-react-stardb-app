import React from 'react';

import './AppHeader.scss';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Link to="/">StarDb</Link>
      </div>

      <nav className="app-header__menu">
        <ul>
          <li><Link to="/planets/">Planets</Link></li>
          <li><Link to="/starships/">StarShips</Link></li>
          <li><Link to="/people/">People</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;

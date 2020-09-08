import React from 'react';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">StarDb</div>
      <nav className="app-header__menu">
        <ul>
          <li>Planets</li>
          <li>StarShips</li>
          <li>People</li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;

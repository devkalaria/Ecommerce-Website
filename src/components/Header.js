import React from 'react';

const Header = () => {
  return (
    <header className="dashboard-header">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="header-widgets">
          <i className="fas fa-bell"></i>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-user-circle"></i>
        </div>
    </header>
  );
};

export default Header;

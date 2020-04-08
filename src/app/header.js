import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary d-block">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/channels">
        Channels
      </Link>
    </nav>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Add links  */}
      <Link to="/">Home</Link>
      <Link to="/log">Edit Robots</Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
}

export default Navigation;

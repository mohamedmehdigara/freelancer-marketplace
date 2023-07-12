import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/freelancers">Freelancers</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
        <Link to="/projectdetails">ProjectDetails</Link>

        </li>
        <li>
        <Link to="/profile">Profile</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="Contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

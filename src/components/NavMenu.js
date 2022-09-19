import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="Nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="Contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

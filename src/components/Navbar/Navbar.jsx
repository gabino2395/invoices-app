import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-box">
      <header>
        <ul>
          <Link to="/">
            <li className="nav-item">Facturas</li>
          </Link>
          <div className="line"></div>
          <Link to="/create">
            <li className="nav-item">Crear factura</li>
          </Link>
          <div className="line"></div>
          <Link to="/products">
            <li>Productos</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

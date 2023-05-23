import React, { useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import "../BurgerMenu";

function Navbar() {
  return (
    <header>
      <div className="header_left">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#howitworks">Как мы работаем</a>
          </li>
          <li className="nav-item">
            <a href="#blog">Проекты</a>
          </li>
          <li className="nav-item">
            <a href="#contacts">Контакты</a>
          </li>
          <li className="nav-item">
            <a href="/about">ESG</a>
          </li>
        </ul>
      </div>
      <div className="header_logo">
        <a href="#" component={Link} to="/">
          EVION
        </a>
      </div>
      <div className="header_right">
        <a href="tel:+996500333351">+996 500 333351</a>
        <button href="#section-2" className="header_right-button">
          Рассчитать стоимость
        </button>
      </div>
      {/* <h2 className="nav-branding">EVION</h2> */}
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Navbar;

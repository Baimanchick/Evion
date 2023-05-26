import React, { useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import "../BurgerMenu";
// import "../css/BurgerMenu.css";

function Navbar() {
  return (
    <header>
      <div className="header_left">
        <ul>
          <li className="nav-item">
            <a href="#section-1">Как мы работаем</a>
          </li>
          <li className="nav-item">
            <a href="#section-2">Проекты</a>
          </li>
          <li className="nav-item">
            <a href="#section-3">Контакты</a>
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
        <div className="burger" style={{ display: "none" }}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
      <div className="header_right">
        <a href="tel:+996500333351">+996 500 333351</a>
        <a href="#section-4" className="header_right-button">
          Рассчитать стоимость
        </a>
      </div>
    </header>
  );
}

export default Navbar;

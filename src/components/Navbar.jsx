import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div class="header_left">
        <ul>
          <li class="header_left-item">
            <a href="#howitworks">Как мы работаем</a>
          </li>
          <li class="header_left-item">
            <a href="#blog">Проекты</a>
          </li>
          <li class="header_left-item">
            <a href="#contacts">Контакты</a>
          </li>
          <li class="header_left-item">
            <a href="/about">ESG</a>
          </li>
        </ul>
      </div>
      <div class="header_logo">
        <a href="#" component={Link} to="/">
          EVION
        </a>
      </div>
      <div class="header_right">
        <a href="tel:+996500333351">+996 500 333351</a>
        <button href="#section-2" class="header_right-button">
          Рассчитать стоимость
        </button>
      </div>
    </header>
  );
}

export default Navbar;

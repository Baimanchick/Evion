import React, { useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import "../BurgerMenu";

function Navbar() {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
      }
    });
  });
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
      <h2 className="company-name__title">EVION</h2>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
    </header>
  );
}

export default Navbar;

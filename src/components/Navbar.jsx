import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import "../BurgerMenu";
// import "../css/BurgerMenu.css";



function Navbar() {

  const [ bottomLine, setBottomLine ] = useState(false);
  const [ bottomLine2, setBottomLine2 ] = useState(false);
  const [ bottomLine3, setBottomLine3 ] = useState(false);
  const [ bottomLine4, setBottomLine4 ] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBottomLine(window.scrollY > 1250);
      setBottomLine2(window.scrollY > 3050);
      setBottomLine3(window.scrollY > 6750);
    });
  }, []);

  return (
    <header>
      <div className="header_left">
        <ul>
          <li className={`nav-item`}>
            <a href="#section-1" className={`nav-item ${bottomLine && !bottomLine2 ? "active-nav" : ""}`}>Как мы работаем</a>
          </li>
          <li className="nav-item">
            <a href="#section-2" className={`nav-item ${bottomLine2 && !bottomLine3 ? "active-nav" : ""}`}>Проекты</a>
          </li>
          <li className="nav-item">
            <a href="#section-3" className={`nav-item ${bottomLine3 ? "active-nav" : ""}`}>Контакты</a>
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
      {/* <h2 className="nav-branding">EVION</h2>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div> */}
    </header>
  );
}

export default Navbar;

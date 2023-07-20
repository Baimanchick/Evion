import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../BurgerMenu";
// import "../css/BurgerMenu.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const [bottomLine, setBottomLine] = useState(false);
  const [bottomLine2, setBottomLine2] = useState(false);
  const [bottomLine3, setBottomLine3] = useState(false);
  const [bottomLine4, setBottomLine4] = useState(false);

  const handleClick2 = () => setClick(!click);

  const handleClick = () => setClick2(!click2);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBottomLine(window.scrollY > 1250);
      setBottomLine2(window.scrollY > 3050);
      setBottomLine3(window.scrollY > 6750);
    });
  }, []);

  return (
    <header
      style={click ? { marginBottom: "135px" } : { marginBottom: "" }}
      className={`${click2 ? "mb-7" : ""}`}
    >
      <div className={`header_left ${click2 ? "header_nav_ipad" : ""}`}>
        <ul
          className={`header_nav`}
          style={click ? { display: "flex", gap: "15px" } : { display: "" }}
        >
          <li className={`nav-item`}>
            <a
              href="#section-1"
              className={`nav-item ${
                bottomLine && !bottomLine2 ? "active-nav" : ""
              }`}
              onClick={() => setClick2(false)}
            >
              Как мы работаем
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#section-2"
              className={`nav-item ${
                bottomLine2 && !bottomLine3 ? "active-nav" : ""
              }`}
              onClick={() => setClick2(false)}
            >
              Проекты
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#section-3"
              className={`nav-item ${bottomLine3 ? "active-nav" : ""}`}
              onClick={() => setClick2(false)}
            >
              Контакты
            </a>
          </li>
          <li className="nav-item">
            <a href="/about">Подробнее</a>
          </li>
        </ul>
      </div>
      <div className="header_logo">
        <a href="#" component={Link} to="/">
          EVION
        </a>
        <div className="burger" onClick={handleClick2}>
          <ion-icon name={click ? "close" : "menu-outline"}></ion-icon>
        </div>
        <div className="burger__for_ipad" onClick={handleClick}>
          <ion-icon name={click2 ? "close" : "menu-outline"}></ion-icon>
        </div>
      </div>
      <div
        className="header_right"
        style={
          click
            ? {
                display: "flex",
                marginTop: "45px",
                justifyContent: "center",
                alignItems: "center",
                width: "65%",
              }
            : { display: "" }
        }
      >
        <a className="phone" href="tel:+996500333351">
          +996 500 333351
        </a>
        <a href="#section-4" className="header_right-button">
          Рассчитать стоимость
        </a>
      </div>
    </header>
  );
}

export default Navbar;

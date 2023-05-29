import React from "react";
import "../css/esgNavbar.css";

function ESGNavbar() {
  return (
    <div className="esg__navbar">
      <div className="esg__navbar-container">
        <div className="esg__navbar__left">
          <div className="esg__navbar__left__menuwrapper">
            <ul className="esh__navbar__navigation">
              <li>О нас</li>
              <li>Услуги</li>
              <li>Работы</li>
            </ul>
          </div>
        </div>
        <div className="esg__navbar__logo">
          <div className="esg__navbar__logo2">
            <div>
              <a href="#" className="esg__navbar__logo_link">
                <div className="esg__navbar__logo_title">
                  <div className="logo__title">EVION</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="esg__navbar__right">
          <div className="esg__navbar__right_wrapper">
            <ul className="esg__navbar_right_navigation">
              <li>FAQ</li>
              <li>Блог</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ESGNavbar;

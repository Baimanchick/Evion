import React from "react";
import "../css/esgNavbar.css";

function ESGNavbar() {
  return (
    <div className='esg__navbar'>
        <div className='esg__navbar-container'>
            <div className='esg__navbar__left'>
                <div className='esg__navbar__left__menuwrapper'>
                    <ul className='esh__navbar__navigation'>
                        <li style={{ cursor: "pointer" }}><a href='/about' style={{ textDecoration: "none", color: "black", fontFamily: "tildasans-reg" }}>О нас</a></li>
                        <li style={{ cursor: "pointer" }}>Услуги</li>
                        <li style={{ cursor: "pointer" }}>Работы</li>
                    </ul>
                </div>
            </div>
            <div className='esg__navbar__logo'>
                <div className='esg__navbar__logo2'>
                    <div>
                        <a href='#' className='esg__navbar__logo_link'>
                            <div className='esg__navbar__logo_title'>
                                <div className='logo__title'>EVION</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='esg__navbar__right'>
                <div className='esg__navbar__right_wrapper'>
                    <ul className='esg__navbar_right_navigation'>
                        <li style={{ cursor: "pointer" }}><a href='/faq' style={{ textDecoration: "none", color: "black", fontFamily: "tildasans-reg" }}>FAQ</a></li>
                        <li style={{ cursor: "pointer" }}><a href='/blogs' style={{ textDecoration: "none", color: "black", fontFamily: "tildasans-reg" }}>Блог</a></li>
                        <li style={{ cursor: "pointer" }}><a href='/' style={{ textDecoration: "none", color: "black", fontFamily: "tildasans-reg" }}>Контакты</a></li>
                    </ul>
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

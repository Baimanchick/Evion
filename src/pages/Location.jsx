import React from "react";
import "../css/location.css";
import { Link, useNavigate } from "react-router-dom";
import Leafleat from "./Leafleat";

function Location() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container__location">
        <div className="goBack">
          <ion-icon
            name="arrow-back-outline"
            onClick={() => navigate("/about")}
          ></ion-icon>
        </div>
        <div className="location-container">
          <div className="location-title">Локации</div>
          <p className="location-paragraph">
            Многие электрические станции строятся на окраинах городов или за их{" "}
            <br />
            пределами. Мы стремимся обеспечить доступность и удобство зарядки
            <br />
            электромобилей во всем Кыргызстане путем установки широкой сети
            заправочных станций.
            <br />
          </p>
        </div>

        <Leafleat />
      </div>

      <div className="footer__end">
        <div className="containerC">
          <div className="all">
            <div className="footer__info__item_1">
              <div className="footer_logo">
                {" "}
                <a href="#" component={Link} to="/">
                  EVION
                </a>
              </div>
              <div className="footer__info__social">
                <a href="https://www.facebook.com/people/Evion-KG/pfbid0yLWBFJELw9xAZhuXhvftWacprnuNeJ7cbYwS6HHJKUpH6G4jcimTkR7FB9D2cQLwl/?mibextid=ZbWKwL">
                  {" "}
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="https://instagram.com/evion_kg?igshid=MzRlODBiNWFlZA==">
                  {" "}
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://youtube.com/@EVIONKG">
                  {" "}
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=996500333351&text&type=phone_number&app_absent=0">
                  {" "}
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>

              <div className="footer__info__y">
                © 2023 EVION
                <a href="/prvacy">политика конфиденциальности</a>
              </div>
            </div>
            <div className="footer_info_item_2">
              <ul className="footer_links_1">
                <div className="about_evion">Об EVION</div>
                <li>кто мы</li>
                <li>наша миссия</li>
                <li>проекты</li>
                <li>партнеры</li>
              </ul>
            </div>
            <div className="footer_info_item_3">
              <ul className="footer_links_2">
                <div className="our_services">Наши услуги</div>
                <li>Установка ЭЗС</li>
                <li>TOUCH App</li>
                <li>Зарядочные станции</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;

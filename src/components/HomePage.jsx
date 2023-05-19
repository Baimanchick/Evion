import React from "react";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div>
      <div class="home_section">
        <h1 class="home_section-tittle">
          Быстрые зарядные станции <br /> "под ключ"
        </h1>
        <p class="home_section-subtittle">
          Создание комфортных условий для владельцев электромобилей.
        </p>
      </div>
      <div class="home_section-img">
        <img
          src="https://thumb.tildacdn.com/tild3230-3732-4431-b762-653566366431/-/format/webp/znimok-ekrana-2019-0.jpg"
          alt=""
        />
      </div>
      <div class="home_section-target">
        <div class="home_section-target-info">
          <h2>Наша главная цель</h2>
          <div class="target_line">
            <span></span>
          </div>
          <p>
            Комплексное развитие сферы электротранспорта и электрозарядной{" "}
            <br /> инфраструктуры для создания комфортных условий для всех
            участников сферы.
          </p>
        </div>
      </div>
      <div class="home_section-sertificate">
        <div class="sertificate_container">
          <div className="sertificate">
            <img
              class="sertificate_container-logo"
              src="https://static.tildacdn.com/tild3035-3862-4135-b633-353266316437/6Artboard_34.svg"
              alt=""
            />
          </div>
          <h3>Сертифицированный товар</h3>
          <p> Производство: Китай и Россия</p>
          <img
            class="sertificate_container-logo"
            src="https://static.tildacdn.com/tild6638-3938-4132-b831-613462346536/6Artboard_34_copy.svg"
            alt=""
          />

          <h3>Быстрая установка</h3>
          <p> Оперативная установка станции</p>

          <img
            class="sertificate_container-logo"
            src="https://static.tildacdn.com/lib/tildaicon/31643538-3131-4563-b735-636634373338/Tilda_Icons_47dlvr_speed.svg"
            alt=""
          />

          <h3> Экологический проект </h3>
          <p> Мы за ЭКО транспорт</p>
        </div>

        <div class="sertificate_container-image">
          <img
            src="https://thumb.tildacdn.com/tild3537-3138-4435-a332-343530393433/-/resize/560x/-/format/webp/3c28f7470f0ec11cde19.png"
            alt=""
          />
        </div>
      </div>

      <div className="home_section-project">
        <div className="home_section-project-title">
          <h2>Наши проекты</h2>
          <p>В данный момент мы реализуем следующие проекты</p>
        </div>
        <div className="cards">
          <div className="item_card-1">
            <img
              src="https://thumb.tildacdn.com/tild3430-6432-4233-a632-613033626631/-/cover/720x504/center/center/-/format/webp/image.png"
              alt=""
            />
            <h2>
              Контракт с распред <br /> компанией"НурАл Энерго"
            </h2>
            <p>
              В рамках выставки EXPO2023 организованный <br /> ТПП КР, было
              подписано соглашение об установке <br /> зарядных станций га
              территории ТЦ "АЮ Гранд"
            </p>
          </div>
          {/* <div className="item_card-2">
            <h2>
              Установка станции на <br /> парковке БЦ 79
            </h2>
            <p>Установлено 2 станции по 120 квт. </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

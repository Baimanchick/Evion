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
      <div className="greenBlock"></div>
      <div class="home_section-target">
        <div class="home_section-target-info">
          <h2>Наша главная цель</h2>
          <div class="target_line">
            <span></span>
          </div>
          <p>
            Комплексное развитие сферы электротранспорта и электрозарядной
            <br /> инфраструктуры для создания комфортных условий для всех
            участников сферы.
          </p>
        </div>
      </div>
      <div class="home_section-sertificate">
        <div class="sertificate_container">
          <div className="sertificate">
            <div>
              <img
                class="sertificate_container-logo"
                src="https://static.tildacdn.com/tild3035-3862-4135-b633-353266316437/6Artboard_34.svg"
                alt=""
              />
            </div>
            <div className="sertificate__column">
              <h3>Сертифицированный товар</h3>
              <p> Производство: Китай и Россия</p>
            </div>
          </div>
          <div className="sertificate">
            <div>
              <img
                class="sertificate_container-logo"
                src="https://static.tildacdn.com/tild6638-3938-4132-b831-613462346536/6Artboard_34_copy.svg"
                alt=""
              />
            </div>
            <div className="sertificate__column">
              <h3>Быстрая установка</h3>
              <p> Оперативная установка станции</p>
            </div>
          </div>
          <div className="sertificate">
            <div>
              <img
                class="sertificate_container-logo"
                src="https://static.tildacdn.com/lib/tildaicon/31643538-3131-4563-b735-636634373338/Tilda_Icons_47dlvr_speed.svg"
                alt=""
              />
            </div>
            <div className="sertificate__column">
              <h3> Экологический проект </h3>
              <p> Мы за ЭКО транспорт</p>
            </div>
          </div>
        </div>

        <div class="sertificate_container-image">
          <img
            src="https://thumb.tildacdn.com/tild3537-3138-4435-a332-343530393433/-/resize/560x/-/format/webp/3c28f7470f0ec11cde19.png"
            alt=""
          />
        </div>
      </div>

      <div className="home_section-how-we-works">
        <div className="title__how-we-works">
          Как мы работаем
        </div>
        <div className="how-we-works__items">
          <div className="stepsBlock">
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">
                  1
                </div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">Выбор устройств и согласование условий</span>
                <p className="stepsContentsText">Менеджер проконсультирует вас, составит коммерческое предложение и презентует наши решения.</p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">
                  2
                </div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">Монтаж и подписание договора</span>
                <p className="stepsContentsText">В удобное вам время мастер установит станцию, проинструктирует, как ее использовать, и вы подпишете договор.</p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">
                  3
                </div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">Круглосуточная техподдержка</span>
                <p className="stepsContentsText">24 часа в сутки наша техподдержка будет отслеживать работу вашей сети ЭЗС и контролировать безопасность.</p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">
                  4
                </div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">Выезд на локацию</span>
                <p className="stepsContentsText">В случае поломки наши техспециалисты выедут на локацию, осмотрит объект на предмет технической неполадки.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_section-project">
        <div className="containerC">
          <div className="home_section-project-title">
            <h2>Наши проекты</h2>
            <p>В данный момент мы реализуем следующие проекты</p>
          </div>
          <div className="cards">
            <div className="cards__item">
              <img src="https://thumb.tildacdn.com/tild3430-6432-4233-a632-613033626631/-/cover/720x504/center/center/-/format/webp/image.png" className="cards__img"/>
              <div className="cards__typography">
                <div className="cards__title">Контракт с распред компанией"НурАл Энерго"</div>
                <div className="cards__text">В рамках выставки EXPO2023 организованный ТПП КР, было подписано соглашение об установке зарядных станций га территории ТЦ "АЮ Гранд"</div>
              </div>
            </div>
            <div className="cards__item__special">
              <img src="https://thumb.tildacdn.com/tild6531-6339-4363-b130-316538633965/-/cover/720x990/center/center/-/format/webp/IMG_4148.jpeg" className="cards__img__special"/>
              <div className="blackBlock"></div>
              <div className="cards__typography__special">
                <div className="cards__title__special">Установка станции на парковке БЦ 79</div>
                <div className="cards__text__special">Установлено 2 станции по 120 квт.</div>
              </div>
            </div>
            <div className="cards__item">
              <img src="https://thumb.tildacdn.com/tild3338-3238-4131-a638-373761666639/-/cover/720x504/center/center/-/format/webp/image.png" className="cards__img"/>
              <div className="cards__typography">
                <div className="cards__title">Произвели монтаж зарядной станции на площадке ресторана "President Hall"</div>
                <div className="cards__text">Инструкция для экстренной ситуации</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

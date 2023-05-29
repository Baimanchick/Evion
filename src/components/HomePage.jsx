import React, { useEffect, useRef, useState } from "react";
import "../css/HomePage.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

import { ReactComponent as CloseSvg } from "../images/close-outline.svg";
import { ReactComponent as ChatSvg } from "../images/chatbubble-ellipses-outline.svg";
import { Link } from "react-router-dom";
import Slider3 from "./Slider3";
import { useEmailContext } from "../contexts/EmailsContext";
import emailjs from "@emailjs/browser";
import { hover } from "@testing-library/user-event/dist/hover";
import { notifyError } from "./Toastify";

function HomePage() {
  const [hasContent, setHasContent] = useState(false);
  const [hasContent2, setHasContent2] = useState(false);
  const [hasContent3, setHasContent3] = useState(false);
  const [hasContent4, setHasContent4] = useState(false);

  const [hasData, setHasData] = useState(false);

  const [formValue, setFormValue] = useState({
    name: "",
    user__email: "",
    kilowatt: "",
    address: "",
  });

  const [message, setMessage] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [bottomLine, setBottomLine] = useState(false);

  const form = useRef();

  const { addEmails } = useEmailContext();

  const handleChange = (e) => {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2u8r3xd",
        "template_xe9nuau",
        form.current,
        "9_P_srz1wdW9abOTP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (!formValue.user__email.includes("@")) {
      setValidEmail(true);
      return;
    } else {
      setValidEmail(false);
      addEmails(formValue);
    }

    setHasContent(false);
    setHasContent2(false);
    setHasContent3(false);
    setHasContent4(false);

    setFormValue({
      name: "",
      user__email: "",
      kilowatt: "",
      address: "",
    });

    setHasData(true);
  };

  const [hoverPlus, setHoverPlus] = useState(false);

  return (
    <div>
      <div className="home_section">
        <div className="home_section-tittle">
          Быстрые зарядные станции <br /> "под ключ"
        </div>
        <div data-aos="fade-up">
          <p className="home_section-subtittle">
            Создание комфортных условий для владельцев электромобилей.
          </p>
        </div>
      </div>

      <div className="notification" onClick={() => setMessage(!message)}>
        <div style={{ position: "absolute", bottom: "45%" }}>
          {message ? (
            <div className="communication">
              <div className="whatsapp animate__fadeIn">
                <ion-icon component={Link} name="logo-whatsapp"></ion-icon>
              </div>
              <div className="call animate__fadeIn">
                <ion-icon name="call-outline"></ion-icon>
              </div>
            </div>
          ) : null}
        </div>
        <label>
          {message ? (
            <CloseSvg
              className={`close ${message == true ? "animated" : ""}`}
            />
          ) : (
            <ChatSvg className={`chat ${message == false ? "animated" : ""}`} />
          )}
        </label>
      </div>

      <div className="home_section-img">
        <img
          src="https://thumb.tildacdn.com/tild3230-3732-4431-b762-653566366431/-/format/webp/znimok-ekrana-2019-0.jpg"
          alt=""
        />
        <div className="plus">
          <ion-icon name="add-outline"></ion-icon>
          {/* <div className="plus-text" style={{ display: "none" }}>Быстрые зарядные станции</div> */}
        </div>
      </div>
      <div className="greenBlock"></div>
      <div className="home_section-target">
        <div className="home_section-target-info">
          <div data-aos="fade-up">
            <h1>Наша главная цель</h1>
          </div>
          <div className="target_line">
            <span className="target-line_span"></span>
          </div>
          <p>
            Комплексное развитие сферы электротранспорта и электрозарядной
            <br /> инфраструктуры для создания комфортных условий для всех
            участников сферы.
          </p>
        </div>
      </div>
      <div className="home_section-sertificate">
        <div className="sertificate_container">
          <div className="sertificate">
            <div>
              <img
                className="sertificate_container-logo"
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
                className="sertificate_container-logo"
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
                className="sertificate_container-logo"
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

        <div className="sertificate_container-image">
          <img
            src="https://thumb.tildacdn.com/tild3537-3138-4435-a332-343530393433/-/resize/560x/-/format/webp/3c28f7470f0ec11cde19.png"
            alt=""
          />
        </div>
      </div>

      <div id="section-1" className="home_section-how-we-works">
        <div className="title__how-we-works">Как мы работаем</div>
        <div className="how-we-works__items">
          <div className="stepsBlock">
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">1</div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">
                  Выбор устройств и согласование условий
                </span>
                <p className="stepsContentsText">
                  Менеджер проконсультирует вас, составит коммерческое
                  предложение и презентует наши решения.
                </p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">2</div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">
                  Монтаж и подписание договора
                </span>
                <p className="stepsContentsText">
                  В удобное вам время мастер установит станцию,
                  проинструктирует, как ее использовать, и вы подпишете договор.
                </p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">3</div>
                <div className="steps__line"></div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">
                  Круглосуточная техподдержка
                </span>
                <p className="stepsContentsText">
                  24 часа в сутки наша техподдержка будет отслеживать работу
                  вашей сети ЭЗС и контролировать безопасность.
                </p>
              </div>
            </div>
            <div className="stepsBlock__items">
              <div className="stepsAboveBlock">
                <div className="steps__number">4</div>
              </div>
              <div className="stepsContents">
                <span className="stepsContentsTitle">Выезд на локацию</span>
                <p className="stepsContentsText">
                  В случае поломки наши техспециалисты выедут на локацию,
                  осмотрит объект на предмет технической неполадки.
                </p>
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
              <img
                src="https://thumb.tildacdn.com/tild3430-6432-4233-a632-613033626631/-/cover/720x504/center/center/-/format/webp/image.png"
                className="cards__img"
              />
              <div className="cards__typography">
                <div className="cards__title">
                  Контракт с распред компанией"НурАл Энерго"
                </div>
                <div className="cards__text">
                  В рамках выставки EXPO2023 организованный ТПП КР, было
                  подписано соглашение об установке зарядных станций га
                  территории ТЦ "АЮ Гранд"
                </div>
              </div>
            </div>
            <div className="cards__item__special">
              <img
                src="https://thumb.tildacdn.com/tild6531-6339-4363-b130-316538633965/-/cover/720x990/center/center/-/format/webp/IMG_4148.jpeg"
                className="cards__img__special"
              />
              <div className="blackBlock"></div>
              <div className="cards__typography__special">
                <div className="cards__title__special">
                  Установка станции на парковке БЦ 79
                </div>
                <div className="cards__text__special">
                  Установлено 2 станции по 120 квт.
                </div>
              </div>
            </div>
            <div className="cards__item">
              <img
                src="https://thumb.tildacdn.com/tild3338-3238-4131-a638-373761666639/-/cover/720x504/center/center/-/format/webp/image.png"
                className="cards__img"
              />
              <div className="cards__typography">
                <div className="cards__title">
                  Произвели монтаж зарядной станции на площадке ресторана
                  "President Hall"
                </div>
                <div className="cards__text">
                  Инструкция для экстренной ситуации
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-2" className="home_section-mobile_app">
        <div className="mobileApp__title">
          Гибкое и легкое управление <br /> через приложение
        </div>
        <div className="mobileApp__text">Мобильное приложение "Touch"</div>
        <div className="containerC">
          <div className="mobileApp__items">
            <div className="mobileApp__item">
              <div className="info__items">
                <div className="info__item">
                  <div
                    className="info__item__title_img"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div className="info__item__title">Будьте в курсе</div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/61376132-3735-4136-b436-373834633035/18ked_bell.svg"
                      className="svg__info"
                    />
                  </div>
                  <div
                    className="info__item__text"
                    style={{ textAlign: "right" }}
                  >
                    Получайте моментальные оповещения о новой локации ЭЗС
                  </div>
                </div>
                <div className="info__item">
                  <div
                    className="info__item__title_img"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div className="info__item__title">
                      Используйте аналитику
                    </div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/64666539-3361-4663-b462-623833343337/Tilda_Icons_39_IT_analytics.svg"
                      className="svg__info"
                    />
                  </div>
                  <div
                    className="info__item__text"
                    style={{ textAlign: "right" }}
                  >
                    Контролируйте процесс зарядки и оценивайте
                    энергопотребление.
                  </div>
                </div>
                <div className="info__item">
                  <div
                    className="info__item__title_img"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div className="info__item__title">Истории зарядок</div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/35306639-3563-4432-b536-396436666161/18ked_camera.svg"
                      className="svg__info"
                    />
                  </div>
                  <div
                    className="info__item__text"
                    style={{ textAlign: "right" }}
                  >
                    Отслеживания истории зарядки.
                  </div>
                </div>
              </div>
            </div>
            <div className="mobileApp__item">
              <div className="mobileApp__img">
                <img
                  src="https://thumb.tildacdn.com/tild3230-3837-4561-b931-303436346461/-/format/webp/Flat_white___.png"
                  className="mobileApp__img__details"
                />
              </div>
            </div>
            <div className="mobileApp__item">
              <div className="info__items">
                <div className="info__item">
                  <div className="info__item__title_img">
                    <div className="info__item__title">
                      Поиск станций на карте
                    </div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/65316432-3063-4537-b539-623663383731/Tilda_Icons_41_hotel_family.svg"
                      className="svg__info"
                    />
                  </div>
                  <div className="info__item__text">
                    Все локации отображены на карте в приложении.
                  </div>
                </div>
                <div className="info__item">
                  <div className="info__item__title_img">
                    <div className="info__item__title">
                      Управляйте станциями
                    </div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/34313138-3432-4531-b432-623839666466/Tilda_Icons_30_system_settings.svg"
                      className="svg__info"
                    />
                  </div>
                  <div className="info__item__text">
                    Настраивайте работу станций по расписанию или по событию.
                  </div>
                </div>
                <div className="info__item">
                  <div className="info__item__title_img">
                    <div className="info__item__title">Бронирование ЭЗС</div>
                    <img
                      src="https://static.tildacdn.com/lib/tildaicon/61373835-3230-4732-a566-663366353936/5ev_magic.svg"
                      className="svg__info"
                    />
                  </div>
                  <div className="info__item__text">
                    Бронируйте время зарядки электромобиля.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_section-carousel">
        <div className="intro__rate">
          <h3>Отзывы наших клиентов</h3>
        </div>
        <div className="containerB" style={{ position: "relative" }}>
          <Slider1 />
        </div>
      </div>

      <div className="home_section-bigIMG">
        <div className="home_sectiom-bigIMG__items">
          <div className="bigIMG__title">
            Развивайте инфраструктуру <br /> для электромобилей вместе с <br />{" "}
            "EVION"
          </div>
          <div className="bigIMG__text">
            Стоимость зарядной станции с установкой от 100 000сом
          </div>
          <div className="bigIMG__button">Рассчитать стоимость</div>
        </div>
        <div className="greenBlock2"></div>
      </div>

      <div id="section-4" className="home_section-form">
        <div className="containerC">
          <div className="form_block__title">
            Рассчитайте стоимость <br /> электрозарядной станции
          </div>
          <div className="form_block__description">
            Стоимость станции будет зависеть от количества необходимых вам
            функций
          </div>
          <div>
            {hasData ? (
              <div className="center">
                <div className="acceptData">
                  Спасибо вам! Ваш запрос принят. Скоро с вами свяжутся.
                </div>
              </div>
            ) : (
              <form
                ref={form}
                className="form_block__items"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  name="name"
                  value={formValue.name}
                  onChange={(e) => {
                    handleChange(e);
                    e.target.value != ""
                      ? setHasContent(true)
                      : setHasContent(false);
                  }}
                  className={`input ${hasContent ? "hasContent" : ""}`}
                />
                <label className="l1">Ваше имя</label>
                <input
                  type="text"
                  name="user__email"
                  value={formValue.email}
                  style={
                    validEmail
                      ? { border: "1px solid #ff2638" }
                      : { border: "2px solid #b6babd" }
                  }
                  onChange={(e) => {
                    handleChange(e);
                    e.target.value != ""
                      ? setHasContent2(true)
                      : setHasContent2(false);
                  }}
                  className={`input2 ${hasContent2 ? "hasContent2" : ""}`}
                />
                <label className="l2">Ваше E-mail</label>
                <input
                  type="text"
                  name="kilowatt"
                  value={formValue.kilowatt}
                  onChange={(e) => {
                    handleChange(e);
                    e.target.value != ""
                      ? setHasContent3(true)
                      : setHasContent3(false);
                  }}
                  className={`input3 ${hasContent3 ? "hasContent3" : ""}`}
                />
                <label className="l3">Объём(квт)</label>
                <input
                  type="text"
                  name="address"
                  value={formValue.address}
                  onChange={(e) => {
                    handleChange(e);
                    e.target.value != ""
                      ? setHasContent4(true)
                      : setHasContent4(false);
                  }}
                  className={`input4 ${hasContent4 ? "hasContent4" : ""}`}
                />
                <label className="l4">Адрес</label>
                {validEmail ? (
                  <span className="validEmail">
                    Пожалуйста введите правильный e-mail
                  </span>
                ) : null}
                <button>Получить предложение</button>
                <p>
                  Нажимая на кнопку, вы даете согласие на обработку персональных
                  данных <br />{" "}
                  <span>и соглашаетесь c политикой конфиденциальности</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="home_section-partners">
        <div className="containerC">
          <div className="parthers__items">
            <div className="parthers__title">Партнеры</div>
            <div className="parthers__text">
              Совместными усилиями мы достигнем новых вершин
            </div>
            <div className="pathers__logo">
              <div className="slider2">
                <Slider2 />
              </div>
              <div className="slider3">
                <Slider3 />
              </div>
            </div>
            <div className="parthers__block">
              <div className="parthers__left">
                <span>17 целей для преобразования нашего мира</span>
                <h3>Вклад в достижение 17 ЦУР ООН</h3>
                <p>
                  Компания "EVION" оказывает влияние на достижение 5 из 17 целей{" "}
                  <span
                    style={{
                      color: "#ff8562",
                      letterSpacing: "normal",
                      fontFamily: "tildasans-thin",
                      fontSize: "18px",
                      lineHeight: "1.55",
                    }}
                  >
                    устойчивого развития ООН (ЦУР)
                  </span>{" "}
                  через реализацию своей деятельности, а также обеспечивая
                  устойчивость внутренних процессов в области воздействия на
                  окружающую среду, социальной сферы и качества управления.
                </p>
              </div>
              <div className="parthers__right">
                <img src="https://thumb.tildacdn.com/tild3236-3739-4238-b835-653634393061/-/format/webp/___1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-3" className="home-section_footer">
        <div className="containerC">
          <div className="footer__title">Контакты</div>
          <div className="footer__text">
            Поддержите развитие зеленых технологий...
          </div>
          <div className="footer__items">
            <ul className="navigation__footer">
              <li>Реквизиты</li>
              <li style={{ fontSize: "16px" }}>ОсОО "ЭВИОН"</li>
              <li style={{ fontSize: "16px" }}>ИНН 01403202310108</li>
              <li style={{ fontSize: "16px" }}>ОКПО 31829086</li>
              <li style={{ fontSize: "16px" }}>Айыл Банк</li>
              <li style={{ fontSize: "16px" }}>Р/счет 1350150020000942</li>
              <li style={{ fontSize: "16px" }}>Халык Банк</li>
              <li style={{ fontSize: "16px" }}>Рас./счёт: 1250820101119963</li>
              <li style={{ fontSize: "16px" }}>БИК:125008</li>
            </ul>
            <ul className="navigation__footer">
              <li>Адрес</li>
              <li>Кыргызская Республика"</li>
              <li>г. Бишкек</li>
              <li>Головной офис:</li>
              <li>ул. Панфилова 178.</li>
              <li>7 этаж, 713 кабинет</li>
              <li>Центр электромобилей:</li>
              <li>ул. Анкара 1/16/1</li>
            </ul>
            <ul className="navigation__footer">
              <li>Контакты</li>
              <li>+996 500 333 351"</li>
              <li>(WhatsApp)</li>
              <li>+996 500 333 351</li>
              <li style={{ color: "#ff8562" }}>www.evion.kg</li>
              <li>evionkg@gmail.com</li>
            </ul>
            <ul className="navigation__footer">
              <li>Наша миссия</li>
              <p>
                Миссия проекта – обеспечить быстрое, экологичное и экономичное
                передвижение по дорогам Кыргызстана, сделать возможным
                беспрепятственное путешествие от Нарына до Баткена на
                электромобиле.
              </p>
            </ul>
          </div>
        </div>
        <div className="footer__end">
          <div className="containerC">
            <div className="footer__info__items">
              <div className="footer__info__y">
                © 2023 EVION
                <a href="/prvacy">политика конфиденциальности</a>
              </div>
              <div className="footer__info__social">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

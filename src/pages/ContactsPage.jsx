import React from "react";
import "../css/contact.css";
import { Link } from "react-router-dom";

function ContactsPage() {
  return (
    <div>
      <div className="contacty">
        <div className="titles-contact">
          <div className="conntact">Контакты</div>
          <div className="phone-number">+996 (500) 333-351</div>
          <div className="gmail-evion">evionkg@gmail.com</div>
          <div className="icons-evion">
            <ion-icon
              style={{
                width: "64px",
                height: "44px",
              }}
              name="call-outline"
            ></ion-icon>
            <ion-icon
              style={{ width: "64px", height: "44px" }}
              name="mail-outline"
            ></ion-icon>
          </div>
        </div>
      </div>

      <div className="container-_-">
        <form className="form-evion">
          <div className="title-evion-question">Вопрос</div>
          <input
            placeholder="Опишите задачу, которую хотите решить"
            className="special-input"
            type="text"
          />
          <div className="title-evion-question">Имя*</div>
          <input
            placeholder="Как к вам обращаться"
            className="input-evion"
            type="text"
          />
          <div className="title-evion-question">Телеофн*</div>
          <input
            placeholder="+996 (999) 999-999"
            className="input-evion"
            type="number"
          />
          <div className="title-evion-question">Ваш Email*</div>
          <input
            placeholder="Email для связи"
            className="input-evion"
            type="text"
          />
          <button className="btn-question">Sumbit</button>
          <p className="confirm">
            Нажимая на кнопку, я выражаю{" "}
            <a href="/prvacy">согласие на обработку персональных данных</a>
          </p>
        </form>
      </div>

      <div className="home-section_footer">
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
      {/*  */}
    </div>
  );
}

export default ContactsPage;
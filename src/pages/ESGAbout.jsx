import React from "react";
import "../css/esgAbout.css";
import Slider4 from "../components/Slider4";

function ESGAbout() {
  return (
    <div>
      <div id="about" className="our_company">
        <div className="big-title">КОМПАНИЯ "ЭВИОН"</div>
      </div>

      <div className="information">
        <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>
          Осуществляет свою деятельность, согласно КОНЦЕПЦИИ зеленой <br />{" "}
          экономики в Кыргызской Республике "Кыргызстан - страна зеленой <br />{" "}
          экономики" , утвержденной постановлением Жогорку Кенеша <br />{" "}
          Кыргызской Республики от 28 июня 2018 года № 2532-VI. Мы <br />{" "}
          поддерживаем международные инициативы и принципы ESG в <br /> области
          устойчивого развития.
        </h2>
        <div className="target_line-span">
          <span className="target-line_span"></span>
        </div>
        <p className="our">
          Наша миссия <br /> Миссия проекта – обеспечить быстрое, экологичное и
          экономичное передвижение по <br /> дорогам Кыргызстана, сделать
          возможным беспрепятственное путешествие от Нарына до
          <br /> Баткена на электромобиле.
        </p>
      </div>

      <div id="wins" className="our-wins">
        <div className="containerABCD">
          <div className="titles">
            <h2>Наши успехи</h2>
            <p>
              Мы делаем большие успехи и всегда развиваемся! Вот <br />{" "}
              некоторые факты о том, как мы работаем:
            </p>
          </div>

          <div className="our-wins_proof">
            <div className="our-projects__item">
              <h2>6 месяцев</h2>
              <div className="target_line_span">
                <span className="target-line-span"></span>
              </div>
              <p>
                Мы стартовали в 2022 году и <br /> все время развиваемся
              </p>
            </div>

            <div className="our-projects__item">
              <h2>14 проектов</h2>
              <div className="target_line_span">
                <span className="target-line-span"></span>
              </div>
              <p>
                Реализованных проектов с <br /> 2022 по 2023 год
              </p>
            </div>

            <div className="our-projects__item">
              <h2>Диплом</h2>
              <div className="target_line_span">
                <span className="target-line-span"></span>
              </div>
              <p>
                Награда за качество <br /> предоставляемых услуг в <br /> сфере
                транспорта и <br />
                логистики
              </p>
            </div>

            <div className="our-projects__item">
              <h2>GPM - b</h2>
              <div className="target_line_span">
                <span className="target-line-span"></span>
              </div>
              <p>
                Cертификат управления <br /> проектами, с использованием <br />
                устойчивых методов. <br /> https://greenprojectmanagement.org/
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="slider_about">
        <Slider4 />
      </div>

      <div className="evolution">
        <div className="wrapper--right">
          <h2>Стратегия устойчивого развития</h2>
          <p className="paragra">
            Как компания с высокой социально-экологической <br />{" "}
            ответственностью, рассматриваем концепцию устойчивого <br />{" "}
            развития как неотъемлемую часть долгосрочной стратегии <br />{" "}
            Компании и один из ключевых факторов её <br />{" "}
            конкурентоспособности.
          </p>
          <p className="paragrap">
            Компания "EVION" руководствуется в своей деятельности принципами{" "}
            <br />
            ответственного ведения бизнеса, отражающими взаимосвязь между <br />
            экологическими, социальными вопросами, корпоративным управлением.{" "}
            <br />
            Компания соотносит свои бизнес-цели с общественными интересами,{" "}
            <br />
            учитывает социальные, экологические и управленческие факторы (ESG{" "}
            <br />
            факторы)
          </p>
        </div>
        <div className="wrapper--left">
          <img
            src="https://thumb.tildacdn.com/tild3238-3138-4638-b835-666330313066/-/format/webp/12.jpg"
            alt=""
          />
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

export default ESGAbout;

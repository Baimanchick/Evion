import React, { useState } from "react";
import { usePhoneContext } from "../contexts/PhonesContext";
import "../css/faq.css";
import { notifyError } from "../components/Toastify";
import { Link } from "react-router-dom";

function Faq() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);
  const [content5, setContent5] = useState(false);
  const [content6, setContent6] = useState(false);

  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  const [formValue, setFormValue] = useState({
    phone: "",
  });
  const [hasData, setHasData] = useState(false);
  const { addPhones2 } = usePhoneContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.phone.trim()) {
      notifyError("Заполните все поля");
      return;
    }

    addPhones2(formValue);

    setHasData(true);

    setFormValue({
      phone: "",
    });
  };

  const handleChange = (e) => {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  };

  return (
    <div>
      <div className="t-rec">
        <div className="t-cover">
          <div className="t-cover__carrier">
            <div className="t-cover__filter">
              <div className="t-container">
                <div className="t-col t-col-12">
                  <div
                    style={{ height: "435px" }}
                    className="t-cover__wrapper t-valign_middle"
                  >
                    <div className="t001">
                      <div className="t001__wrapper">
                        <div className="t001__title">FAQ</div>
                        <div className="t001__text">
                          <strong>Часто задаваемые вопросы</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="t585">
          <div
            className="t-container3"
            style={{ zIndex: 100, position: "relative" }}
          >
            <div className="t-col t-col-9 t-prefix_3">
              <div className={`t585__wrapper`}>
                <div
                  className={`t585__header`}
                  onClick={() => setContent1(!content1)}
                  style={{ borderTop: "none" }}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Электромобили</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>

                <div
                  className="t585__content"
                  style={content1 ? { maxHeight: "370px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>
                          Преимущества электромобиля - стоит ли покупать?
                        </strong>
                      </p>
                      <p>
                        Электромобили это выгодно, экологично и практично.
                        Быстрая окупаемость, легкое обслуживание и безопасность.
                      </p>
                      <p>
                        <strong>Как управлять электромобилем?</strong>
                      </p>
                      <p>
                        Управление максимально привычное для водителей обычного
                        авто.
                      </p>
                      <p>
                        <strong>Какой звук у электромобиля при езде?</strong>
                      </p>
                      <p>
                        Бесшумная езда и максимальный комфорт Вам гарантированы.
                      </p>
                      <p>
                        <strong>В чем минусы владения электромобилем?</strong>
                      </p>
                      <p>
                        В длительном путешествии придется делать остановки для
                        подзарядки аккумулятора.Стоит учитывать это в своих
                        планах. Однако, сейчас “EVION” занимается развитием
                        сетей зарядных станций.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-col t-col-9 t-prefix_3">
              <div className={`t585__wrapper}`}>
                <div
                  className="t585__header"
                  onClick={() => setContent2(!content2)}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Батареи</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div
                  className="t585__content"
                  style={content2 ? { maxHeight: "500px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>
                          Какой примерный срок службы батареи электромобиля?
                        </strong>
                      </p>
                      <p>Средний срок службы батареи составляет 10 лет.</p>
                      <p>
                        <strong>Что происходит с батареей зимой ?</strong>
                      </p>
                      <p>
                        При значительном снижении температуры и работы
                        обогревателя, снижается заряд батареи на 25%.
                      </p>
                      <p>
                        <strong>Какие факторы влияют на запас хода?</strong>
                      </p>
                      <p>
                        На запас хода влияют ряд факторов; погодные условия,
                        использование обогревателя и кондиционера, скорость
                        движения.
                      </p>
                      <p>
                        <strong>Возможно ли возгорание батареи?</strong>
                      </p>
                      <p>
                        Электромобили сконструированы и испытаны в соответствии
                        со всеми действующими стандартами безопасности.
                        Возгорание возможно только в случае неправильной
                        эксплуатации или стороннего вмешательства.
                      </p>
                      <p>
                        <strong>Действует ли гарантия на батарею?</strong>
                      </p>
                      <p>
                        Да, гарантия распространяется на батареи новых моделей
                        электромобилей, условия гарантии указываются в
                        гарантийном талоне.
                      </p>
                      <p>
                        <strong>Сколько стоит замена батареи?</strong>
                      </p>
                      <p>
                        В зависимости от модели электромобиля, стоимость полной
                        замены батареи варьируется от 3 до 6 тысяч долларов. Так
                        же Наш сервис предоставляет возможность диагностировать
                        и аменять отдельные частицы батареи, что будет ниже
                        стоимости полной ее замены.
                      </p>
                      <p>
                        <strong>
                          Что делать с батареей после истечения срока службы?
                        </strong>
                      </p>
                      <p>
                        При замене аккумулятора на новый, ответственность за
                        утилизацию старого несет Наша компания.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-col t-col-9 t-prefix_3">
              <div className="t585__wrapper">
                <div
                  className="t585__header"
                  onClick={() => setContent3(!content3)}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Электрозарядки</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div
                  className="t585__content"
                  style={content3 ? { maxHeight: "970px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>
                          Сколько времени занимает зарядка электромобиля?
                        </strong>
                      </p>
                      <p>
                        В зависимости от мощности зарядной станции, время может
                        занимать от 10 минут до 5-6 часов.
                      </p>
                      <p>
                        <strong>На сколько хватает зарядки?</strong>
                      </p>
                      <p>
                        Заряженный Nissan Sylphy может проехать 338 км на одном
                        заряде.
                      </p>
                      <p>
                        <strong>Где я могу зарядить электромобиль?</strong>
                      </p>
                      <p>
                        Дома через обычную розетку, на общественных зарядных
                        станциях по городу. Для удобства пользования
                        общественными ЭЗС карта зарядных станций отображается в
                        приложении от нашей компании.
                      </p>
                      <p>
                        <strong>
                          Что такое быстрая зарядка электромобилей?
                        </strong>
                      </p>
                      <p>
                        Это зарядные станции, которые смогут подзарядить Ваш
                        электромобиль до 80% всего за 10-20 минут.
                      </p>
                      <p>
                        <strong>
                          Где я могу купить зарядку и кто может ее установить?
                        </strong>
                      </p>
                      <p>
                        Наша компания занимается продажей, монтажом и
                        обслуживанием ЭЗС. Для консультации и установки ЭЗС
                        обратитесь по номеру, который указан на нашем сайте.
                      </p>
                      <p>
                        <strong>Сколько стоит зарядит электромобиль?</strong>
                      </p>
                      <p>
                        Стоимость электроэнергии зависит от рынка. Чтобы
                        рассчитать стоимость полной зарядки, просто умножьте
                        тариф за кВт/ч на емкость аккумуляторной батареи. Цена
                        может варьироваться от 30 сом до 200 сом, в зависимости
                        где Вы на данный момент заряжаетесь - дома или на
                        общественных станциях Spark.
                      </p>
                      <p>
                        <strong>Как оплачивать зарядку?</strong>
                      </p>
                      <p>
                        Через мобильное приложение. Наше приложение имеет
                        подвязку к самым популярным платежным кошелькам на рынке
                        Кыргызстана.
                      </p>
                      <p>
                        <strong>
                          Как долго электромобиль заряжается от домашней
                          розетки?
                        </strong>
                      </p>
                      <p>
                        Длительность зарядки Nissan Sylphy до 100%, с
                        аккумулятором емкостью 40 кВт‑ч и зарядом ниже 20%,
                        будет больше 10 часов от домашней зарядки.
                      </p>
                      <p>
                        <strong>
                          Как безопасно зарядить электромобиль от розетки?
                        </strong>
                      </p>
                      <p>
                        Вам понадобится соответствующий кабель: на одной стороне
                        будет обычный штекер‑вилка для бытовых розеток
                        (рекомендуется наличие заземления), на другой — штекер,
                        подходящий к разъему Вашего электромобиля, также для
                        безопасной зарядки у кабеля должен быть защитный блок,
                        который стабилизирует напряжение.
                      </p>
                      <p>
                        <strong>
                          Что если электромобиль разрядился в пути?
                        </strong>
                      </p>
                      <p>
                        Вы можете вызвать службу помощи через мобильное
                        приложение, они помогут зарядить Ваш электромобиль.
                      </p>
                      <p>
                        <strong>
                          Сколько электричества потребляет электромобиль при
                          зарядке?
                        </strong>
                      </p>
                      <p>
                        Для того, чтобы зарядить разряженный «в ноль» Nissan
                        Sylphy, потребуется примерно 40 кВт/ч электроэнергии,
                        этого хватит примерно на 340 км пробега
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-col t-col-9 t-prefix_3">
              <div className="t585__wrapper">
                <div
                  className="t585__header"
                  onClick={() => setContent4(!content4)}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Электростанции</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div
                  className="t585__content"
                  style={content4 ? { maxHeight: "370px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>
                          • Как выбрать подходящую электростанцию для дома?
                        </strong>
                      </p>
                      <p>
                        При выборе электростанции для дома, обратите внимание на
                        ее мощность и совместимость с вашим электромобилем.
                        Также убедитесь, что у вас есть достаточное пространство
                        для установки станции и доступ к электрической сети.
                      </p>
                      <p>
                        <strong>
                          • Как узнать о доступных электростанциях на дорогах?
                        </strong>
                      </p>
                      <p>
                        Используйте приложения или онлайн-сервисы, которые
                        предоставляют информацию о расположении и доступности
                        электростанций на дорогах. Это поможет вам планировать
                        маршруты с учетом возможности зарядки вашего
                        электромобиля.
                      </p>
                      <p>
                        <strong>
                          • Как поддерживать заряд аккумулятора на оптимальном
                          уровне?
                        </strong>
                      </p>
                      <p>
                        Рекомендуется регулярно поддерживать заряд аккумулятора
                        на уровне от 20% до 80%. Это поможет увеличить срок
                        службы аккумулятора и обеспечит оптимальную
                        производительность вашего электромобиля.
                      </p>
                      <p>
                        <strong>
                          • Как оптимизировать зарядку на общественных
                          электростанциях?
                        </strong>
                      </p>
                      <p>
                        Планируйте зарядку заранее, чтобы избежать очередей на
                        общественных электростанциях. Используйте мобильные
                        приложения или онлайн-сервисы, чтобы проверить
                        доступность и занятость станций в режиме реального
                        времени.
                      </p>
                      <p>
                        <strong>• Как управлять затратами на зарядку?</strong>
                      </p>
                      <p>
                        Выбирайте оптимальные тарифные планы для зарядки
                        электромобиля. Некоторые энергетические компании
                        предлагают специальные тарифы для электромобилей,
                        которые могут снизить ваши затраты на зарядку.
                      </p>
                      <p>
                        <strong>• Как повысить эффективность зарядки?</strong>
                      </p>
                      <p>
                        Поставьте на зарядку электромобиль сразу после приезда
                        на станцию, чтобы использовать время зарядки максимально
                        эффективно. Также регулярно проверяйте и обновляйте
                        программное обеспечение вашего электромобиля, чтобы
                        улучшить его энергоэффективность.
                      </p>
                      <p>
                        <strong>
                          • Какие дополнительные услуги предоставляются на
                          электростанциях?
                        </strong>
                      </p>
                      <p>
                        Некоторые электростанции могут предлагать дополнительные
                        услуги, такие как бесплатный Wi-Fi и комфортные зоны
                        ожидания, как наша станция по адресу Анкара 1/16/1. При
                        выборе станции, обратите внимание на эти дополнительные
                        удобства, чтобы сделать зарядку более приятной и
                        удобной.
                      </p>
                      <p>
                        <strong>
                          • Как обеспечить безопасность во время зарядки?
                        </strong>
                      </p>
                      <p>
                        При зарядке на общественных станциях, всегда следите за
                        своим электромобилем и ценными вещами. Используйте
                        только надежные и сертифицированные электростанции,
                        чтобы обеспечить безопасность вашего электромобиля и
                        собственного имущества.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-col t-col-9 t-prefix_3">
              <div className="t585__wrapper">
                <div
                  className="t585__header"
                  onClick={() => setContent5(!content5)}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Безопасность</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                {/* {content5 ? <div className="t585__content"></div> : null} */}
                <div
                  className="t585__content"
                  style={content5 ? { maxHeight: "370px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>• Как выбрать надежный электромобиль?</strong>
                      </p>
                      <p>
                        При выборе электромобиля обратите внимание на его
                        безопасность. Исследуйте рейтинги безопасности,
                        проверьте наличие передовых систем безопасности и
                        активных помощников при вождении. Обратите внимание на
                        репутацию производителя и ознакомьтесь с отзывами других
                        владельцев электромобилей.
                      </p>
                      <p>
                        <strong>
                          • Как обеспечить безопасность при зарядке дома?
                        </strong>
                      </p>
                      <p>
                        Убедитесь, что домашняя зарядная станция установлена
                        профессионально и соответствует нормам безопасности.
                        Регулярно проверяйте кабели и разъемы на наличие
                        повреждений. Никогда не перегружайте электрическую
                        систему вашего дома и следите за инструкциями
                        производителя по безопасности.
                      </p>
                      <p>
                        <strong>
                          •Как долго электромобиль заряжается от домашней
                          розетки?
                        </strong>
                      </p>
                      <p>
                        Длительность зарядки Nissan Sylphy до 100%, с
                        аккумулятором емкостью 40 кВт‑ч и зарядом ниже 20%,
                        будет больше 10 часов от домашней зарядки.
                      </p>
                      <p>
                        <strong>
                          • Как правильно обращаться с литиево-ионными
                          аккумуляторами?
                        </strong>
                      </p>
                      <p>
                        Обратите внимание на рекомендации производителя по
                        обращению с аккумулятором. Избегайте перегрева,
                        перезарядки или полного разряда аккумулятора. При
                        возникновении неисправностей обращайтесь к сервисному
                        центру для безопасного обслуживания и замены
                        аккумулятора.
                      </p>
                      <p>
                        <strong>
                          • Как обезопаситься на дороге с электромобилем?
                        </strong>
                      </p>
                      <p>
                        При вождении электромобиля, будьте внимательны к тишине
                        двигателя и оцените скорость движения других
                        автомобилей. Убедитесь, что пешеходы и другие водители
                        вас замечают. Не забывайте следить за уровнем заряда
                        аккумулятора и планируйте поездки с учетом доступных
                        станций зарядки.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-col t-col-9 t-prefix_3">
              <div className="t585__wrapper">
                <div
                  className="t585__header"
                  onClick={() => setContent6(!content6)}
                >
                  <button className="t585__trigger-button">
                    <span className="t585__title">Советы по эксплуатации</span>
                    <span className="t585__icon-hover">
                      <span className="t585__lines">
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className="t585__circle"></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                {/* {content5 ? <div className="t585__content"></div> : null} */}
                <div
                  className="t585__content"
                  style={content6 ? { maxHeight: "370px" } : { maxHeight: 0 }}
                >
                  <div className="t585__content_wrapper">
                    <div className="t585__content_xs">
                      <p>
                        <strong>
                          • Регулярно проверяйте состояние аккумулятора:
                        </strong>
                      </p>
                      <p>
                        Следите за уровнем заряда аккумулятора и предпримите
                        меры для его поддержания в оптимальном состоянии.
                        Избегайте частых полных разрядов и перезарядок,
                        поскольку это может негативно сказаться на долговечности
                        аккумулятора.
                      </p>
                      <p>
                        <strong>• Заряжайте электромобиль вовремя:</strong>
                      </p>
                      <p>
                        Планируйте зарядку так, чтобы избежать слишком низкого
                        уровня заряда. Рекомендуется поддерживать заряд на
                        уровне от 20% до 80%, чтобы достичь оптимальной
                        производительности и продлить срок службы аккумулятора.
                      </p>
                      <p>
                        <strong>• Обращайтесь к специалистам:</strong>
                      </p>
                      <p>
                        Если у вас возникают вопросы или проблемы с
                        эксплуатацией электромобиля, обратитесь к производителю
                        или авторизованному сервисному центру. Они окажут вам
                        квалифицированную поддержку и помогут решить возникающие
                        проблемы.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="t-container2">
          <div className="t704">
            <div className="t-col t-col-12 t-align-center">
              <div className="t704__wrapper">
                <div className="t704__title">
                  <div className="t704__title_fs1">
                    Не нашли ответа на вопрос? Не беда!
                  </div>
                  <div className="t704__title_text">
                    Оставьте ваш номер и мы будем рады ответить на все ваши
                    вопросы!
                  </div>
                </div>
                <div className="t704__form">
                  {hasData ? (
                    <div className="center">
                      <div className="acceptData">
                        Спасибо вам! Ваш запрос принят. Скоро с вами свяжутся.
                      </div>
                    </div>
                  ) : (
                    <form
                      className="form__mobilePhone"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <input
                        type="text"
                        name="phone"
                        value={formValue.phone}
                        placeholder="Ваш мобильный номер"
                        onChange={(e) => handleChange(e)}
                      />
                      <button>Отправить</button>
                    </form>
                  )}
                </div>
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
                    <ion-icon
                      className="footer_icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>

                  <a href="https://instagram.com/evion_kg?igshid=MzRlODBiNWFlZA==">
                    {" "}
                    <ion-icon
                      className="footer_icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                  <a href="https://youtube.com/@EVIONKG">
                    {" "}
                    <ion-icon
                      className="footer_icon"
                      name="logo-youtube"
                    ></ion-icon>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=996500333351&text&type=phone_number&app_absent=0">
                    {" "}
                    <ion-icon
                      className="footer_icon"
                      name="logo-whatsapp"
                    ></ion-icon>
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
      </div>
    </div>
  );
}

export default Faq;

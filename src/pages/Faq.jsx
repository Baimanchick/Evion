import React, { useState } from 'react';
import { usePhoneContext } from '../contexts/PhonesContext';
import '../css/faq.css';

function Faq() {
  const [ content1, setContent1 ] = useState(false)
  const [ content2, setContent2 ] = useState(false)
  const [ content3, setContent3 ] = useState(false)
  const [ content4, setContent4 ] = useState(false)
  const [ content5, setContent5 ] = useState(false)
  const [ content6, setContent6 ] = useState(false)


  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


  const [ formValue, setFormValue ] = useState({
    phone: ""
  })
  const [ hasData, setHasData ] = useState(false);
  const { addPhones2 } = usePhoneContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!formValue.phone.trim()) {
      alert("Заполните все поля");
      return;
    }

    addPhones2(formValue);

    setHasData(true);

    setFormValue({
      phone: ""
    })

  }

  const handleChange = (e) => {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value
    }
    setFormValue(obj)
  }

  return (
    <div>
      <div className='t-rec'>
        <div className='t-cover'>
          <div className='t-cover__carrier'>
            <div className='t-cover__filter'>
              <div className='t-container'>
                <div className='t-col t-col-12'>
                  <div style={{ height: "435px" }} className='t-cover__wrapper t-valign_middle'>
                    <div className='t001'>
                      <div className='t001__wrapper'> 
                        <div className='t001__title'>FAQ</div>
                        <div className='t001__text'><strong>Часто задаваемые вопросы</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='t585'>
          <div className='t-container3' style={{ zIndex: 100, position: "relative" }}>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className={`t585__wrapper`}>
                <div className={`t585__header`} onClick={() => setContent1(!content1)} style={{ borderTop: "none" }}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Электромобили</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'>
                        <ion-icon name="add-outline"></ion-icon>
                      </span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                
                  <div className='t585__content' style={ content1 ? { maxHeight: "370px" } : { maxHeight: 0 } }>
                    <div className='t585__content_wrapper'>
                      <div className='t585__content_xs'>
                        <p><strong>Преимущества электромобиля - стоит ли покупать?</strong></p>
                        <p>Электромобили это выгодно, экологично и практично. Быстрая окупаемость, легкое обслуживание и безопасность.</p>
                        <p><strong>Как управлять электромобилем?</strong></p>
                        <p>Управление максимально привычное для водителей обычного авто.</p>
                        <p><strong>Какой звук у электромобиля при езде?</strong></p>
                        <p>Бесшумная езда и максимальный комфорт Вам гарантированы.</p>
                        <p><strong>В чем минусы владения электромобилем?</strong></p>
                        <p>В длительном путешествии придется делать остановки для подзарядки аккумулятора.Стоит учитывать это в своих планах. Однако, сейчас “EVION” занимается развитием сетей зарядных станций.</p>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className={`t585__wrapper}`}>
                <div className='t585__header' onClick={() => setContent2(!content2)}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Батареи</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'><ion-icon name="add-outline"></ion-icon></span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div className='t585__content' style={ content2 ? { maxHeight: "500px" } : { maxHeight: 0 } }>
                    <div className='t585__content_wrapper'>
                      <div className='t585__content_xs'>
                        <p><strong>Какой примерный срок службы батареи электромобиля?</strong></p>
                        <p>Средний срок службы батареи составляет 10 лет.</p>
                        <p><strong>Что происходит с батареей зимой ?</strong></p>
                        <p>При значительном снижении температуры и работы обогревателя, снижается заряд батареи на 25%.</p>
                        <p><strong>Какие факторы влияют на запас хода?</strong></p>
                        <p>На запас хода влияют ряд факторов; погодные условия, использование обогревателя и кондиционера, скорость движения.</p>
                        <p><strong>Возможно ли возгорание батареи?</strong></p>
                        <p>Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Возгорание возможно только в случае неправильной эксплуатации или стороннего вмешательства.</p>
                        <p><strong>Действует ли гарантия на батарею?</strong></p>
                        <p>Да, гарантия распространяется на батареи новых моделей электромобилей, условия гарантии указываются в гарантийном талоне.</p>
                        <p><strong>Сколько стоит замена батареи?</strong></p>
                        <p>В зависимости от модели электромобиля, стоимость полной замены батареи варьируется от 3 до 6 тысяч долларов. Так же Наш сервис предоставляет возможность диагностировать и аменять отдельные частицы батареи, что будет ниже стоимости полной ее замены.</p>
                        <p><strong>Что делать с батареей после истечения срока службы?</strong></p>
                        <p>При замене аккумулятора на новый, ответственность за утилизацию старого несет Наша компания.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className='t585__wrapper'>
                <div className='t585__header' onClick={() => setContent3(!content3)}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Электрозарядки</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'><ion-icon name="add-outline"></ion-icon></span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div className='t585__content' style={ content3 ? { maxHeight: "970px" } : { maxHeight: 0 } }>
                    <div className='t585__content_wrapper'>
                      <div className='t585__content_xs'>
                        <p><strong>Сколько времени занимает зарядка электромобиля?</strong></p>
                        <p>В зависимости от мощности зарядной станции, время может занимать от 10 минут до 5-6 часов.</p>
                        <p><strong>На сколько хватает зарядки?</strong></p>
                        <p>Заряженный Nissan Sylphy может проехать 338 км на одном заряде.</p>
                        <p><strong>Где я могу зарядить электромобиль?</strong></p>
                        <p>Дома через обычную розетку, на общественных зарядных станциях по городу. Для удобства пользования общественными ЭЗС карта зарядных станций отображается в приложении от нашей компании.</p>
                        <p><strong>Что такое быстрая зарядка электромобилей?</strong></p>
                        <p>Это зарядные станции, которые смогут подзарядить Ваш электромобиль до 80% всего за 10-20 минут.</p>
                        <p><strong>Где я могу купить зарядку и кто может ее установить?</strong></p>
                        <p>Наша компания занимается продажей, монтажом и обслуживанием ЭЗС. Для консультации и установки ЭЗС обратитесь по номеру, который указан на нашем сайте.</p>
                        <p><strong>Сколько стоит зарядит электромобиль?</strong></p>
                        <p>Стоимость электроэнергии зависит от рынка. Чтобы рассчитать стоимость полной зарядки, просто умножьте тариф за кВт/ч на емкость аккумуляторной батареи. Цена может варьироваться от 30 сом до 200 сом, в зависимости где Вы на данный момент заряжаетесь - дома или на общественных станциях Spark.</p>
                        <p><strong>Как оплачивать зарядку?</strong></p>
                        <p>Через мобильное приложение. Наше приложение имеет подвязку к самым популярным платежным кошелькам на рынке Кыргызстана.</p>
                        <p><strong>Как долго электромобиль заряжается от домашней розетки?</strong></p>
                        <p>Длительность зарядки Nissan Sylphy до 100%, с аккумулятором емкостью 40 кВт‑ч и зарядом ниже 20%, будет больше 10 часов от домашней зарядки.</p>
                        <p><strong>Как безопасно зарядить электромобиль от розетки?</strong></p>
                        <p>Вам понадобится соответствующий кабель: на одной стороне будет обычный штекер‑вилка для бытовых розеток (рекомендуется наличие заземления), на другой — штекер, подходящий к разъему Вашего электромобиля, также для безопасной зарядки у кабеля должен быть защитный блок, который стабилизирует напряжение.</p>
                        <p><strong>Что если электромобиль разрядился в пути?</strong></p>
                        <p>Вы можете вызвать службу помощи через мобильное приложение, они помогут зарядить Ваш электромобиль.</p>
                        <p><strong>Сколько электричества потребляет электромобиль при зарядке?</strong></p>
                        <p>Для того, чтобы зарядить разряженный «в ноль» Nissan Sylphy, потребуется примерно 40 кВт/ч электроэнергии, этого хватит примерно на 340 км пробега</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className='t585__wrapper'>
                <div className='t585__header' onClick={() => setContent4(!content4)}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Электростанции</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'><ion-icon name="add-outline"></ion-icon></span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                <div className='t585__content' style={ content4 ? { maxHeight: "370px" } : { maxHeight: 0 } }>
                    <div className='t585__content_wrapper'>
                      <div className='t585__content_xs'>
                        <p>It depends on the type and length of the project. Our basic room renovations take approximately 3 weeks</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className='t585__wrapper'>
                <div className='t585__header' onClick={() => setContent5(!content5)}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Безопасность</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'><ion-icon name="add-outline"></ion-icon></span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                { content5 ? (
                  <div className='t585__content'></div>
                ) : (null) }
              </div>
            </div>
            <div className='t-col t-col-9 t-prefix_3'>
              <div className='t585__wrapper'>
                <div className='t585__header' onClick={() => setContent6(!content6)}>
                  <button className='t585__trigger-button'>
                    <span className='t585__title'>Советы по эксплуатации</span>
                    <span className='t585__icon-hover'>
                      <span className='t585__lines'><ion-icon name="add-outline"></ion-icon></span>
                      <span className='t585__circle'></span>
                    </span>
                    <span></span>
                  </button>
                </div>
                { content6 ? (
                  <div className='t585__content'></div>
                ) : (null) }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section3'>
        <div className='t-container2'>
          <div className='t704'>
            <div className='t-col t-col-12 t-align-center'>
              <div className='t704__wrapper'>
                <div className='t704__title'>
                  <div className='t704__title_fs1'>
                    Не нашли ответа на вопрос? Не беда!
                  </div>
                  <div className='t704__title_text'>
                    Оставьте ваш номер и мы будем рады ответить на все ваши вопросы!
                  </div>
                </div>
                <div className='t704__form'>
                  { hasData ? (
                    <div className="center">
                      <div className="acceptData">
                        Спасибо вам! Ваш запрос принят. Скоро с вами свяжутся.
                      </div>
                    </div>
                  ) : (
                    <form className='form__mobilePhone' onSubmit={(e) => handleSubmit(e)}>
                      <input type="text" name='phone' value={formValue.phone} placeholder='Ваш мобильный номер' onChange={(e) => handleChange(e)} />
                      <button>Отправить</button>
                    </form>
                  ) }
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
  )
}

export default Faq
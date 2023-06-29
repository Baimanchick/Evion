import React from "react";
import Slider from "react-slick";
import "../css/slider.css";

function Slider4() {
  //   const ArrowLeft = (props) => (
  //     <div {...props} style={{ display: "flex" }} className="nextBlock">
  //       <NextSVG style={{ color: "white" }} className="next" />
  //     </div>
  //   );
  //   const ArrowRight = (props) => (
  //     <div {...props} style={{ display: "flex" }} className="prevBlock">
  //       <PrevSVG style={{ color: "white" }} className="prev" />
  //     </div>
  //   );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  return (
    <div className="containerCA">
      <Slider {...settings}>
        <div className="first-slide">
          <div className="wrapper__left">
            <img
              src="https://thumb.tildacdn.com/tild3163-3230-4938-b833-386331626135/-/format/webp/istockphoto-11660189.jpg"
              alt=""
            />
          </div>
          <div className="wrapper__rightt">
            <h2>Наша Команда</h2>
            <p>
              Изучив зарубежный опыт и получив необходимую информацию от <br />
              профессионалов, поставляющих и обслуживающих оборудование <br />{" "}
              на уже реально работающих зарядных станциях, с уверенностью <br />{" "}
              заявляет, что знают, как строить и эксплуатировать <br />{" "}
              электромобильные зарядные станции. <br /> СФОРМИРОВАНА БРИГАДА ПО
              ЭКСПЛУАТАЦИОННО-ТЕХНИЧЕСКОМУ <br />
              ОБСЛУЖИВАНИЮ ЗАРЯДНЫХ СТАНЦИЙ, ОСНАЩЕННАЯ ЭЛЕКТРОМОБИЛЕМ
            </p>
          </div>
        </div>
        <div className="first-slide">
          <div className="wrapper__left">
            <img
              src="https://www.advantour.com/img/kyrgyzstan/legends/kyrgyzstan-legends-issyk-kul-legend.jpg"
              alt=""
            />
          </div>
          <div className="wrapper__rightt">
            <h2>Развитие связи в Кыргызстане: Установка 11 станций</h2>
            <p>
              В Кыргызстане в настоящее время установлено 11 станций, которые
              играют важную роль в обеспечении связи и доступа к информации для
              местного населения. Одна из этих станций находится в городе ИК
              (Иссык-Куль). Станция в ИК является значимым объектом, поскольку
              она обеспечивает связь и доступ к интернету для местных жителей, а
              также предоставляет возможности для развития телекоммуникационной
              инфраструктуры в регионе. Благодаря этой станции, жители
              Иссык-Куля и близлежащих населенных пунктов имеют доступ к
              современным коммуникационным технологиям и могут быть подключены к
              мировой сети.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slider4;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/slider.css";

import { ReactComponent as PrevSVG } from "../images/chevron-back-outline (1).svg";
import { ReactComponent as NextSVG } from "../images/chevron-forward-outline (1).svg";

function Slider1() {
  const ArrowLeft = (props) => (
    <div {...props} style={{ display: "flex" }} className="nextBlock">
      <NextSVG style={{ color: "white" }} className="next" />
    </div>
  );
  const ArrowRight = (props) => (
    <div {...props} style={{ display: "flex" }} className="prevBlock">
      <PrevSVG style={{ color: "white" }} className="prev" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowRight />,
    nextArrow: <ArrowLeft />,
    fade: true,
  };
  return (
    <div className="containerC">
      <Slider {...settings}>
        <div className="carousel__content">
          <p>
            Месяц назад установили быструю зарядную станцию возле моего
            магазина. Инженер грамотный, сделал все аккуратно.
          </p>
          <div>Тынчтык Дыйканбаев. Компания "ЭлАвто"</div>
          <div
            style={{
              color: "#7a7a7a",
              fontSize: "14px",
              lineHeight: "1.55",
              fontFamily: "tildasans-thin",
              textAlign: "center",
              marginLeft: "35px",
            }}
          >
            Зарядная станция 40 квт
          </div>
        </div>
        <div className="carousel__content">
          <p>
            Недавно установили зарядную станцию на территории офиса. Нравится
            обслуживание. Само оборудование современное, выглядит стильно и
            никак не портит вид парковки. Всем через приложение управлять можно,
            приложение очень удобное и было бы здорово если подключили бы способ
            оплаты через карты.
          </p>
          <div>Анна Полякова</div>
          <div
            style={{
              color: "#7a7a7a",
              fontSize: "14px",
              lineHeight: "1.55",
              fontFamily: "tildasans-thin",
              textAlign: "center",
              marginLeft: "35px",
            }}
          >
            Быстрая зарядная станция 120квт
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slider1;

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
              src="https://thumb.tildacdn.com/tild6534-3361-4664-a163-326266373164/-/format/webp/mattthomason110752_d.jpg"
              alt=""
            />
          </div>
          <div className="wrapper__right">
            <h2>
              More about countless and <br /> breathtaking Canadian Lakes
            </h2>
            <p>
              Most of the area is served by the Stanwood ZIP code 49346, <br />
              although "Canadian Lakes, Michigan", is an acceptable name for
              mail <br /> delivery by the post office. <br /> Small portions of
              the area defined by the CDP are served by other <br /> postal
              delivery areas. A small portion in the southern area of the CDP{" "}
              <br /> along the Little Muskegon River is served by the Lakeview
              ZIP code, <br /> 48850. A small area in the eastern part of the
              CDP is served by the <br /> Mecosta ZIP code, 49332.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slider4;

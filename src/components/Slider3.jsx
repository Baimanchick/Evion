import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/slider.css";

import { ReactComponent as PrevSVG } from "../images/chevron-back-outline (1).svg";
import { ReactComponent as NextSVG } from "../images/chevron-forward-outline (1).svg";

function Slider3() {
//   const ArrowLeft = (props) => (
//       <NextSVG {...props} style={{ color: "rgb(27, 168, 46)", strokeWidth: "1", border: "none" }} className="next2" />
//   );
//   const ArrowRight = (props) => (
//       <PrevSVG {...props} style={{ color: "rgb(27, 168, 46)" }} className="prev2" />
//   );
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return (
    <div>
        <div className="containerC" style={{ position: "relative" }}>
            <Slider {...settings}> 
                <div className="ff__main">
                    <div className="ff">
                        <img src="https://thumb.tildacdn.com/tild6630-3035-4538-a336-303764396463/-/resize/280x/-/format/webp/touch.png" className="logoP" />
                        <img src="https://thumb.tildacdn.com/tild3866-3538-4065-b034-306430626132/-/resize/280x/-/format/webp/image.png" className="logoP" /> 
                        <img src="https://thumb.tildacdn.com/tild6462-6461-4236-a261-313661303032/-/resize/280x/-/format/webp/Haa9fb287732f47e5ab0.jpg" className="logoP" /> 
                        <img src="https://thumb.tildacdn.com/tild6539-3535-4436-a533-396566303062/-/resize/280x/-/format/webp/logo.png" className="logoP" /> 
                    </div>
                </div>
                <div className="ff__main">
                    <div className="ff">
                        <img src="https://thumb.tildacdn.com/tild3930-3135-4236-b630-313930323537/-/resize/280x/-/format/webp/WhatsApp_Image_2022-.jpeg" className="logoP" />
                        <img src="https://thumb.tildacdn.com/tild6535-3735-4632-a264-643763303331/-/resize/280x/-/format/webp/ESG_KG.png" className="logoP" /> 
                        <img src="https://thumb.tildacdn.com/tild3837-3936-4264-b962-333432653338/-/resize/280x/-/format/webp/d1759629-b2b6-46c4-8.png" className="logoP" /> 
                    </div>
                </div>        
            </Slider>
        </div>
    </div>
  );
}

export default Slider3;

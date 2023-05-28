import React from "react";
import "../css/esgAbout.css";

function ESGAbout() {
  return (
    <div>
      <div className="our_company">
        <h1 style={{ fontSize: "68px", marginTop: "75px", color: "white" }}>
          КОМПАНИЯ "ЭВИОН"
        </h1>
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

      <div className="our-wins"></div>
    </div>
  );
}

export default ESGAbout;

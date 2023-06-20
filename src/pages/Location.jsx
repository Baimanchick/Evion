import React from "react";
import "../css/location.css";
import Test from "./Test";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate(-1);
  return (
    <>
      <div className="goBack">
        <ion-icon
          name="arrow-back-outline"
          onClick={() => navigate("/about")}
        ></ion-icon>
      </div>
      <div className="location-container">
        <div className="location-title">Локации</div>
        <p className="location-paragraph">
          Многие электрические станции строятся на окраинах городов или за их{" "}
          <br />
          пределами. Это связано с необходимостью обеспечения безопасности и{" "}
          <br />
          минимизации воздействия на окружающую среду.
          <br />
        </p>
      </div>
      <Test />
    </>
  );
}

export default Location;

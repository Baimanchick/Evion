import React from "react";
import "../css/location.css";
import { useNavigate } from "react-router-dom";
import Leafleat from "./Leafleat";

function Location() {
  const navigate = useNavigate(-1);
  return (
    <div className="container__location">
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
          пределами. Мы стремимся обеспечить доступность и удобство зарядки
          <br />
          электромобилей во всем Кыргызстане путем установки широкой сети
          заправочных станций.
          <br />
        </p>
      </div>

      <Leafleat />
    </div>
  );
}

export default Location;

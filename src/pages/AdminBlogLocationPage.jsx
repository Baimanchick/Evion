import React, { useEffect } from "react";
import { signOut } from "@firebase/auth";
import { auth } from "../fireBase";
import { notify } from "../components/Toastify";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "react-router-dom";
import { useLocationContext } from "../contexts/LocationContext";

function AdminBlogLocationPage() {
  const { location, getLocations, deleteMarker } = useLocationContext();

  const navigate = useNavigate();

  useEffect(() => {
    getLocations();
  }, []);

  const extractedData = location.map((location) => {
    const regex = />(.*?)<\/a>/;
    const match = location.popUp.match(regex);
    return match && match.length > 1 ? match[1] : null;
  });

  return (
    <div>
      <nav className="navbar">
        <div className="navContainer">
          <div className="navbar__items">
            <div className="navbar__logo">
              EVION <span> - админ страница</span>
            </div>
            <div className="navbar__button">
              <button
                onClick={(e) => {
                  signOut(auth)
                    .then(() => {
                      notify("Вы успешно вышли вышли");
                    })
                    .catch((item) => {
                      console.log(item);
                    });
                }}
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="navContainer">
        <div className="detailPageBlock" style={{ marginBottom: "35px" }}>
          <div className="navContainer">
            <div
              className="navbar__return"
              style={{
                cursor: "pointer",
                textAlign: "left",
                marginBottom: "20px",
                width: "150px",
                background: "lightgreen",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                fontFamily: "Tildasans-reg",
              }}
              onClick={() => navigate(-1)}
            >
              Вернутся назад
            </div>
            <div className="detailGreenBlock">
              <div
                className="detailGreenBlock__title"
                style={{ paddingLeft: "30px", marginBottom: "25px" }}
              >
                Метки:{" "}
              </div>
              {location.map((item) => (
                <div className="emails__items">
                  <div className="emails__message__item">
                    <div
                      className="emails__message__info"
                      style={{ marginLeft: "0" }}
                    >
                      <div className="emails__message__info__name">
                        Долгота = {item.geocode.let}
                      </div>
                      <div className="emails__message__info__name">
                        Широта = {item.geocode.long}
                      </div>
                      <div className="emails__message__info__name__special">
                        Название =
                        {extractedData
                          .filter(
                            (data, index) => location[index].id === item.id
                          )
                          .map((name) => name)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="emails__message_buttons"
                    style={{ justifyContent: "normal", gap: "15px" }}
                  >
                    {/* <button className="more__btn">Подробнее</button> */}
                    <button
                      className="span__btn"
                      onClick={() => deleteMarker(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBlogLocationPage;

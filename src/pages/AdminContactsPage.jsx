import React, { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogsContext";
import { signOut } from "@firebase/auth";
import { auth } from "../fireBase";
import { notify } from "../components/Toastify";
import { usePhoneContext } from "../contexts/PhonesContext";
import { Navigate, useNavigate } from "react-router-dom";

function AdminContactsPage() {
  const { getPhones, phones, deletePhone } = usePhoneContext();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    getPhones();
  }, []);
  if (!user) {
    return <Navigate replace to="/auth" />;
  }

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
                Вопросы:{" "}
              </div>
              {phones.map((item) => (
                <div className="emails__items">
                  <div className="emails__message__item">
                    <div
                      className="emails__message__info"
                      style={{ marginLeft: "0" }}
                    >
                      <div className="emails__message__info__name">
                        {item.question}
                      </div>
                      <div className="emails__message__info__request">
                        <strong>Имя: </strong>
                        {item.name}, <strong>Телефон: </strong>
                        {item.phone}, <strong>E-mail: </strong> {item.email}
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
                      onClick={() => deletePhone(item.id)}
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

export default AdminContactsPage;

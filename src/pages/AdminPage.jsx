import React, { useEffect } from "react";
import { useEmailContext } from "../contexts/EmailsContext";
import "../css/admin.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { signOut } from "@firebase/auth";
import { auth } from "../fireBase";
import { notify } from "../components/Toastify";

function AdminPage() {
  const { getEmails, emails, spamEmails, getSpams, spamsDB } =
    useEmailContext();
  const { user } = useAuthContext();
  
  const navigate = useNavigate();

  useEffect(() => {
    getEmails();
  }, []);

  useEffect(() => {
    getSpams();
  }, []);

  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  //baika132213@gmail.com

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
                      notify("Вы успешно вышли ");
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
      <div className="section1">
        <div className="navContainer">
          <div className="section1__items">
            <div className="userBlock">
              <img
                src={
                  user?.photoURL
                    ? `${user?.photoURL}`
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                className="user"
              />
              <div className="user__username">{user?.email}</div>
            </div>
            <div className="manage__blogs">
              <div className="manage__blogs__title">Управление блога:</div>
              <div className="manage__blogs__btns">
                <button onClick={() => navigate("/admin/blogs/add")}>Добавить блог</button>
                <button onClick={() => navigate("/admin/blogs")}>Посмотреть все блоги</button>
              </div>
            </div>
            <div className="emails__message__block">
              <h1>Сообщение</h1>
              <div className="emails__message__items">
                {emails.map((item) => (
                  <div className="emails__items" key={item.id}>
                    <div className="emails__message__item">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className="clientIMG"
                      />
                      <div className="emails__message__info">
                        <div className="emails__message__info__name">
                          {item.name}
                        </div>
                        <div className="emails__message__info__request">
                          {item.kilowatt} квт.
                        </div>
                      </div>
                    </div>
                    <div className="emails__message_buttons">
                      <button className="more__btn" onClick={() => navigate(`/detail/${item.id}`)}>Подробнее</button>
                      <button
                        className="span__btn"
                        onClick={() => spamEmails(item.id)}
                      >
                        Спам
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

import React, { useEffect, useState } from "react";
import { useEmailContext } from "../contexts/EmailsContext";
import "../css/admin.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { signOut } from "@firebase/auth";
import { auth } from "../fireBase";
import { notify } from "../components/Toastify";

function MessagesDetail() {
  const { getEmails, emails, spamEmails, getSpams, spamsDB, getOneEmail, oneEmail } = useEmailContext();
  const { user } = useAuthContext();

  const [ oneEmailValue, setOneEmailValue ] = useState();
  
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getOneEmail(id)
  }, [])

  useEffect(() => {
    if(oneEmail) {
        setOneEmailValue(oneEmail);
    }
  }, [oneEmail])

//   console.log(oneEmail)

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
      { oneEmail ? (
        <div className="detailPageBlock">
            <div className="navContainer">
                <div className="detailGreenBlock">
                    <div className="detailGreenBlock__title">Сообщение: </div>
                    <div className="detailGreenBlock__information">
                        <h1>Имя: <span>{ oneEmail?.name }</span></h1>
                        <div className="email">Email: <span>{ oneEmail?.user__email }</span></div>
                        <div className="kilowatt_info">Объем(квт): <span>{ oneEmail?.kilowatt } квт.</span></div>
                        <div className="address_info">Адрес: <span>{ oneEmail?.address }</span></div>
                    </div>
                    <div className="delete__message" onClick={() => {
                        spamEmails(oneEmail?.id)
                        navigate("/admin")
                        }}>Удалить</div>
                </div>
            </div>
        </div>
      ) : (null) }
    </div>
  );
}

export default MessagesDetail;

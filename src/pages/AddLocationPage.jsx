import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { notify } from "../components/Toastify";
import { auth } from "../fireBase";
import { useNavigate } from "react-router-dom";
import { useLocationContext } from "../contexts/LocationContext";
import { useAuthContext } from "../contexts/AuthContext";

function AddLocationPage() {
  const navigate = useNavigate();
  const { addMarker } = useLocationContext();

  const [letValue, setLetValue] = useState("");
  const [longValue, setLongValue] = useState("");
  const [popUpValue, setPopUpValue] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "let") {
      setLetValue(e.target.value);
    } else if (e.target.name === "long") {
      setLongValue(e.target.value);
    } else if (e.target.name === "popUp") {
      setPopUpValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = {
      geocode: {
        let: letValue,
        long: longValue,
      },
      popUp: popUpValue,
    };
    try {
      addMarker(location);
      setLetValue("");
      setLongValue("");
      setPopUpValue("");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useAuthContext();

  if (!user) {
    navigate("/auth");
  }

  return (
    <>
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

      <form className="location__inputs" onSubmit={handleSubmit}>
        <div>Долгота</div>
        <input
          placeholder="Enter your text..."
          className="input__location"
          name="let"
          type="text"
          value={letValue}
          onChange={handleChange}
        />
        <div>Широта</div>
        <input
          placeholder="Enter your text..."
          className="input__location"
          name="long"
          type="text"
          value={longValue}
          onChange={handleChange}
        />
        <div>Ссылка</div>
        <input
          placeholder="Enter your text..."
          className="input__location"
          name="popUp"
          type="text"
          value={popUpValue}
          onChange={handleChange}
        />

        <button class="btn-location" type="submit">
          <strong>SUBMIT</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </form>
    </>
  );
}

export default AddLocationPage;

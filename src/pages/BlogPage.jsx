import React, { useEffect, useState } from "react";
import { useBlogContext } from "../contexts/BlogsContext";
import "../css/blog.css";
import { Link } from "react-router-dom";

function BlogPage() {
  const [loadedBlogs, setLoadedBlogs] = useState(6);
  const { getBlogs, blogs } = useBlogContext();
  const [scrollUp, setScrollUp] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filterBlogs = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const loadMoreBlogs = () => {
    // Увеличиваем количество загруженных блогов
    setLoadedBlogs((prevLoadedBlogs) => prevLoadedBlogs + 6); // добавляем по 3 блога при каждом клике
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="t-main-content">
      <div className="t897">
        <div className="t-section__container">
          <div className="t-col t-col-12">
            <div className="t-section__wrapper">
              <div className="t-section__title">Блог</div>
              <div className="t-section__text">
                <p>
                  Рассказываем об электромобилях, зарядной инфраструктуре и
                  возобновляемой энергетике
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="t898">
        <div className="t-section__container">
          <div className="t989__btn">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => filterBlogs("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "Новости" ? "active" : ""}
              onClick={() => filterBlogs("Новости")}
            >
              Новости
            </button>
            <button
              className={selectedCategory === "Подсказки" ? "active" : ""}
              onClick={() => filterBlogs("Подсказки")}
            >
              Подсказки
            </button>
          </div>
        </div>
      </div>
      <div className="t899">
        {scrollUp ? (
          <div className="scrollUpBTN" onClick={scrollToTop}>
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>
        ) : null}
        <div className="t-section__container">
          <div className="t899__items">
            {filteredBlogs.slice(0, loadedBlogs).map((item) => (
              <div className="t899__item">
                <a href={`/details/${item.id}`}>
                  <img src={`${item.img}`} />
                </a>
                <div className="t899__item__title">{item.title}</div>
                <div className="t899__item__text">{item.text}</div>
              </div>
            ))}
          </div>
          {loadedBlogs < blogs.length && (
            <div className="d-f">
              <button
                className="load-more-button"
                onClick={() => {
                  loadMoreBlogs();
                  setScrollUp(true);
                }}
              >
                Загрузить ещё
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="footer__end">
        <div className="containerC">
          <div className="all">
            <div className="footer__info__item_1">
              <div className="footer_logo">
                {" "}
                <a href="#" component={Link} to="/">
                  EVION
                </a>
              </div>
              <div className="footer__info__social">
                <a href="https://www.facebook.com/people/Evion-KG/pfbid0yLWBFJELw9xAZhuXhvftWacprnuNeJ7cbYwS6HHJKUpH6G4jcimTkR7FB9D2cQLwl/?mibextid=ZbWKwL">
                  {" "}
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="https://instagram.com/evion_kg?igshid=MzRlODBiNWFlZA==">
                  {" "}
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://youtube.com/@EVIONKG">
                  {" "}
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=996500333351&text&type=phone_number&app_absent=0">
                  {" "}
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>

              <div className="footer__info__y">
                © 2023 EVION
                <a href="/prvacy">политика конфиденциальности</a>
              </div>
            </div>
            <div className="footer_info_item_2">
              <ul className="footer_links_1">
                <div className="about_evion">Об EVION</div>
                <li>кто мы</li>
                <li>наша миссия</li>
                <li>проекты</li>
                <li>партнеры</li>
              </ul>
            </div>
            <div className="footer_info_item_3">
              <ul className="footer_links_2">
                <div className="our_services">Наши услуги</div>
                <li>Установка ЭЗС</li>
                <li>TOUCH App</li>
                <li>Зарядочные станции</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

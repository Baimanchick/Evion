import React, { useEffect } from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import { useBlogContext } from '../contexts/BlogsContext';
import { signOut } from "@firebase/auth";
import { auth } from "../fireBase";
import { notify } from "../components/Toastify";    

import ReactHtmlParser from 'react-html-parser';

function AdminBlogPage() {
    const { getBlogs, blogs, deleteBlog, addBlog } = useBlogContext();
    const { user } = useAuthContext();


    useEffect(() => {
        getBlogs()
    }, [])

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
        <div className='navContainer'>
            <div className="detailPageBlock" style={{ marginBottom: "35px" }}>
                <div className="navContainer">
                    <div className="detailGreenBlock">
                        <div className="detailGreenBlock__title" style={{ paddingLeft: "30px", marginBottom: "25px" }}>Блог: </div>
                        { blogs.map((item) => (
                            <div className="emails__items">
                            <div className="emails__message__item">
                                <div className="emails__message__info" style={{ marginLeft: "0" }}>
                                    <div className="emails__message__info__name">
                                        { item.title }
                                    </div>
                                    <div className="emails__message__info__request">
                                      {item.text}
                                    </div>
                                </div>
                            </div>
                            <div className="emails__message_buttons" style={{ justifyContent: "normal", gap: "15px" }}>
                                {/* <button className="more__btn">Подробнее</button> */}
                                <button
                                    className="span__btn" onClick={() => deleteBlog(item.id)}>
                                    Удалить
                                </button>
                            </div>
                        </div> 
                        )) }             
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminBlogPage
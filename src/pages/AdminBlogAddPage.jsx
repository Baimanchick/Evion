import { signOut } from 'firebase/auth';
import React from 'react'
import { notify } from '../components/Toastify';
import { useAuthContext } from '../contexts/AuthContext';
import { auth } from '../fireBase';

function AdminBlogAddPage() {

    const { user } = useAuthContext()

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
        <div className='navContainer' style={{ marginTop: "100px" }}>
            <div className='detailGreenBlock'>
                <div className='form__title'>Добавление блога:</div>
                <form>
                    <input type="text" placeholder="Заголовок" />
                    <input type="text" placeholder="Заголовок" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminBlogAddPage
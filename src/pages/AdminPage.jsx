import React, { useEffect } from 'react'
import { useEmailContext } from '../contexts/EmailsContext';
import '../css/admin.css'

function AdminPage() {
  const { getEmails, emails, spamEmails, getSpams, spamsDB } = useEmailContext();

  useEffect(() => {
    getEmails();
  }, [])

  useEffect(() => {
    getSpams();
  }, [])

  console.log(spamsDB)

  //baika132213@gmail.com

  return (
    <div>
      <nav className='navbar'>
        <div className='navContainer'>
          <div className='navbar__items'>
            <div className='navbar__logo'>EVION <span> - админ страница</span></div>
            <div className='navbar__button'>
              <button>Войти</button>
            </div>
          </div>
        </div>
      </nav>
      <div className='section1'>
        <div className='navContainer'>
          <div className='section1__items'>
            <div className='userBlock'>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='user' />
              <div className='user__username'>Admin</div>
            </div>
            <div className='emails__message__block'>
              <h1>Сообщение</h1>
              <div className='emails__message__items'>
                
                { emails.map((item) => (
                  <div className='emails__items' key={item.id}>
                    <div className='emails__message__item'>
                      <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' className='clientIMG' />
                      <div className='emails__message__info'>
                        <div className='emails__message__info__name'>{ item.name }</div>
                        <div className='emails__message__info__request'>{ item.kilowatt } квт.</div>
                      </div>
                    </div>
                    <div className='emails__message_buttons'>
                        <button className='more__btn'>Подробнее</button>
                        <button className='span__btn' onClick={() => spamEmails(item.id)}>Спам</button>
                    </div>
                  </div>
                )) }
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
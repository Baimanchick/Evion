import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { notify } from '../components/Toastify';
import { useAuthContext } from '../contexts/AuthContext';
import { auth } from '../fireBase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useBlogContext } from '../contexts/BlogsContext';


function AdminBlogAddPage() {
    const [value, setValue] = useState('');
    const { user } = useAuthContext();
    const { addBlog } = useBlogContext();
    
    const [ formValue, setFormValue ] = useState({
        title: "",
        img: "",
        text: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            addBlog(formValue);
            setFormValue({
                title: "",
                img: "",
                text: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const obj = {
            ...formValue,
            [e.target.name]: e.target.value,
        }
        setFormValue(obj)
    }

    const handleQuillChange = (value) => {
        setValue(value);
        handleChange({ target: { name: 'text', value } });
      };      
    
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
                <form onSubmit={(e) => handleSubmit(e)} className="form__add__blog">
                    <input type="text" onChange={(e) => handleChange(e)} name="title" placeholder="Заголовок блога" />
                    <input type="text" onChange={(e) => handleChange(e)} name="img" placeholder="URL картинки" />
                    <ReactQuill style={{ fontFamily: "tildasans-reg" }} theme="snow" value={value} onChange={handleQuillChange} />
                    <button>Сохранить</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminBlogAddPage
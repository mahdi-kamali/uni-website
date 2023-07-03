import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [onIndex, setOnIndex] = useState();
  const [sideBar, setSideBar] = useState(false)
  const navigator = useNavigate()


  function handleOnclick(path, index) {
    setSideBar(false)
    navigator(path)
    setOnIndex(index)
  }





  return (
    <header>
      <div className="left">
        <button className="user">
          <span>ورود </span>
          <Icon icon="carbon:user-filled" />
        </button>
      </div>
      <div className="mid">
        <div className="name">دانشکده فنی و حرفه ای دختران قم</div>
      </div>
      <div className="right">
        <div className="logo">
          <img src={require("../../images/logo.png")} alt="" />
        </div>
        <div className="menu">
          <button onClick={() => { setSideBar(!sideBar) }}>
            <Icon icon="ep:menu" />
          </button>
        </div>
      </div>
      <nav className={`bottom ${sideBar ? "open" : ""}`}>
        <ul>
          <li onClick={() => handleOnclick("/auth", 9)} className={onIndex == 9 ? "selected" : ""}>حساب کاربری</li>
          <li onClick={() => handleOnclick("/", 0)} className={onIndex == 0 ? "selected" : ""}>صفحه ی اصلی</li>
          <li onClick={() => handleOnclick("/", 1)} className={onIndex == 1 ? "selected" : ""}>آموزشکده دختران</li>
          <li onClick={() => handleOnclick("/", 2)} className={onIndex == 2 ? "selected" : ""}>رشته ها</li>
          <li onClick={() => handleOnclick("/", 3)} className={onIndex == 3 ? "selected" : ""}>اساتید</li>
          <li onClick={() => handleOnclick("/employes", 4)} className={onIndex == 4 ? "selected" : ""}>کارمندان</li>
          <li onClick={() => handleOnclick("/files", 5)} className={onIndex == 5 ? "selected" : ""}>دریافت فایل</li>
          <li onClick={() => handleOnclick("/gallery", 6)} className={onIndex == 6 ? "selected" : ""}>گالری</li>
          <li onClick={() => handleOnclick("/", 7)} className={onIndex == 7 ? "selected" : ""}>ارتباط با ما</li>
          <li onClick={() => handleOnclick("/about-us", 8)} className={onIndex == 8 ? "selected" : ""}>درباره ی ما</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
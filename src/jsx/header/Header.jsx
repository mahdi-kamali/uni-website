import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logOut } from '../features/user';

const Header = ({ panelState, setPanelState }) => {

  const [onIndex, setOnIndex] = useState();
  const [sideBar, setSideBar] = useState(false)
  const navigator = useNavigate()
  const dispatcher = useDispatch()

  const user = useSelector(state => state.user)



  function handleOnclick(path, index) {
    setSideBar(false)
    navigator(path)
    setOnIndex(index)
  }



  function getUserFullName() {
    return user?.value?.user ? user.value.user.name : "ورود کاربری"
  }


  const logOutClick = () => {
    dispatcher(logOut())
  }




  return (
    <header>

      <button className='panel-button' onClick={() => { setPanelState(!panelState) }}>
        <span>پنل مدریتی</span>
        <Icon icon="fluent:panel-left-32-filled" />
      </button>
      <div className="left">
        <button
          className="user"
          onClick={() => handleOnclick("/auth", 9)}>
          <span>
            {getUserFullName()}
          </span>
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
          <li onClick={() => handleOnclick("/", 3)} className={onIndex == 3 ? "selected" : ""}>اساتید</li>
          <li onClick={() => handleOnclick("/employes", 4)} className={onIndex == 4 ? "selected" : ""}>کارمندان</li>
          <li onClick={() => handleOnclick("/files", 5)} className={onIndex == 5 ? "selected" : ""}>دریافت فایل</li>
          <li onClick={() => handleOnclick("/gallery", 6)} className={onIndex == 6 ? "selected" : ""}>گالری</li>
          <li onClick={() => handleOnclick("/", 7)} className={onIndex == 7 ? "selected" : ""}>ارتباط با ما</li>
          <li onClick={() => handleOnclick("/about-us", 8)} className={onIndex == 8 ? "selected" : ""}>درباره ی ما</li>
          {
            user?.value?.user ? <li
              className='log-out selected'
              onClick={() => logOutClick()}>خروج از حساب</li> : ""
          }
        </ul>
      </nav>

    </header >
  )
}

export default Header
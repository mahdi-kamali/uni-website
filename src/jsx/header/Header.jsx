import { Icon } from '@iconify/react'
import React from 'react'

const Header = () => {
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
      </div>
      <nav className="bottom">
        <ul>
          <li>آموزشکده دختران</li>
          <li>رشته ها</li>
          <li>اساتید</li>
          <li>کارمندان</li>
          <li className='selected'>دریافت فایل</li>
          <li>گالری</li>
          <li>ارتباط با ما</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
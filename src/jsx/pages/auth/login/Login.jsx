import { Icon } from "@iconify/react";
import Fieldset from "../componetns/Fieldset";
import React, { Component } from 'react';
import { USER_LOGIN_URL } from "../../../../consts/API";
import axios from "axios"
import { useDispatch } from "react-redux";
import { login } from "../../../features/user";





const Login = ({ setAuthMode }) => {

  const dispatcher = useDispatch()

  const handleChangeAuthMode = () => {
    setAuthMode(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)


    let hasErrors = false;

    formData.forEach((value, key) => {
      const temp = value.replace(/\s/g, "");
      if (temp.length === 0) {
        hasErrors = true;
      }
    })

    if (hasErrors) {
      alert("لطفا تمام فیلدها را پر کنید")
      return;
    }


    dispatcher(login(formData))

  }


  return (
    <form className="login-page" action="#" onSubmit={handleFormSubmit}>
      <div className="form-inputs">
        <Fieldset
          legend={{ title: "ایمیل", svg: <Icon icon="ic:round-alternate-email" /> }}
          inputName={"email"}
          inputType={"email"}
        />
        <Fieldset
          legend={{ title: "پسوورد", svg: <Icon icon="mdi:password" /> }}
          inputName={"password"}
          inputType={"password"}
        />
      </div>

      <div className="form-buttons">
        <small onClick={handleChangeAuthMode}>
          حساب کاربری ندارید ؟ کلیک کنید
        </small>
        <button className="submit-button">
          <span>ورود</span>
          <Icon icon="clarity:login-solid" />
        </button>

      </div>

    </form>
  )
}

export default Login
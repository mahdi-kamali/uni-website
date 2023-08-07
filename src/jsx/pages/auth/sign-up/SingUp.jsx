import { Icon } from "@iconify/react";
import Fieldset from "../componetns/Fieldset";
import { USER_SIGNUP_URL } from "../../../../consts/API";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../../features/user";

const SingUp = ({ setAuthMode }) => {

  const dispatcher = useDispatch()

  const handleChangeAuthMode = () => {
    setAuthMode(true)
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



    axios({
      method: "post",
      url: USER_SIGNUP_URL,
      data: formData
    })
      .then(response => {
        login(formData)
      })
      .catch(error => {
        console.log(error);
      })



    dispatcher(login(formData))




  }

  return (
    <form className="signup-page" action="#"
      onSubmit={handleFormSubmit}>
      <div className="form-inputs">
        <Fieldset
          legend={{ title: "نام و نام خانوادگی", svg: <Icon icon="clarity:user-solid" /> }}
          inputName={"name"}
          inputType={"text"}
        />
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
        <Fieldset
          legend={{ title: "تاییدیه پسوورد", svg: <Icon icon="mdi:password" /> }}
          inputName={"password_confirmation"}
          inputType={"password"}
        />
      </div>

      <div className="form-buttons">
        <small onClick={handleChangeAuthMode}>حساب کاربری دارید ؟ کلیک کنید</small>
        <button className="submit-button">
          <span>ثبت نام</span>
          <Icon icon="mdi:register" />
        </button>
      </div>

    </form>
  )
}

export default SingUp
import { Icon } from "@iconify/react"
import { ADMIN_CREATE_GALLERY_CATEGORY, BASE_URL } from "../../../../consts/API"
import axios from "axios"
import { useSelector } from "react-redux"
import Fielset from "../components/Fielset"
const CreateGalleryCategory = () => {

  const user = useSelector(state => state.user.value)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    axios({
      method: "post",
      url: ADMIN_CREATE_GALLERY_CATEGORY,
      data: formData,
      headers: {
        "Authorization": user.token
      }

    })
      .then(response => {

        if (response.status === 201) {
          alert("دسته بندی با موفقیت اضافه شد !")
        }
      })
  }

  return (
    <div className='dashboard-gallery-category-create'>
      <div className="create-employe-header">
        <h1>
          ایجاد دسته جدید گالری
        </h1>

      </div>
      <form className="create-employe-body" onSubmit={handleFormSubmit}>
        <Fielset
          title={" نام دسته بندی"}
          svg={<Icon icon="bxs:category" />}
          inputType={"text"}
          inputName={"title"}
        />
        <Fielset
          title={" عکس"}
          svg={<Icon icon="bxs:category" />}
          inputType={"file"}
          inputName={"image"}
        />
        <div className="form-buttons">
          <button className='submit'>
            <span>ایجاد کردن</span>
            <Icon icon="formkit:submit" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateGalleryCategory
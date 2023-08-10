import { Icon } from "@iconify/react"
import Fielset from "../components/Fielset"
import { ADMIN_CREATE_FILES } from "../../../../consts/API";
import { useSelector } from "react-redux";
import axios from "axios"
const CreateFile = () => {

    const user = useSelector(state => state.user.value)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        axios({
            method: "post",
            url: ADMIN_CREATE_FILES,
            data: formData,
            headers: {
                "Authorization": user.token
            }

        })
            .then(response => {

                if (response.status === 201) {
                    alert("فایل با موفقیت اضافه شد !")
                }
            })
    }


    return (
        <div className="dashboard-file-create">
            <div className="create-employe-header">
                <h1>
                    ایجاد دسته جدید گالری
                </h1>

            </div>
            <form className="create-employe-body" onSubmit={handleFormSubmit}>
                <Fielset
                    title={" نام فایل"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"text"}
                    inputName={"title"}
                />
                <Fielset
                    title={" توضیحات"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"text"}
                    inputName={"description"}
                />
                <Fielset
                    title={" فایل"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"file"}
                    inputName={"file"}
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

export default CreateFile
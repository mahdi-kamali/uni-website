import React from 'react'
import Fielset from '../components/Fielset'
import { Icon } from '@iconify/react'
import axios from "axios"
import { useSelector } from 'react-redux'
import { ADMIN_CREATE_EMPLOYE, ADMIN_GET_EMPLOYES_CATEGORIES } from '../../../../consts/API'
import { useState } from 'react'
import { useEffect } from 'react'
const CreateEmploye = () => {



    const user = useSelector(state => state.user.value)
    const [categories, setCategories] = useState([])



    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_EMPLOYES_CATEGORIES,
            headers: {
                "Authorization": user.token
            }
        }).then(response => {
            setCategories(response.data.data)
        })
    }, [])

    




    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        axios({
            method: "post",
            data: formData,
            url: ADMIN_CREATE_EMPLOYE,
            headers: {
                "Authorization": user.token,
                "Accept": "application/json"
            }
        })
            .then(response => {
                console.log(response);
                alert("کاربر اضافه شد !")
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div className='dashboard-create-employe' onSubmit={handleFormSubmit}>
            <form action="#">
                <div className="form-fields">
                    <Fielset
                        title={"نام و نام خانوداگی"}
                        svg={<Icon icon="fe:user" />}
                        inputType={"text"}
                        inputName={"name"}
                    />
                    <Fielset
                        title={"دسته بندی"}
                        svg={<Icon icon="bxs:category" />}
                        inputType={"text"}
                        inputName={"staff_cat"}
                        component={
                            <select name="staff_cat" >
                                {categories.map((cat, index) => {
                                    return <option value={cat.id}>
                                        {cat.attributes.name}
                                    </option>
                                })}
                            </select>
                        }
                    />

                    <Fielset
                        title={"نوع وظیفه"}
                        svg={<Icon icon="eos-icons:cluster-role" />}
                        inputType={"text"}
                        inputName={"role"}
                    />
                    <Fielset
                        title={"شماره داخلی"}
                        svg={<Icon icon="ep:phone-filled" />}
                        inputType={"number"}
                        inputName={"mobile"}
                    />
                    <Fielset
                        title={"شماره همراه"}
                        svg={<Icon icon="ant-design:mobile-filled" />}
                        inputType={"number"}
                        inputName={"phone"}
                    />
                    <Fielset
                        title={"عکس پروفایل"}
                        svg={<Icon icon="bxs:category" />}
                        inputType={"file"}
                        inputName={"image"}
                    />
                </div>
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

export default CreateEmploye
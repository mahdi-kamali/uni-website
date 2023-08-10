import React from 'react'
import Fielset from '../components/Fielset'
import { Icon } from '@iconify/react'

import axios from "axios"
import { ADMIN_CREATE_GALLERY_PHOTO, ADMIN_GET_GALLERY_CATEGORY } from '../../../../consts/API'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const CreateGalleryPhoto = () => {


    const user = useSelector(state => state.user.value)


    const [categories, setCategories] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_GALLERY_CATEGORY,
            headers: {
                "Authorization": user.token
            }
        })
            .then(response => {
                setCategories(response.data.data)
            }).catch(error => {

            })


    }, [refresh])




    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        axios({
            method: "post",
            url: ADMIN_CREATE_GALLERY_PHOTO,
            data: formData,
            headers: {
                "Authorization": user.token
            }

        })
            .then(response => {

                if (response.status === 201) {
                    alert("عکس با موفقیت اضافه شد !")
                }
            })
    }


    return (
        <div className='dashboard-gallery-photo-create'>
            <div className="create-employe-header">
                <h1>
                    ایجاد عکس جدید
                </h1>

            </div>
            <form className="create-employe-body" onSubmit={handleFormSubmit}>
                <Fielset
                    title={" نام عکس"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"text"}
                    inputName={"title"}
                />

                <Fielset
                    title={" دسته بندی"}
                    svg={<Icon icon="bxs:category" />}
                    component={
                        <select name="cat_id">
                            {categories.map((item, index) => {
                                return <option value={item.id}>
                                    {item.attributes.title}
                                </option>
                            })}
                        </select>
                    }
                    inputName={"cat_id"}
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

export default CreateGalleryPhoto
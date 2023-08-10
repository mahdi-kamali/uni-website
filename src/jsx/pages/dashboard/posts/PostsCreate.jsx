import React from 'react'
import Fielset from '../components/Fielset';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import axios from "axios"
import { ADMIN_CREATE_POST, ADMIN_GET_POSTS_CATEGORIES } from '../../../../consts/API';
import { useState } from 'react';
import { useEffect } from 'react';
const PostsCreate = () => {
    const user = useSelector(state => state.user.value)
    const [categories, setCategories] = useState([])
    const [refresh, setRefresh] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        axios({
            method: "post",
            url: ADMIN_CREATE_POST,
            data: formData,
            headers: {
                "Authorization": user.token
            }

        })
            .then(response => {
                if (response.status === 201) {
                    alert("پست با موفقیت اضافه شد !")
                }
            })
    }



    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_POSTS_CATEGORIES,
            headers: {
                "Authorization": user.token
            }
        }).then(response => {
            setCategories(response.data.data)
        })
            .catch(err => {
            })
    }, [refresh])





    return (
        <div className='dashboard-create-post'>
            <div className="create-employe-header">
                <h1>
                    ایجاد پست جدید
                </h1>

            </div>
            <form className="create-employe-body" onSubmit={handleFormSubmit}>
                <Fielset
                    title={"عنوان پست"}
                    svg={<Icon icon="ic:sharp-title" />}
                    inputType={"text"}
                    inputName={"title"}
                />
                <Fielset
                    title={" عکس"}
                    svg={<Icon icon="clarity:image-solid" />}
                    inputType={"file"}
                    inputName={"image"}
                />
                  <Fielset
                    title={" توضیحات"}
                    svg={<Icon icon="ic:sharp-title" />}
                    inputType={"text"}
                    inputName={"description"}
                />
                <Fielset
                    title={"دسته بندی"}
                    svg={<Icon icon="bxs:category" />}
                    component={
                        <select name='cat_id'>
                            {
                                categories.map((cat, index) => {
                                    return <option
                                        value={cat.id}>
                                        {cat.attributes.title}
                                    </option>
                                })
                            }
                        </select>
                    }
                    inputName={"cat_id"}
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

export default PostsCreate
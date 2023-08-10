import React from 'react'
import { useSelector } from 'react-redux';

import axios from "axios"
import { ADMIN_CREATE_POSTS_CATEGORIES } from '../../../../consts/API';
import Fielset from '../components/Fielset';
import { Icon } from '@iconify/react';

const CreatePostsCategory = () => {
    const user = useSelector(state => state.user.value)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        axios({
            method: "post",
            url: ADMIN_CREATE_POSTS_CATEGORIES,
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
        <div className='dashboard-create-posts-category'>
            <div className="create-employe-header">
                <h1>
                    ایجاد دسته جدید پست ها
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
                <Fielset
                    title={"توضیحات"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"text"}
                    inputName={"description"}
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

export default CreatePostsCategory
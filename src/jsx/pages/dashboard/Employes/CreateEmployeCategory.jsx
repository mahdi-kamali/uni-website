import { Icon } from '@iconify/react';
import axios from "axios"
import React from 'react'
import { ADMIN_CREATE_EMPLOYES_CATEGORIES } from '../../../../consts/API';
import { useSelector } from 'react-redux';
import Fielset from '../components/Fielset';

const CreateEmployeCategory = () => {



    const user = useSelector(state => state.user.value)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        axios({
            method: "post",
            url: ADMIN_CREATE_EMPLOYES_CATEGORIES,
            data: formData,
            headers: {
                "Authorization": user.token
            }

        })
            .then(response => {
             
                if (response.status === 201) {
                    alert("دسته بندی با موفقیت اضافه شد !")
                }
            }).catch(error => {
            })
    }


    return (
        <div className='dashboard-create-employe-category'>
            <div className="create-employe-header">
                <h1>
                    ایجاد دسته جدید پرسنل
                </h1>

            </div>
            <form className="create-employe-body"
                onSubmit={handleFormSubmit}>
                <Fielset
                    title={" نام دسته بندی"}
                    svg={<Icon icon="bxs:category" />}
                    inputType={"text"}
                    inputName={"name"}
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

export default CreateEmployeCategory
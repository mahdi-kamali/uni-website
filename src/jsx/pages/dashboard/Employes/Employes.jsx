import React from 'react'
import axios from "axios"
import { ADMIN_DELETE_EMPLOYES, ADMIN_DELETE_EMPLOYES_CATEGORIES, ADMIN_GET_EMPLOYES, ADMIN_GET_EMPLOYES_CATEGORIES, ADMIN_UPDATE_EMPLOYES_CATEGORIES, BASE_URL } from '../../../../consts/API'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'
const Employes = () => {

    const user = useSelector(state => state.user.value)

    const [categories, setCategories] = useState([])


    const [refresh, setRefresh] = useState(false)

    const [employes, setEmployes] = useState([])

    const [finalData, setFinalData] = useState([])


    const [selectedCategory, setSelectedCategry] = useState(categories[0])


    const [visibleItems, setVisible] = useState([])





    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_EMPLOYES,
            headers: { "Authorization": user.token }
        }).then(response => {
            const data = response.data.data
            setEmployes(data)
        })
    }, [refresh])


    useEffect(() => {
        axios({
            method: "get",
            baseURL: ADMIN_GET_EMPLOYES_CATEGORIES,
            headers: {
                "Authorization": user.token
            }
        }).then(response => {
            const data = response.data.data
            setCategories(data)
            setSelectedCategry(data[0])
        })
    }, [employes])


    useEffect(() => {
        const currentSelectedCategoryName = selectedCategory?.attributes?.name
        const res = employes.filter(item => item.attributes?.staffCategory?.name == currentSelectedCategoryName)
        setVisible(res)
        // const res = employes.filter(item)
    }, [selectedCategory])

    const findCategories = (employes) => {
        const temp = employes

        employes.forEach(item => {
            console.log(item);
        })
        const res = temp.filter(item => item.attributes?.staffCategory
            ?.name == "دسته 1")

        console.log(res);

    }



    const handleDeleteCategoryButtonClicked = (item) => {
        axios({
            method: "delete",
            url: ADMIN_DELETE_EMPLOYES_CATEGORIES + item.id,
            headers: {
                "Authorization": user.token
            }
        })
            .then(resp => {
                if (resp) {
                    alert("دسته بندی با موفقیت حذف شد")
                    setRefresh(!refresh)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleEmployeDeleteClick = (item) => {

        axios({
            method: "delete",
            url: ADMIN_DELETE_EMPLOYES + `${item.id}`,
            headers: {
                "Authorization": user.token
            }
        })
            .then(rep => {
                alert("کاربر با موفقیت حذف شد !")
                setRefresh(!refresh)
            })
        setRefresh(!refresh)

    }





    return (
        <div className='dashboard-employes'>
         
            <div className="employe-categoreis">
                {
                    categories.map((item, index) => {
                        
                        return <span
                            onClick={() => setSelectedCategry(item)}
                            className={`item ${selectedCategory?.id === item?.id} `}
                            key={index}>
                            <div className="itme-header">
                                {item.attributes.name}
                            </div>
                            <div className="item-buttons">
                                <Icon icon="mdi:delete" 
                                onClick={() => handleDeleteCategoryButtonClicked(item)} />
                            </div>
                        </span>
                    })
                }
            </div>
            <div className="employe-list">
                {
                    visibleItems?.map((item, index) => {
                        console.log(item);
                        const image = BASE_URL + item.attributes.image
                        return <div className="item" key={index}>
                            <div className="item-header">
                                <img src={image} />
                            </div>
                            <div className="item-body">
                                <h1 className="name">
                                    <span>نام :</span>
                                    {item.attributes.name}</h1>
                                <div className="role">
                                    <span>نقش :</span>
                                    {item.attributes.role}</div>
                                <div className="phone">
                                    <span>شماره داخلی :</span>
                                    {item.attributes.phone}</div>
                                <div className="mobile">
                                    <span>شماره همراه :</span>
                                    {item.attributes.mobile}</div>
                            </div>
                            <div className="item-buttons">
                                <Icon icon="mdi:delete"
                                    onClick={() => handleEmployeDeleteClick(item)} />
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Employes
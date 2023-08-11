import React, { useEffect, useState } from 'react'


import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { APP_GET_EMPLOYES, APP_GET_EMPLOYES_CATEGORIES, BASE_URL } from '../../../consts/API';

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
            url: APP_GET_EMPLOYES,
        }).then(response => {
            const data = response.data.data
            setEmployes(data)
        })
    }, [refresh])


    useEffect(() => {
        axios({
            method: "get",
            baseURL: APP_GET_EMPLOYES_CATEGORIES,
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



    return (
        <main className='employes'>
            <div className="left">
                <div className='phone-number'>
                    <p>
                        شماره تلفن کارکنان
                        دانشکده فنی و حرفه ای دختران قم
                    </p>
                    <div className="phone">
                        <span>
                            اپراتور
                            025-32855375
                        </span>
                        <Icon className='icon' icon="mdi:phone" hFlip={true} />
                    </div>
                </div>
                <ul>

                    {visibleItems.map((item) => {
                        const image = BASE_URL + item.attributes.image

                        return <li className='item'>
                            <div className="item-header">
                                <img src={image} />
                            </div>
                            <div className="item-body">
                                <h2 className='name'>
                                    {item.attributes.name}
                                </h2>
                                <span className='role'>
                                    {item.attributes.role}
                                </span>
                                <div className='number'>
                                    <span> شماره داخلی</span>
                                    <span>{item.attributes.phone}</span>
                                </div>
                                <div className='number'>
                                    <span>شماره تلفن</span>
                                    <span>{item.attributes.mobile}</span>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            <div className="right">
                <h1>
                    کارکنان دانشکده فنی و حرفه ای دختران قم
                </h1>
                <ul>
                    {categories.map((cat, index) => {
                        return (<li
                            className={`${cat.id == selectedCategory.id ? "selected" : ""}`}
                            key={index}
                            onClick={() => { setSelectedCategry(cat) }}>
                            {cat.attributes.name}
                        </li>)
                    })}
                </ul>
            </div>

        </main>
    )
}

export default Employes
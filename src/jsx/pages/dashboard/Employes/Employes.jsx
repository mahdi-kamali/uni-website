import React from 'react'
import axios from "axios"
import { ADMIN_DELETE_EMPLOYES_CATEGORIES, ADMIN_GET_EMPLOYES_CATEGORIES, ADMIN_UPDATE_EMPLOYES_CATEGORIES } from '../../../../consts/API'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'
const Employes = () => {

    const user = useSelector(state => state.user.value)

    const [categories, setCategories] = useState([])

    const [selectedCategory, setSelectedCategry] = useState(categories[0])

    const [refresh, setRefresh] = useState(false)





    useEffect(
        () => {
            axios({
                method: "get",
                url: ADMIN_GET_EMPLOYES_CATEGORIES,
                headers: {
                    "Authorization": user.token
                }
            })
                .then(res => {
                    setCategories(res.data.data)
                })
                .catch(error => { })
        },
        [refresh]
    )

    useEffect(() => {
        setSelectedCategry(categories[0])
    }, [categories, refresh])


    useEffect(() => {
    }, [selectedCategory])


    const handleDeleteButtonClicked = (item) => {
        axios({
            method: "delete",
            url: ADMIN_DELETE_EMPLOYES_CATEGORIES + item.id,
            headers: {
                "Authorization": user.token
            }
        })
            .then(resp => {
                if (resp.status === 200) {
                    setRefresh(!refresh)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleEditButtonClick = (item) => {
        const name = prompt("نام جدید برای این دسته بندی وارد کنید :")

        axios({
            method: "put",
            url: ADMIN_UPDATE_EMPLOYES_CATEGORIES + item.id,
            headers: {
                "Authorization": user.token
            },
            data: {
                staff_category: item.id,
                name: name
            }
        })
            .then(resp => {
                console.log(resp);
            })
            .catch(erro => {
                console.log(erro);
            })


    }




    return (
        <div className='dashboard-employes'>
            <div className="employe-groups">
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
                                <Icon icon="mdi:delete" onClick={() => handleDeleteButtonClicked(item)} />
                                <Icon icon="mingcute:edit-fill"
                                    onClick={() => handleEditButtonClick(item)} />
                            </div>
                        </span>
                    })
                }
            </div>
        </div>
    )
}

export default Employes
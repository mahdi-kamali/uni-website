import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from "axios"
import { APP_GET_ALL_POSTS, APP_GET_ALL_POSTS_CATEGORIES, BASE_URL } from '../../../../consts/API'

const Intro = ({ selectedCategory, setSelectedCategory }) => {



    const [categoires, setCategories] = useState([])



    useEffect(() => {
        axios({
            method: "get",
            url: APP_GET_ALL_POSTS_CATEGORIES
        }).then(res => {
            const data = res.data.data
            setCategories(data.reverse())
        })
    }, [])



    



    function getClass(cat) {
        return cat?.id === selectedCategory?.id ? "selected" : ""
    }

    return (
        <section className='intro'>
            {
                categoires.map((cat, index) => {
                    const image = BASE_URL + cat.attributes.image
                    return <div
                        className={`item ${getClass(cat)}`}
                        onClick={() => { setSelectedCategory(cat) }}
                        key={index}>
                        <img src={image} />
                        <h1>{cat.attributes.title}</h1>
                    </div>
                })
            }

        </section>
    )
}

export default Intro
import { Icon } from '@iconify/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { APP_GET_ALL_POSTS, APP_GET_ALL_POSTS_CATEGORIES, APP_GET_CATEGORY_POSTS, BASE_URL } from '../../../../consts/API';
const Articles = ({ selectedCategory, setSelectedCategory }) => {




    const [finalData, setFintalData] = useState([])
    const [categoires, setCategories] = useState([])
    const [tempCategory, setTempCategory] = useState([])
    const [swiper, setSwiper] = useState()
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        axios({
            method: "get",
            url: APP_GET_ALL_POSTS_CATEGORIES
        }).then(res => {
            const cats = res.data.data
            const temp = []
            const temp2 = []
            cats.forEach(cat => {
                temp.push({
                    category: cat.attributes.title,
                    childs: []
                })
            })
            setCategories(temp)
            setTempCategory(cats)
        })
    }, [])


    useEffect(() => {
        axios({
            method: "get",
            url: APP_GET_ALL_POSTS
        }).then(res => {
            const temp = categoires
            const posts = res.data.data
            posts.forEach(record => {
                categoires.forEach((cat, index) => {
                    if (cat.category === record.category) {
                        temp[index].childs.push(record.attributes)
                    }
                })
            });
            setFintalData(temp)
        })
    }, [categoires])




    useEffect(() => {
        tempCategory.forEach((cat, index) => {
            console.log(cat);
            console.log(selectedCategory);
            if (cat?.id === selectedCategory?.id) {
                swiper?.slideTo(index)
                console.log(cat);
            }
        })
    }, [selectedCategory])



    return (
        <section className='articles'>
            <div className="articles-header">
                <h1>
                    {selectedCategory?.category}
                    {selectedCategory?.attributes?.title}
                </h1>
            </div>


            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                dir='rtl'
                autoHeight={true}
                onSlideChange={(event) => setSelectedCategory(tempCategory[event.activeIndex])}
                pagination={{ clickable: true }}
                onSwiper={(swiper => setSwiper(swiper))}
            >

                {
                    finalData.map(cat => {
                        return <SwiperSlide>
                            <div className="articles-body">

                                {
                                    cat.childs.map((post, index) => {
                                        const image = BASE_URL + post.image
                                        return <div className="item" key={index}>

                                            <div className="item-header">
                                                <img src={image} />
                                            </div>
                                            <div className="item-body">
                                                <h1>
                                                    {post.title}
                                                </h1>
                                                <p>
                                                   {post.description}
                                                </p>
                                                <div className="item-buttons">
                                                    <button className='link'>
                                                        <Icon icon="ant-design:read-outlined" />
                                                        خواندن بیشتر
                                                    </button>
                                                    <button>
                                                        <Icon icon="mingcute:link-fill" />
                                                        آدرس لینک
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    })
                                }

                            </div>
                        </SwiperSlide>
                    })
                }



            </Swiper>



        </section>
    )
}

export default Articles
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Poster = () => {
    return (
        <section className='poster'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                effect='fade'
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={require("../../../../images/poster/1.png")} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../../images/poster/1.png")} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../../images/poster/1.png")} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../../images/poster/1.png")} alt="" />
                </SwiperSlide>
            </Swiper>


        </section>
    )
}

export default Poster
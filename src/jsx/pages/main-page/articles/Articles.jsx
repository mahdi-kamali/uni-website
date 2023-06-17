import { Icon } from '@iconify/react';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
const Articles = () => {
    return (
        <section className='articles'>
            <div className="articles-header">
                <h1>اخبار و اطلاعیه ها</h1>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoHeight={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="articles-body">


                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="articles-body">


                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="articles-body">


                        <div className="item">

                            <div className="item-header">
                                <img src={require("../../../../images/articles/ratio.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>تست</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان شپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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

                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default Articles
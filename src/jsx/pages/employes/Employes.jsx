import React from 'react'


import { Icon } from '@iconify/react';

const Employes = () => {
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
                    <li className='item'>
                        <div className="item-header">
                            <img src={require("../../../images/about-us/user.png")} alt="" />
                        </div>
                        <div className="item-body">
                            <h2 className='name'>خانم دهقانی</h2>
                            <span className='role'>ریاست</span>
                            <div className='number'>
                                <span> شماره داخلی</span>
                                <span>142</span>
                            </div>
                            <div className='number'>
                                <span>شماره تلفن</span>
                                <span>098765432</span>
                            </div>
                        </div>
                    </li>
                    <li className='item'>
                        <div className="item-header">
                            <img src={require("../../../images/about-us/user.png")} alt="" />
                        </div>
                        <div className="item-body">
                            <h2 className='name'>خانم دهقانی</h2>
                            <span className='role'>ریاست</span>
                            <div className='number'>
                                <span> شماره داخلی</span>
                                <span>142</span>
                            </div>
                            <div className='number'>
                                <span>شماره تلفن</span>
                                <span>098765432</span>
                            </div>
                        </div>
                    </li>
                    <li className='item'>
                        <div className="item-header">
                            <img src={require("../../../images/about-us/user.png")} alt="" />
                        </div>
                        <div className="item-body">
                            <h2 className='name'>خانم دهقانی</h2>
                            <span className='role'>ریاست</span>
                            <div className='number'>
                                <span> شماره داخلی</span>
                                <span>142</span>
                            </div>
                            <div className='number'>
                                <span>شماره تلفن</span>
                                <span>098765432</span>
                            </div>
                        </div>
                    </li>
                    <li className='item'>
                        <div className="item-header">
                            <img src={require("../../../images/about-us/user.png")} alt="" />
                        </div>
                        <div className="item-body">
                            <h2 className='name'>خانم دهقانی</h2>
                            <span className='role'>ریاست</span>
                            <div className='number'>
                                <span> شماره داخلی</span>
                                <span>142</span>
                            </div>
                            <div className='number'>
                                <span>شماره تلفن</span>
                                <span>098765432</span>
                            </div>
                        </div>
                    </li>
                    <li className='item'>
                        <div className="item-header">
                            <img src={require("../../../images/about-us/user.png")} alt="" />
                        </div>
                        <div className="item-body">
                            <h2 className='name'>خانم دهقانی</h2>
                            <span className='role'>ریاست</span>
                            <div className='number'>
                                <span> شماره داخلی</span>
                                <span>142</span>
                            </div>
                            <div className='number'>
                                <span>شماره تلفن</span>
                                <span>098765432</span>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="right">
                <h1>
                    کارکنان دانشکده فنی و حرفه ای دختران قم
                </h1>
                <ul>
                    <li >حوضه ریاست</li>
                    <li className='selected'>معاونت آموزشی و پژوهشی</li>
                    <li >معاونت دانشجویی و فرهنگی</li>
                    <li>معاومن اداری و مالی</li>
                </ul>
            </div>

        </main>
    )
}

export default Employes
import React from 'react'
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <footer>
            <ul>
                <h1>خدمات الکترونیک</h1>
                <li>سامانه اطلاعاتی</li>
                <li>سيستم اتوماسيون اداري</li>
                <li>سيستم پست الکترونيکي</li>
                <li>سامانه اطلاعاتی</li>
                <li>سامانه اداري و مالي</li>
            </ul>
            <ul>
                <h1>اطلاع رسانی</h1>
                <li>کنفرانس و همايش ها</li>
                <li>آیین نامه ها و بخش نامه ها</li>
            </ul>
            <ul>
                <h1>لینک های مرتبط</h1>
                <li>سامانه جامع همای رخمت</li>
                <li>دفتر مقام معظم رهبری</li>
                <li>فصلنامه علمی_پژوهشي کارافن</li>
            </ul>
            <ul className='social-media'>
                <h1>ارتباط با ما</h1>
                <li>
                    <Icon className='icon' icon="icomoon-free:location" />
                    <span>
                        قم,شهرک قدس,هدایت13,دانشکده فنی و حرفه ای دختران قم
                    </span>
                </li>
                <li>
                    <Icon className='icon' icon="carbon:phone-filled" hFlip={true} />
                    <span>
                        025-32855375
                    </span>
                </li>
                <li>
                    <Icon className='icon' icon="wpf:message" />
                    <span>
                        3716138917
                    </span>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
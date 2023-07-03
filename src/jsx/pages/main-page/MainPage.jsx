import React from 'react'
import Poster from './poster/Poster'
import Intro from './intro/Intro'
import Articles from './articles/Articles'
import Stations from './stations/Stations'
import AboutUniversity from './about-university/AboutUniversity'
import TotalViews from './total-veiws/TotalViews'
import Footer from '../../footer/Footer'
import { useState } from 'react'

const MainPage = () => {


    const [swiper, setSwiper] = useState(undefined)


    return (
        <main className='main-page'>
            <Poster />
            <Intro swiper={swiper} />
            <Articles setSwiper={setSwiper} />
            <Stations />
            <AboutUniversity />
            <TotalViews />
        </main>
    )
}

export default MainPage
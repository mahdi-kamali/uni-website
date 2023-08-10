import React from 'react'
import Poster from './poster/Poster'
import Intro from './intro/Intro'
import Articles from './articles/Articles'
import Stations from './stations/Stations'
import AboutUniversity from './about-university/AboutUniversity'
import TotalViews from './total-veiws/TotalViews'
import { useState } from 'react'

const MainPage = () => {



    const [selectedCategory, setSelectedCategory] = useState()

    return (
        <main className='main-page'>
            <Poster />
            <Intro
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory} />

            <Articles
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} />
            <Stations />
            <AboutUniversity />
            <TotalViews />
        </main>
    )
}

export default MainPage
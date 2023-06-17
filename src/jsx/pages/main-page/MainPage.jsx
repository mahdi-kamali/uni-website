import React from 'react'
import Poster from './poster/Poster'
import Intro from './intro/Intro'
import Articles from './articles/Articles'

const MainPage = () => {
    return (
        <div className='main-page'>
            <Poster />
            <Intro />
            <Articles />
        </div>
    )
}

export default MainPage
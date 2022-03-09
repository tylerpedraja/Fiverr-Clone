import React from 'react'
import ItemsCarousel from '../Components/ItemsCarousel.js'
import Subnav from '../Components/Subnav.js'
import HomeBanner from '../Components/HomeBanner.jsx'

const HomeScreen = () => {
  return (
    <div>
        <Subnav />
        <HomeBanner />
      <ItemsCarousel />
    </div>
  )
}

export default HomeScreen
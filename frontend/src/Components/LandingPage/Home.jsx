import React from 'react'
import Banner from './BannerPage/Banner'
import Venue from './VenueSection/Venue'
import Collection from './CollectionSection/Collection'
import About from './AboutSection/About'
import Contact from './ContactSection/Contact'

const Home = () => {
  return (
    <div>
            <Banner/>
            <Venue/>
            <Collection/>
            <About/>
            <Contact/>

    </div>
  )
}

export default Home
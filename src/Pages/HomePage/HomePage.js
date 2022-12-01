import React from 'react'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import AdditionalServiceSection from './AdditionalServiceSection/AdditionalServiceSection'
import ContactSection from './ContactSection/ContactSection'
import FirstLookSection from './FirstLookSection/FirstLookSection'
import FooterSection from './FooterSection/FooterSection'
import OfferSection from './OfferSection/OfferSection'
import RoomsTypeSection from './RoomsTypeSection/RoomsTypeSection'
import './HomePage.css'
import ScrollToTop from 'react-scroll-to-top'
import AttractionSection from './AttractionSection/AttractionSection'

function HomePage() {
  return (
    <main className='homePage'>
      <ScrollToTop smooth color="#6f00ff"/>
        <FirstLookSection />
        <AboutUsSection />
        <AdditionalServiceSection />
        <OfferSection />
        <RoomsTypeSection />
        <AttractionSection />
        <ContactSection />
        <FooterSection />
    </main>
  )
}

export default HomePage
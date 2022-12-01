import React, { useState } from 'react'
import TopBannerSection from '../../../Components/TopBannerSection/TopBannerSection'
import image1 from '../../../Assets/bg-top.jpg'
import './FirstLookSection.css'

function FirstLookSection() {
  return (
    <main className='top-section' style={{backgroundImage: `url(${image1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <TopBannerSection />
    </main>
  )
}

export default FirstLookSection
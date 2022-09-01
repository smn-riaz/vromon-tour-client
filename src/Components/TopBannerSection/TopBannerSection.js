import React from 'react'
import BookingButton from '../BookingButton/BookingButton'
import './TopBannerSection.css'

function TopBannerSection() {
  return (
    <main className='topbanner'>
      <div style={{height: '60vh'}} className='mx-auto text-center my-5 py-5'>
      <h1 className='p-5 banner-quote'>Life is short and world is wide</h1>
      <BookingButton goLink="/booking"/>
      </div>
    </main>
  )
}

export default TopBannerSection
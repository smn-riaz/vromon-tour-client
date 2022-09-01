import React from 'react'
import './AboutUsSection.css'
import map from '../../../Assets/map.png'
import about1 from '../../../Assets/about1.jpg'
import about2 from '../../../Assets/about2.jpg'

function AboutUsSection() {
  return (
    <main className='d-flex row justify-content-center aboutUsSection p-5' id="aboutUs">
      <div className='col-lg-5 col-sm-10 col-md-6 px-3 row'>
       
        <div className=' text-center h-75 align-self-center d-flex'><img className='w-75 h-100' src={map} alt="Vromon-tour location" /></div>

      </div>
      <div className='col-lg-7 col-sm-12 col-md-6 p-2'>
        <p><b className='fs-3'>B</b>urabitur convallis mollis lectus ac suscipit. Nulla id nulla velit. Curabitur pellentesque nibh sed ex varius laoreet. Morbi sed varius arcu. Nulla at nulla feugiat, tempor risus vel, suscipit tortor. Proin rhoncus elementum velit, sit amet efficitur diam consequa cras.</p>
        <div className='d-flex row justify-content-center p-2'>
          <div className='col-lg-6 col-md-6 col-sm-10 p-2'><img src={about1} className="w-100 h-100" alt="" /></div>
          <div className='col-lg-6 col-md-6 col-sm-10 p-2'><img src={about2} className="w-100 h-100" alt="" /></div>
        </div>
      </div>
    </main>
  )
}

export default AboutUsSection
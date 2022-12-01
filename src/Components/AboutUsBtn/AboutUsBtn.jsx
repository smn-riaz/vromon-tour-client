import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUsBtn.css'

const AboutUsBtn = () => {
  return (
    <div className="">
      <Link to='/aboutus'>
        <button
          className="px-4 py-2 text-white  border-2 border border-white fs-5 aboutusbtn"
        >
          ABOUT US
        </button>{" "}
      </Link>
    </div>
  )
}

export default AboutUsBtn
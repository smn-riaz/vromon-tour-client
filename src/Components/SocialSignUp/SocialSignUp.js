import React from 'react'
import FbSignUp from '../FbSignUp/FbSignUp'
import GoogleSignUp from '../GoogleSignUp/GoogleSignUp'

const SocialSignUp = () => {
  return (
    <div className="d-flex py-2 justify-content-around align-items-center social-signup">
      <div>
        <GoogleSignUp />
      </div>
      <div>
        <FbSignUp />
      </div>
     
    </div>
  )
}

export default SocialSignUp
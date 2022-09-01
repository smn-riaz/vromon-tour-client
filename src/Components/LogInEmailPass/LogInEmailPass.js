import React from 'react'
import { useState } from 'react';
import { useRef,useContext } from 'react';
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { RegisteredUserInfoContext } from '../../App';
import SocialSignUp from '../SocialSignUp/SocialSignUp';


function LogInEmailPass({toggleHandle}) {
  const navigate = useNavigate()
  const {registered, setRegistered,isUserAvailableMessage, setIsUserAvailableMessage} = useContext(RegisteredUserInfoContext)
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("https://vromon-tour-server.vercel.app/tourist/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data.length>0){
          setRegistered(data.data[0])
          console.log(data.data[0])
          navigate("/myBooking")
        } else if(data.data.length === 0){
              setIsUserAvailableMessage(true);
                setTimeout(() => {
                setIsUserAvailableMessage(false);
              }, 10000);
        }
      })
    
  };

  return (
    <div className=" col-lg-5 col-md-8 col-sm-9 p-2 login-container">
        <Form onSubmit={handleLoginSubmit}>
              {isUserAvailableMessage && <h6 className='text-center text-danger'>Email or Password wrong</h6>}
              <div className="p-2 m-1">
                <input
                  ref={emailRef}
                  type="email"
                 
                  className="px-3 py-2 w-100"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="p-2 m-1">
                <input
                 type={showPassword ? "text" : "password"}
                  ref={passwordRef}
                  className="px-3 py-2 w-100"
                  placeholder="pA$$w0r|)"
                  required
                />
              </div>
              <label for="showPassword">
            <input type="checkbox" onClick={handleShowPassword} />
            {showPassword ? "hide password" : "show password"}
           
          </label>

              <div className="p-2 m-1">
                <button
                  type="submit"
                  className="border-0 w-100 py-2 mx-auto fw-bold"
                >
                  Login
                </button>
                <h6 className="fw-bold py-2">
                  New to Vromon - Tour?{" "}
                  <span className="toggle-text" onClick={() => toggleHandle()}>
                    <u>Sign Up Now.</u>
                  </span>
                </h6>
              </div>
            </Form>
            {/* <SocialLogin /> */}
            <SocialSignUp />
          </div>
  )
}

export default LogInEmailPass
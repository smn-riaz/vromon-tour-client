import React from "react";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisteredUserInfoContext } from "../../App";
import SocialSignUp from "../SocialSignUp/SocialSignUp";

function SignUpEmailPass({ toggleHandle }) {
  const navigate   = useNavigate()
  const [isUserAvailable, setIsUserAvailable] = useState("");
  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);

  const [validName, setValidName] = useState("");
  const [invalidNameMessage, setInvalidNameMessage] = useState(false);

  const [validEmail, setValidEmail] = useState("");
  const [invalidEmailMessage, setInvalidEmailMessage] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [strongPasswordMessage, setStrongPasswordMessage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleEmailBlur = (event) => {
    if (
      String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValidEmail(event.target.value);
      setInvalidEmailMessage(false);
    } else {
      setInvalidEmailMessage(true);
    }
  };

  const handlePasswordBlur = (event) => {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (event.target.value.match(regularExpression)) {
      setConfirmPassword(event.target.value);
      setStrongPasswordMessage(false);
    } else {
      setStrongPasswordMessage(true);
    }
  };

  const handleNameBlur = (event) => {
    let name = event.target.value;
    if (name.match(/^[a-zA-Z]+$/g) && name.length > 3 && name.length < 21) {
      setValidName(name);
      setInvalidNameMessage(false);
    } else {
      setInvalidNameMessage(true);
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const name = validName.charAt(0).toUpperCase() + validName.slice(1);
    const email = validEmail;
    const password = confirmPassword;

    fetch("https://vromon-tour-server.vercel.app/tourist/isEmailAvailable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result >0) {
          setIsUserAvailableMessage(true)
          setTimeout(() => {
            setIsUserAvailableMessage(false)
          }, 12000);

          console.log(data);
        } 
        else if (data.result === 0) {
          if (password && email && name) {
            const signupData = {
              name, 
              email, 
              password, 
              uid: '',
              userRole:"tourist",
              roomNo: "",
              roomType: "",
              roomImage: "",
              totalDays: 0,
              roomCost: 0,
              totalCost:0,
              checkInDate: "",
              checkOutDate: "",
              extraServices: [],
              extraServicesCost: 0,
              bookingDate: "",
              gmailUsed: false
            };
            fetch("https://vromon-tour-server.vercel.app/tourist/aTourist", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(signupData),
            })
              .then((res) => res.json())
              .then((data) => {
                if(data){
                  alert("Congrats! Now, you're our family member")
                  window.location.reload();
                }
              });
          } else {
            // setRegistered(false)
          }
        }
      });



     
    
  };

  return (
    <div className=" col-lg-5 col-md-8 col-sm-9 p-2 login-container">
      <Form onSubmit={handleSignupSubmit}>
        {
          isUserAvailableMessage &&
          <h6 className="text-center text-danger">This email has already used</h6>
        }
        <div className="p-2 m-1">
          <input
            type="text"
            className="px-3 py-2 w-100"
            placeholder="Name"
            required
            onBlur={handleNameBlur}
          />
        </div>
        {invalidNameMessage && (
          <h6 className="text-danger fw-bold">Only character allowed (3-20)</h6>
        )}
        <div className="p-2 m-1">
          <input
            type="email"
            className="px-3 py-2 w-100"
            placeholder="Email"
            required
            onBlur={handleEmailBlur}
          />
        </div>
        {invalidEmailMessage && (
          <h6 className="text-danger fw-bold">Not valid email address</h6>
        )}
        <div className="p-2 m-1 row d-flex justify-content-around">
          <input
            type={showPassword ? "text" : "password"}
            className="px-3 py-2 w-100"
            placeholder="pA$$w0r|)"
            required
            onBlur={handlePasswordBlur}
          />
          <label for="showPassword">
            <input type="checkbox" onClick={handleShowPassword} />{" "}
            {showPassword ? "hide password" : "show password"}
            <small className="px-3 fw-bold">
              8-16 chars, a num, a special char, capital , small
            </small>
          </label>
        </div>

        <div>
          {strongPasswordMessage && (
            <h6 className="text-danger fw-bold">
              Not strong password ! Plz, follow the format.
            </h6>
          )}
        </div>

        <div className="row d-flex justify-content-around px-1">
          <div className="col-5"></div>
        </div>

        <div className="p-2 m-1">
          <button type="submit" className="border-0 w-100 py-2 mx-auto fw-bold">
            Sign Up
          </button>
        </div>
      </Form>
      <h6 className="fw-bold p-2">
        Already registered ?{" "}
        <span className="toggle-text" onClick={() => toggleHandle()}>
          <u>Login.</u>
        </span>
      </h6>
      <SocialSignUp />
    </div>
  );
}

export default SignUpEmailPass;

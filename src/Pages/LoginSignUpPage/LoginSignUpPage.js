import React, { useState } from "react";
import "./LoginSignUpPage.css";
import NavBarSection from "../../Components/NavBarSection/NavBarSection";
import SignUpEmailPass from "../../Components/SignUpEmailPass/SignUpEmailPass";
import LogInEmailPass from "../../Components/LogInEmailPass/LogInEmailPass";
import { useContext } from "react";
import { RegisteredUserInfoContext } from "../../App";

function LoginSignUpPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);

  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowPassword = () => {
  //   if (showPassword) {
  //     setShowPassword(false);
  //   } else {
  //     setShowPassword(true);
  //   }
  // };

  function toggleHandle() {
    if (showLoginForm) {
      setTimeout(() => {
        setShowLoginForm(false);
      }, 1500);
    } else if (!showLoginForm) {
      setTimeout(() => {
        setShowLoginForm(true);
      }, 1500);
    }
  }

  return (
    <main
      className="loginSignUpPage"
      style={{
        backgroundImage: "url(https://i.ibb.co/4F1mkyJ/login.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!registered.email && (
        <div className="py-5 d-flex row justify-content-center align-self-center">
          {showLoginForm && <LogInEmailPass toggleHandle={toggleHandle} />}

          {/* SIGN UP FORM */}

          {!showLoginForm && <SignUpEmailPass toggleHandle={toggleHandle} />}
        </div>
      )}

      {registered.email && (
        <div className="d-flex align-items-center justify-content-center after-login">
          <div className="col-5 w-50">
            <h2 className="text-center py-5">
              Congratulations, {registered.name}
            </h2>
          </div>
        </div>
      )}
    </main>
  );
}

export default LoginSignUpPage;

import React, { useContext } from "react";
import facebook from "../../Assets/facebook.png";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from "../GoogleSignUp/Firebase.init";
import { RegisteredUserInfoContext } from "../../App";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

function FbSignUp() {
  const provider = new FacebookAuthProvider();

  const navigate = useNavigate()
  const { registered, setRegistered, setIsUserAvailableMessage } = useContext(RegisteredUserInfoContext);

  const handleFbSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const name = user.displayName;
        const email = user.email
        const uid = user.uid

        fetch("https://vromon-tour-server.vercel.app/tourist/isEmailAvailable", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email}),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.result > 0) {
              if(data.data[0].gmailUsed){
                setRegistered(data.data[0])
                if(data.data[0].userRole === 'admin'){
                  navigate("/admin/allTourist")
                } else {
                  navigate("/myBooking")
                }
              }
              else if(data.data[0].gmailUsed===false){
                console.log("email already used")
                setIsUserAvailableMessage(true);
                setTimeout(() => {
                setIsUserAvailableMessage(false);
              }, 5000);
              }

            } 
            
            else if(data.result === 0) {
                  const signupData = {
                    name, 
                    email, 
                    password:"", 
                    uid,
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
                    gmailUsed: true
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
                        setRegistered(signupData);
                        navigate('/myBooking')
                      }
                    });
                } else {
                  // setRegistered(false)
                }
              
            
          });
      })

        //
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <button className="socialIcon-button" onClick={handleFbSignIn}>
        <img src={facebook} alt="" height="30px" width="30px" />
      </button>
    </div>
  );
}

export default FbSignUp;

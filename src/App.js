import { useState } from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBarSection from "./Components/NavBarSection/NavBarSection";
import AllTourist from "./Pages/AdminPage/AllTourist/AllTourist";
import UpdateTourist from "./Pages/AdminPage/UpdateTourist/UpdateTourist";
import BookingDetailsPage from "./Pages/BookingDetailsPage/BookingDetailsPage";
import BookingPage from "./Pages/BookingPage/BookingPage";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginSignUpPage from "./Pages/LoginSignUpPage/LoginSignUpPage";
import PrivateRoute from "./Pages/LoginSignUpPage/PrivateRoute";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import RoomsPage from "./Pages/RoomsPage/RoomsPage";

export const RegisteredUserInfoContext = createContext();

function App() {
  const [registered, setRegistered] = useState({});
  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);
  return (
    <RegisteredUserInfoContext.Provider
      value={{registered, setRegistered, isUserAvailableMessage, setIsUserAvailableMessage}}
    >
    <NavBarSection />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginSignUpPage />} />
        <Route path="/:room/:roomName" element={<PrivateRoute />}>
          <Route path="" element={<CheckOutPage />} />
        </Route>
        <Route path="/:room" element={<RoomsPage />} />
       <Route path="/myBooking" element={<PrivateRoute />}>
          <Route path="" element={<BookingDetailsPage />} />
       </Route>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin/allTourist" element={<AllTourist />} />
        <Route path="/admin/updateTourist" element={<UpdateTourist />} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Routes>
    </RegisteredUserInfoContext.Provider>
  );
}

export default App;

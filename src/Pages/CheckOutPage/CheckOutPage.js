import React, { useState } from "react";
import { useLocation, Link} from "react-router-dom";
import { rooms } from "../../Data";
import "./CheckOutPage.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import CheckOutModal from "../../Components/CheckOutModal/CheckOutModal";
import { useContext } from "react";
import { RegisteredUserInfoContext } from "../../App";

function CheckOutPage() {
  const location = useLocation().pathname.split("/")[2];
  const room = rooms.filter((room) => room.name === location)[0];
  console.log(location, room);
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);

  const [extraServices, setExtraServices] = useState([]);

  const stDate = new Date();
  stDate.setDate(stDate.getDate() + 3);

  const edDate = new Date();
  edDate.setDate(edDate.getDate() + 5);

  const [state, setState] = useState({
    selection: {
      startDate: stDate,
      endDate: edDate,
      key: "selection",
    },
  });
  var endDate = state.selection.endDate.toLocaleString().split(",")[0];
  var startDate = state.selection.startDate.toLocaleString().split(",")[0];
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const roomCost = diffDays * room.price;

  const gymHandler = () => {
    const isGym = extraServices.filter(
      (service) => service.serviceId === "gym1"
    );
    if (isGym.length === 0) {
      extraServices.push({ serviceName: "Gym", serviceId: "gym1", cost: 45 });
    } else if (isGym.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "gym1"
      );
      setExtraServices(newService);
    }
  };

  const barHandler = () => {
    const isBar = extraServices.filter(
      (service) => service.serviceId === "bar2"
    );
    if (isBar.length === 0) {
      extraServices.push({ serviceName: "Bar", serviceId: "bar2", cost: 55 });
    } else if (isBar.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "bar2"
      );
      setExtraServices(newService);
    }
  };

  const danceClubHandler = () => {
    const isDanceClub = extraServices.filter(
      (service) => service.serviceId === "danceClub3"
    );
    if (isDanceClub.length === 0) {
      extraServices.push({
        serviceName: "Dance Club",
        serviceId: "danceClub3",
        cost: 60,
      });
    } else if (isDanceClub.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "danceClub3"
      );
      setExtraServices(newService);
    }
  };

  const swimmingPoolHandler = () => {
    const isSwimmingPool = extraServices.filter(
      (service) => service.serviceId === "swimmingPool4"
    );
    if (isSwimmingPool.length === 0) {
      extraServices.push({
        serviceName: "Swimming Pool",
        serviceId: "swimmingPool4",
        cost: 35,
      });
    } else if (isSwimmingPool.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "swimmingPool4"
      );
      setExtraServices(newService);
    }
  };

  const buffetBreakfastHandler = () => {
    const isBuffet = extraServices.filter(
      (service) => service.serviceId === "buffet5"
    );
    if (isBuffet.length === 0) {
      extraServices.push({
        serviceName: "Buffet Breakfast",
        serviceId: "buffet5",
        cost: 40,
      });
    } else if (isBuffet.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "buffet5"
      );
      setExtraServices(newService);
    }
  };
  const airportPickupHandler = () => {
    const isPickup = extraServices.filter(
      (service) => service.serviceId === "pickup6"
    );
    if (isPickup.length === 0) {
      extraServices.push({
        serviceName: "Airport Pickup",
        serviceId: "pickup6",
        cost: 32,
      });
    } else if (isPickup.length) {
      const newService = extraServices.filter(
        (service) => service.serviceId !== "pickup6"
      );
      setExtraServices(newService);
    }
  };

  const bookingData = {
    id: registered._id,
    name: registered.name,
    email: registered.email,
    roomNo: room.name,
    roomImage: room.image,
    roomType: room.type.slice(0, -4).toUpperCase(),
    checkInDate: startDate,
    checkOutDate: endDate,
    totalDays: diffDays,
    extraServices,
    perRoomCost: room.price,
    roomCost,
    bookingDate: new Date().toLocaleDateString(),
  };

  return (
    <main className="checkOutPage ">
      {registered.totalCost === 0 && (
        <div className="d-flex row justify-content-around align-items-center py-4">
          <div className="calender-checkout col-lg-5 py-3">
            <DateRangePicker
              onChange={(item) => setState({ ...state, ...item })}
              months={2}
              minDate={addDays(new Date(), 3)}
              maxDate={addDays(new Date(), 45)}
              direction="vertical"
              scroll={{ enabled: true }}
              ranges={[state.selection]}
            />
          </div>

          <div className="col-lg-5">
            <div className="d-flex row justify-content-around align-items-center">
              {" "}
              <h5 className="col-3">
                Days : <b className="text-primary">{diffDays}</b>
              </h5>
              <h5 className="col-3">
                Cost: <b className="text-primary">${roomCost}</b>
              </h5>{" "}
              <h5 className="col-6">
                [<b className="text-primary"> {startDate}</b> to{" "}
                <b className="text-primary">{endDate} </b>]
              </h5>
            </div>

            <div className="specificRoomContainer">
              <img src={room.image} className="w-75 h-50" alt="" />
              <div className="price-btn">
                <button>${room.price} / DAY</button>
              </div>
              <h5 className="roomName">{room.name}</h5>
            </div>

            <h4 className="text-center pt-2">Additional Service: </h4>
            <div className="d-flex row justify-content-around align-items-center">
              <div className="py-2 col-5">
                <label for="gym"> Gym ($45)</label>
                <input type="checkbox" id="gym" onClick={gymHandler} />
              </div>
              <div className="py-2 col-5">
                <label for="miniBar"> Mini Bar ($55)</label>
                <input type="checkbox" id="miniBar" onClick={barHandler} />
              </div>
              <div className="py-2 col-5">
                <label for="danceClub"> Dance club ($60)</label>
                <input
                  type="checkbox"
                  id="danceClub"
                  onClick={danceClubHandler}
                />
              </div>
              <div className="py-2 col-5">
                <label for="swimmingPool"> Swimming pool ($35)</label>
                <input
                  type="checkbox"
                  id="swimmingPool"
                  onClick={swimmingPoolHandler}
                />
              </div>
              <div className="py-2 col-5">
                <label for="buffet">Buffet breakfast ($40)</label>
                <input
                  type="checkbox"
                  id="buffet"
                  onClick={buffetBreakfastHandler}
                />
              </div>
              <div className="py-2 col-5">
                <label for="pickup">Airport Pickup ($32)</label>
                <input
                  type="checkbox"
                  id="pickup"
                  onClick={airportPickupHandler}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-3">
            <CheckOutModal bookingData={bookingData} />
          </div>
        </div>
      )}
      {registered.totalCost > 0 && (
        <div className="d-flex justify-content-center align-self-center text-center py-5">
          <div className="py-5">
            <h3 className="text-success">You have a previous booking.</h3>
            <h4><button className="px-3 py-2 rounded"><Link to='/myBooking' className="text-decoration-none">My Booking</Link></button></h4>
            <h5 className="py-5 text-danger">
              To cancel or clear data, please contact our support room: 01234324
            </h5>
          </div>
        </div>
      )}
    </main>
  );
}

export default CheckOutPage;

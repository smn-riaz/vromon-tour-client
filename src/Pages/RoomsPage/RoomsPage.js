import React from "react";
import { useLocation } from "react-router-dom";
import NavBarSection from "../../Components/NavBarSection/NavBarSection";
import SpecificRooms from "../../Components/SpecificRooms/SpecificRooms";
import { rooms } from "../../Data";
import "./RoomsPage.css";

function RoomsPage() {
  const location = useLocation().pathname.slice(1);
  const roomData = rooms.filter((room) => room.type === location);
  return (
    <main className="roomsPage">
      <h2 className="text-center p-3 roomspage-headline">
        {location.slice(0, -4)}
      </h2>
      <div>
        <SpecificRooms data={roomData} />
      </div>
    </main>
  );
}

export default RoomsPage;

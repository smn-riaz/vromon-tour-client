import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBarSection from '../../Components/NavBarSection/NavBarSection'
import SpecificRooms from '../../Components/SpecificRooms/SpecificRooms'
import { rooms } from '../../Data'
import './RoomsPage.css'

function RoomsPage() {
    const location = useLocation().pathname.slice(1)
    console.log(location)
    const roomData = rooms.filter(room=> room.type === location)
  return (
    <main className='roomsPage'>
      <h2 className='text-center p-3'>{location}</h2>
        <SpecificRooms data={roomData} />
    </main>
  )
}

export default RoomsPage
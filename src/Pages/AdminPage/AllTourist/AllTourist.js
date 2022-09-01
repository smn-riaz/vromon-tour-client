import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'


const AllTourist = () => {
    const [tourists, setTourists] = useState([])
    useEffect(() => {
        fetch('https://vromon-tour-server.vercel.app/tourist/allTourist')
            .then(res => res.json())
            .then(data => setTourists(data.data))
    }, [])

  return (
    <main>
       <Table striped bordered hover>
      <thead>
        <tr>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Room No</th>
            <th className="">Check In</th>
            <th className="">Check Out</th>
            <th className="">Total Days</th>
            <th className="">Extra Services</th>
            <th className="">Total Cost ($)</th>
            <th className="">Booking Date</th>
        </tr>
      </thead>
      <tbody>
        {
            tourists.map((tourist, key) => {
                const {name, email, roomNo, checkInDate, checkOutDate, totalDays, extraServices, totalCost, bookingDate, _id} = tourist;
                return(
                    <tr key={_id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{roomNo}</td>
                        <td>{checkInDate}</td>
                        <td>{checkOutDate}</td>
                        <td>{totalDays}</td>
                        <td>
                            {
                                extraServices.map((service) => <li>{service.serviceName} <b><small> (${service.cost})</small></b></li>)
                            }
                        </td>
                        <td>{totalCost}</td>
                        <td>{bookingDate}</td>
                    </tr>
                )
            })
        }
        
      </tbody>
    </Table>
    </main>
  )
}

export default AllTourist
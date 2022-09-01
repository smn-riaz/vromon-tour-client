import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'


const UpdateTourist = () => {
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
            <th className="">Update</th>
            <th className="">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            tourists.map((tourist, key) => {
                const {name, email, _id} = tourist;
                return(
                    <tr key={_id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>Update</td>
                        <td>delete</td>
                    </tr>
                )
            })
        }
        
      </tbody>
    </Table>
    </main>
  )
}

export default UpdateTourist
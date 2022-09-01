
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BookingButton({goLink}) {
  return (
    <div><Link to={`${goLink}`}>
       <Button variant="outline-white" className='px-4 bg-secondary text-white border-white fs-5'>
        Book Now
        </Button>{' '}
        </Link>
    </div>
  )
}

export default BookingButton
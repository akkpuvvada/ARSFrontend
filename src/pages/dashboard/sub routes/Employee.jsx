import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hotels from '../../../components/employee/Hotels'
import Bookings from '../../../components/employee/Bookings'
import Reservations from '../../../components/employee/Reservations'
import Airlines from '../../../components/employee/Airlines'
import Booking from '../../../components/employee/Booking'

const Employee = () => {
  const { service } = useParams()

  const [selectedAirlines, setSelectedAirlines] = useState(null)
  const [bookingId, setBookingId] = useState(null)

  if (service === 'bookings') return <Bookings />
  if (service === 'reservations' && !selectedAirlines && !bookingId) return <Airlines setSelectedAirlines={setSelectedAirlines} selectedAirlines={selectedAirlines} />
  if (service === 'reservations' && selectedAirlines && !bookingId) return (
    <Booking
      selectedAirlines={selectedAirlines}
      setSelectedAirlines={setSelectedAirlines}
      setBookingId={setBookingId}
    />
  )
  if (service === 'reservations' && selectedAirlines && bookingId) return (
    <Reservations
      bookingId={bookingId}
      setBookingId={setBookingId}
    />
  )
  return <Hotels />

  // return <Transport />
}

export default Employee

import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Tabs,
  Tab,
} from '@mui/material'
import ActiveBookings from './ActiveBookings'
import RefundList from './RefundList'
import './reservations.css'

const Reservations = (props) => {
  const {
    bookingId,
    setBookingId
  } = props

  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <>
      <button onClick={() => setBookingId(null)}>Back</button>
      <AppBar position="static" className="appBar">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Active Bookings" />
          <Tab label="Refund List" />
        </Tabs>
      </AppBar>
      <div className='content-section'>
        {selectedTab === 0 && (
          <ActiveBookings bookingId={bookingId}/>
        )}
        {selectedTab === 1 && (
          <RefundList bookingId={bookingId}/>
        )}
      </div>
    </>

  )
}

export default Reservations

import React, { useState, useEffect } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import axios from 'axios'
import './reservations.css'
import { base_url } from '../../config'
import { getGeneralDate } from '../../utils/utils'

const Booking = (props) => {
  const {
    selectedAirlines,
    setSelectedAirlines,
    setBookingId
  } = props
  const [bookingData, setBookingData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(base_url + `/getBookings?airline=${selectedAirlines}`)
      if (res.status === 200) {
        setBookingData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <button
        onClick={() => setSelectedAirlines(null)}
      >
        Back
      </button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Booking ID</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              bookingData?.map((row) => (
                <TableRow
                  key={row.airlineid}
                  onClick={() => setBookingId(row.bookingid)}
                >
                  <TableCell align="left">{row.bookingid}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{getGeneralDate(row.bookingdate)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default Booking

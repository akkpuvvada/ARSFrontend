import React, { useEffect, useState } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import axios from 'axios'
import { base_url } from '../../config'
import { getGeneralDate } from '../../utils/utils'

const Bookings = () => {
  const [transportData, setTransportData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(base_url + '/getTransportReservationList')
      if (res.status === 200) {
        setTransportData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <TableContainer sx={{ mt: '2rem' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Reservation Date</TableCell>
            <TableCell align="left">Booking Type</TableCell>
            <TableCell align="left">License Plate</TableCell>
            <TableCell align="left">Vehicle Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transportData.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{getGeneralDate(row.resdate)}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.licenseplate}</TableCell>
              <TableCell align="left">{row.vehicletype}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Bookings

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

const Hotels = () => {
  const [transportData, setTransportData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(base_url + '/getHotelReservationList')
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
            <TableCell align="left">Room Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Checkin Date</TableCell>
            <TableCell align="left">Checkout Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transportData.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{getGeneralDate(row.resdate)}</TableCell>
              <TableCell align="left">{getGeneralDate(row.checkindate)}</TableCell>
              <TableCell align="left">{getGeneralDate(row.checkoutdate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Hotels

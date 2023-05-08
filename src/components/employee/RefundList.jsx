import React, { useState, useEffect } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
} from '@mui/material'
import axios from 'axios'
import { base_url } from '../../config'
import './reservations.css'

const ActiveBookings = (props) => {
  const {
    bookingId
  } = props

  const [activeBookings, setActiveBookings] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(base_url + `/getRefundList?bookingId=${bookingId}`)
      if (res.status === 200) {
        setActiveBookings(res.data)
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
      <TableContainer sx={{ mt: '2rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Passenger Name</TableCell>
              <TableCell align="left">Cost</TableCell>
              <TableCell align="left">Class</TableCell>
              <TableCell align="left">Refund Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeBookings.map((row) => (
              <TableRow key={row.ticketid}>
                <TableCell align="left">{row.ticketid}</TableCell>
                <TableCell align="left">{row.pass_name}</TableCell>
                <TableCell align="left">{row.cost}</TableCell>
                <TableCell align="left">{row.class}</TableCell>
                <TableCell align='left'>{row.amountrefund}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default ActiveBookings

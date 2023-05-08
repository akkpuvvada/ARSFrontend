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
  const [refundAmount, setRefundAmount] = useState({})
  const getData = async () => {
    try {
      const res = await axios.get(base_url + `/getActiveBookings?bookingId=${bookingId}`)
      if (res.status === 200) {
        setActiveBookings(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const initiateRefund = async (refundId) => {
    try {
      console.log(refundAmount[refundId])
      const data = {
        "amount": parseFloat(refundAmount[refundId]),
        "date": "5/3/2023"
      }
      const res = await axios.post(base_url + `/refund?refundId=${refundId}`,{
          "amount": parseFloat(refundAmount[refundId]),
          "date": "5/3/2023"
      })
      getData()
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
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Class</TableCell>
              <TableCell align="left">Seat No</TableCell>
              <TableCell align="left">Refund</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeBookings.map((row) => (
              <TableRow key={row.ticketid}>
                <TableCell align="left">{row.ticketid}</TableCell>
                <TableCell align="left">{row.pass_name}</TableCell>
                <TableCell align="left">{row.cost}</TableCell>
                <TableCell align="left">{row.class}</TableCell>
                <TableCell align="left">
                  <TextField
                    name="location"
                    onChange={(e) => setRefundAmount({ ...refundAmount, [row?.refundid]: e.target.value })}
                    type='number'
                    min={0}
                    label={"refund amount"}
                  />
                  <Button
                    variant="contained"
                    id={row.refundId}
                    onClick={(e) => { initiateRefund(row.refundid) }}
                  >
                    Initiate Refund
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default ActiveBookings

import React, { useState, useEffect } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import './reservations.css'
import axios from 'axios'
import { base_url } from '../../config'

const Airlines = (props) => {
  const {
    setSelectedAirlines
  } = props

  const [airLinesData, setAirlinesData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(base_url + '/getAirlines')
      if (res.status === 200) {
        setAirlinesData(res.data)
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Airline ID</TableCell>
              <TableCell align="left">Airlines Name</TableCell>
              <TableCell align="left">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              airLinesData.map((row) => (
                <TableRow
                  key={row.airlineid}
                  onClick={() => setSelectedAirlines(row.airlineid)}
                >
                  <TableCell align="left">{row.airlineid}</TableCell>
                  <TableCell align="left">{row.airname}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default Airlines

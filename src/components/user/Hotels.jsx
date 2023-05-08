import { useState } from 'react'
import { Box, TextField, Typography, Button, Stack } from '@mui/material'
import axios from 'axios'
import { base_url } from '../../config'

const Hotels = () => {
  const [id, setId] = useState('')
  const [hotelData, setHotelData] = useState({})

  async function handleSubmit() {
    try {
      const res = await axios.get(`${base_url}/getHotelReservation?id=${id}`)
      setHotelData(res.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Typography>Booking ID</Typography>
          <TextField
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Box>

        <Button variant="contained" onClick={handleSubmit}>
          <Typography>GO</Typography>
        </Button>
      </Box>

      {Object.keys(hotelData).length > 0 && (
        <Stack spacing="2rem" sx={{ mt: '5rem' }}>
          <Typography>Room Type: {hotelData.roomtype}</Typography>
          <Typography>Check In: {hotelData.checkindate}</Typography>
          <Typography>Check Out: {hotelData.checkoutdate}</Typography>
        </Stack>
      )}
    </>
  )
}

export default Hotels

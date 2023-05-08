import { useState } from 'react'
import { Box, TextField, Typography, Button, Stack } from '@mui/material'
import axios from 'axios'
import { base_url } from '../../config'

const Transport = () => {
  const [id, setId] = useState('')
  const [transportData, setTransportData] = useState({})

  async function handleSubmit() {
    try {
      const res = await axios.get(
        `${base_url}/getTransportReservation?id=${id}`
      )
      setTransportData(res.data[0])
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
            onChange={(e) => setId(e.target.value)}
          />
        </Box>

        <Button variant="contained" onClick={handleSubmit}>
          <Typography>GO</Typography>
        </Button>
      </Box>

      {Object.keys(transportData).length > 0 && (
        <Stack spacing="2rem" sx={{ mt: '5rem' }}>
          <Typography>Vehicle Type: {transportData.vehicletype}</Typography>
          <Typography>Vehicle Number: {transportData.licenseplate}</Typography>
        </Stack>
      )}
    </>
  )
}

export default Transport

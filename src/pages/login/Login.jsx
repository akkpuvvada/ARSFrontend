import { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { base_url } from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit() {
    try {
      const res = await axios.post(base_url + '/signin', { username, password })
      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken)
        console.log('in here')
        navigate('/employee-dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <TextField
        variant="outlined"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" onClick={handleSubmit}>
        <Typography>Submit</Typography>
      </Button>
    </Box>
  )
}

export default Login

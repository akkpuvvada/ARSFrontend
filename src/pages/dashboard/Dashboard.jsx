import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import User from './sub routes/User'
import Employee from './sub routes/Employee'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = ({ type }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(
      type === 'user'
        ? '/dashboard/manage-reservation'
        : '/employee-dashboard/bookings'
    )
  }, [])

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Box sx={{ width: '20%' }}>
        <Sidebar userType={type} />
      </Box>
      <Box sx={{ width: '100%', px: '2rem', pt: '2rem' }}>
        {type === 'user' ? <User /> : <Employee />}
      </Box>
    </Box>
  )
}

export default Dashboard

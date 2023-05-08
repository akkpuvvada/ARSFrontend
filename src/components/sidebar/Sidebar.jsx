import { Box, ButtonBase, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ userType }) => {
  const navigate = useNavigate()

  const links = userType === 'user' ? userLinks : employeeLinks

  return (
    <Box sx={{ bgcolor: '#14326d', color: '#fff', height: '100vh' }}>
      <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}>
        ARS
      </Typography>

      <Box
        sx={{
          paddingX: '1rem',
          mt: '5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {links.map((link) => (
          <ButtonBase
            sx={{ width: '100%', justifyContent: 'flex-start', px: '0.5rem' }}
            key={link.id}
            onClick={() =>
              navigate(
                userType === 'user'
                  ? '/dashboard'
                  : '/employee-dashboard' + link.path
              )
            }
          >
            <Typography sx={{ fontSize: '1rem' }}>{link.title}</Typography>
          </ButtonBase>
        ))}
      </Box>
    </Box>
  )
}

const userLinks = [
  {
    id: 1,
    title: 'Flights',
    path: '/manage-reservation',
  },
  {
    id: 2,
    title: 'Hotels',
    path: '/hotels',
  },
  {
    id: 3,
    title: 'Transport',
    path: '/transport',
  },
]

const employeeLinks = [
  {
    id: 1,
    title: 'Flights',
    path: '/reservations',
  },
  {
    id: 2,
    title: 'Transport',
    path: '/bookings',
  },
  {
    id: 3,
    title: 'Hotels',
    path: '/hotels',
  },
]

export default Sidebar

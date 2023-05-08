// import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import ManageReservation from '../../../components/user/ManageReservation'
import Hotels from '../../../components/user/Hotels'
import Transport from '../../../components/user/Transport'

const User = () => {
  const { service } = useParams()

  if (service === 'manage-reservation') return <ManageReservation />

  if (service === 'hotels') return <Hotels />

  return <Transport />
}

export default User

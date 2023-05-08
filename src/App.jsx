import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
// import { useEffect } from 'react'

function App() {
  const token = localStorage.getItem('accessToken')

  // useEffect(() => {}, [token])

  // console.log('token', token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard type="user" />} />
        <Route path="/dashboard/:service" element={<Dashboard type="user" />} />
        {/* <Route
          path="/employee-dashboard"
          element={
            token ? <Dashboard type="employee" /> : <Navigate to="/login" />
          }
        /> */}
        <Route
          path="/employee-dashboard"
          element={
            <Dashboard type="employee" />
          }
        />
        <Route
          path="/employee-dashboard/:service"
          element={
            token ? <Dashboard type="employee" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
